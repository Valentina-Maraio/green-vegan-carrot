import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
 
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
      e.preventDefault();
      navigate("searched/"+input);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="search-bar">
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search"
            type="text"
          />
        </span>{" "}
      </div>
    </form>
  );
};

export default Search;
