import { useState, useCallback } from "react";

// Define the structure of the returned values from the hook
type UseLocationResult = {
  getLocation: () => void; // Function to trigger location fetch
  location: GeolocationCoordinates | null; // Geolocation data (or null)
  loading: boolean; // Whether fetching is in progress
  error: string | null; // Error message if something goes wrong
};

/**
 * useLocation - Custom hook to fetch device's geolocation on demand.
 *
 * @returns {UseLocationResult} - The fetch function and state values.
 */
export function useLocation(): UseLocationResult {
  // Store geolocation coordinates
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);

  // Indicates if fetching is ongoing
  const [loading, setLoading] = useState<boolean>(false);

  // Stores any error that occurred during the fetch
  const [error, setError] = useState<string | null>(null);

  /**
   * getLocation - Triggers the browser's geolocation API to get the current position.
   */
  const getLocation = useCallback(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true); // Start loading state
    setError(null); // Reset error

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords); // Save coordinates
        setLoading(false); // Stop loading
      },
      (err) => {
        setError(err.message); // Save error
        setLoading(false); // Stop loading
      }
    );
  }, []);

  // Return all state and the location-fetching function
  return { getLocation, location, loading, error };
}
