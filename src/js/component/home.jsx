import React, { useState, useEffect } from "react";
import Card from "./card";

const Home = ({contador, cuentaregresiva}) => {
    

    return (

        <div className="">
          <div className="d-flex">
          <Card digit={<i className="fa-solid fa-clock"></i>} />
            <Card digit={Math.floor(contador / 100000) % 10} />
            <Card digit={Math.floor(contador / 10000) % 10} />
            <Card digit={Math.floor(contador / 1000) % 10} />
            <Card digit={Math.floor(contador / 100) % 10} />
            <Card digit={Math.floor(contador / 10) % 10} />
            <Card digit={contador % 10} />
            </div> 
            <div className="d-flex">
                 <Card digit={<i className="fa-solid fa-clock"></i>} />
            <Card digit={Math.floor(cuentaregresiva / 100000) % 10} />
            <Card digit={Math.floor(cuentaregresiva / 10000) % 10} />
            <Card digit={Math.floor(cuentaregresiva / 1000) % 10} />
            <Card digit={Math.floor(cuentaregresiva / 100) % 10} />
            <Card digit={Math.floor(cuentaregresiva / 10) % 10} />
            <Card digit={cuentaregresiva % 10} /></div>
            
        </div>
    );
};

export default Home;
