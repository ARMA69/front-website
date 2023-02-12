import React, { useState, useCallback, useContext } from "react";
import { myContext } from "../../context/context";
import styles from "./SearchPlace.module.sass";
import { SiRoamresearch } from "react-icons/si";
import { Link } from "react-router-dom";

const SearchPlace = () => {
  const [search, setSearch] = useState("");

  const handleSetSearch = (event) => {
    setSearch(event.target.value);
  };
  const { fetchHomePageMeals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(search);
  }, [search, fetchHomePageMeals]);
  return (
    <>
      <div className={styles.searchBox}>
        <input
          className={styles.searchHeader}
          type="search"
          placeholder="Type a meal name - Banana, Sandwich"
          value={search}
          onChange={handleSetSearch}
        />

        <Link to="/meals" onClick={fetchMealsHandler} type="submit">
          <SiRoamresearch title="Search" />
        </Link>
      </div>
    </>
  );
};

export default SearchPlace;
