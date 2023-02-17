import React, { useState } from "react";
import MainContext from "./MainContext.js";
export default function DataContext(props) {
  const [Data, setData] = useState([
    {
      key: 1,
      title: "cloth1",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 2,
      title: "cloth2",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 3,
      title: "cloth3",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 4,
      title: "cloth4",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 5,
      title: "cloth5",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 6,
      title: "cloth6",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 7,
      title: "cloth7",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 8,
      title: "cloth8",
      buy: 1300,
      rent: 1245,
    },
  ]);
  return (
    <MainContext.Provider value={{Data,setData}}>
    {props.children}
    </MainContext.Provider>  
    );
}
