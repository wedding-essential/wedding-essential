import React from 'react';


export default function GiftList(props) {
return <div>{props.gifts.map(elem=>{
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