
import React from "react";
import "./App.css";
import { dataCustomers, rewardsArray } from "./dataPurchases";
import Rewards from "./Rewards";
import { Link } from "react-router-dom";


export const Customers = () => {
    console.log(rewardsArray);
    return (
        <>
         <Link to = "/transactions" >
            <h3>View Transactions</h3>
        </Link>
        <div className="customer-container">
            <Rewards rewardsArray = {rewardsArray}/>
        </div>
        </>
    );
};