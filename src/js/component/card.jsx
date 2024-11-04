import React from "react";

const Card = ({digit}) =>{
    return(<div className="" style={{width:"100%", backgroundColor:"#1e4b66"}} >
        <h1 className="card mx-5 gap-0 " 
        style={{width: "100px", height: "100px", justifyContent:"center", textAlign:"center", backgroundColor:"cadetblue", borderRadius:"35px", color:"white"}}>
            {digit}
             
        </h1>
        </div>
    );
};

export default Card;