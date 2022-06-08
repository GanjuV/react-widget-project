import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // This hook we can call it for three purpose
  // 1. When component is rendered for the firt time.
  // 2. When ever component is re-render
  // 3. Some piece of data has been changed.
  // ************** Example 1. When array is empty ********/
  // useEffect(() => {
  //    console.log("First time render")
  //   return () => {
  //   };
  // }, []);
  //**********  Example 2. nothing  ********** */
  // useEffect(() => {
  //    console.log("First time render and run after every re-render")
  //   return () => {
  //   };
  // });
  //**********  Example 3. Run when term data change and initial render  ********** */
  // useEffect(() => {
  //    console.log("Run only when term data change and initial render.")
  //   return () => {
  //   };
  // },[term]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
