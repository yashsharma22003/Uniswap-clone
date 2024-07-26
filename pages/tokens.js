import React, {useEffect, useState} from "react";

//internal Inport
import {Footer, Header, Table} from "../components/index";
import { getAllHistory } from "../utils/context";

const tokens = () => {
 const [history, setHistory] =useState([]);
  const loadData = async () => {
    const data = await getAllHistory();
    setHistory(data.reverse());
  };
 useEffect(() => {
  loadData();
 },[]);

 console.log(history);

  return (
    <div className="bg-[#1A1A1A]">
      <Header/>
      <div className= "p-[80px]">
      <Table history={history} />
  </div>
  <Footer />
    </div>
  );
};

export default tokens;
