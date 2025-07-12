import { useState, useCallback } from "react";

/**
 * useLocation - A custom hook to fetch the user's geolocation on demand.
 *
 * @returns {{
 *   getLocation: Function,              // Function to trigger location fetch
 *   location: GeolocationCoordinates | null, // Geolocation result
 *   loading: boolean,                  // Loading state
 *   error: string | null               // Error message (if any)
 * }}
 */
export function useLocation() {
  // Stores the user's coordinates after a successful fetch
  const [location, setLocation] = useState(null);

  // Indicates if the location fetch is in progress
  const [loading, setLoading] = useState(false);

  // Stores any error message that may occur
  const [error, setError] = useState(null);

  /**
   * getLocation - Triggers geolocation API to fetch the user's location.
   */
  const getLocation = useCallback(() => {
    // Handle browsers that don't support geolocation
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Reset any previous errors

    // Attempt to get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords); // Save the coordinates
        setLoading(false); // Stop loading
      },
      (err) => {
        setError(err.message); // Save the error message
        setLoading(false); // Stop loading
      }
    );
  }, []);

  // Return state and trigger function
  return { getLocation, location, loading, error };
}
