import React from 'react';


export default function GuestList(props) {
  return <div>{props.guests.map(elem=>{
    return <div key={elem._id}>
               <div>
               <img />
                </div>
            <div>
               <h2>{elem.name}</h2>
              <p>{elem.description}</p>
            </div>
            <div>
              <a>Buy it here</a>
             <button>Give this Gift</button>
            </div>
         </div>
  })}</div>
     }
