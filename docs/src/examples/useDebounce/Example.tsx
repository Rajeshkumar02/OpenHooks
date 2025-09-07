"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  useDebounce,
  type TimeUnit,
  type DebounceOptions,
} from "@/hooks/useDebounce";

export default function DebounceAxiosExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debounce config
  const [delay] = useState(500);
  const [unit] = useState<TimeUnit>("ms");
  const config: DebounceOptions = { delay, unit };
  const debouncedSearch = useDebounce(searchTerm, config);

  // Fetch data function
  const fetchPosts = async (query: string) => {
    setIsLoading(true);
    try {
      const url = query
        ? `https://jsonplaceholder.typicode.com/users?q=${query}&_limit=5`
        : `https://jsonplaceholder.typicode.com/users?_limit=5`; // initial fetch
      const res = await axios.get(url);
      setResults(res.data);
    } catch (error) {
      console.error("API error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchPosts("");
  }, []);

  // Search effect
  useEffect(() => {
    if (debouncedSearch.trim()) {
      fetchPosts(debouncedSearch);
    } else {
      fetchPosts("");
    }
  }, [debouncedSearch]);

  return (
    <div className="w-full max-w-lg mx-auto p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline" size="sm" onClick={() => setSearchTerm("")}>
          Reset
        </Button>
      </div>

      {isLoading && <p className="text-sm text-muted-foreground">Loading...</p>}

      <ul>
        {!isLoading &&
          results.length > 0 &&
          results?.map((item) => (
            <li key={item?.id}>
              <div className="text-sm font-medium">
                <div>Name: {item?.username}</div>
                <div>Email: {item?.email}</div>
              </div>
            </li>
          ))}
      </ul>

      {!isLoading && results.length === 0 && debouncedSearch && (
        <p className="text-sm text-muted-foreground">No results found.</p>
      )}
    </div>
  );
}
