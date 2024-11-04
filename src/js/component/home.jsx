import React, { useState, useEffect } from "react";
import Card from "./card";

const Home = ({time}) => {
    

    return (
        <div className="justify-content-center d-flex">
           <Card digit={<i className="fa-solid fa-clock"></i>} />
            <Card digit={Math.floor(time / 100000) % 10} />
            <Card digit={Math.floor(time / 10000) % 10} />
            <Card digit={Math.floor(time / 1000) % 10} />
            <Card digit={Math.floor(time / 100) % 10} />
            <Card digit={Math.floor(time / 10) % 10} />
            <Card digit={time % 10} />
        </div>
    );
};

export default Home;
