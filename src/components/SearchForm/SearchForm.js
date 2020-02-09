import React, { useState } from "react";
import "./SearchForm.css";


const SearchForm = (props) => {

  // establish GETTER & SETTER variables. Starting state is set to an empty string
  const [searchValue, setSearchValue] = useState("");

  // triggered by user input, this function takes the words typed by user and sets that as the value(aka state) of the searchValue variable
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  // function to reset the value(aka state) of searchValue back to an empty string
  const resetInputField = () => {
    setSearchValue("");
  }

  // this function triggers an (e)vent which is to take the value(aka state) of the searchValue variable and attaches it to the prop(ertie)s of the parent function (SearchForm)
  // after the prop is set, the resetInputField function is called to reset the value(aka state) of setSearchValue
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return(
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  )
}

export default SearchForm ; 