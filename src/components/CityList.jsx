import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message"
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities) return <Message message="Add your first city on the map"/>
  return <ul className={styles.cityList}>
    {cities.map((city)=> <CityItem city={city} key={city.id}/>)}
  </ul>;
};
export default CityList;