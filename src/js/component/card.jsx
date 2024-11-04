import React from "react";

const Card = ({digit}) =>{
    return(<div className="bg-black" style={{width:"100%"}} >
        <h1 className="card bg-dark text-white mx-5 gap-0 " style={{width: "100px", height: "100px", justifyContent:"center", textAlign:"center"}}>
            {digit}
             
        </h1>
        </div>
    );
};

export default Card;