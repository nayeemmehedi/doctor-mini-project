import React from 'react';
import time from "./time.json"
import "./newcss.css"

const TimeTable = () => {
    return (
        <div style={{fontFamily:"Besley"}} >

         <h1 className="text-center mt-2">Senior Dcotor time table</h1>

         
          <div className="row  m-3 p-4">
         

          {
              time.map(v=>

              <div className="col-4 text-center p-2 " >

                <div className="border border-danger rounded shadow p-2">

                <div className="border border-primary rounded shadow ">

                 <h4>{v.time}</h4>
                 <h6>{v.doctorName}</h6>
                 <p>{v.problemName}</p>
                
                
                </div>
              
                
                
                </div>
              
              </div>
              
              
              )
          }
          
          
          </div>
        </div>
    );
};

export default TimeTable;