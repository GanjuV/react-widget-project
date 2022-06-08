import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("useEffect called no term");

    // Use it as a cleanup function
    return () => {
      console.log("cleanup no term");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect called term");

    // Use it as a cleanup function
    return () => {
      console.log("cleanup term");
    };
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
