import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Debounce'lu query
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      console.log("Fetching results for:", debouncedQuery);
      setResults([debouncedQuery + " 1", debouncedQuery + " 2", debouncedQuery + " 3"]);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
