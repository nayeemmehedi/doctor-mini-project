import React from "react";
import { FaAmbulance } from "react-icons/fa";
import {MdFastfood} from "react-icons/md"
import {FaUserNurse} from "react-icons/fa"
import {ImHome2} from "react-icons/im"





const Facilitys = () => {
  return (
    <div style={{ fontFamily: 'Besley'}}>
     <div className="my-3 py-4">
      <h3 className="text-center ">Our Facilities</h3>
     </div>

      <div className="row">
        <div className="col-4 offset-1 my-3">
          <div className="border border-danger rounded shadow">
            <div className="text-center m-2">
              {" "}
              <FaAmbulance size={42} />
            </div>

            <hr />

            <div className="p-4 text-center">
            <h5 >24 hours Ambulance</h5>
            <small >
              24-hour Ambulance (713)-880-HELP (4357) ADOPTION HOURS. Monday –
              Thursday from noon to 7 p.m. Friday – Sunday from 11 a.m. to 6
              p.m.
            </small>
            
            </div>
          </div>
        </div>

         <div className="col-4 offset-1 my-3">
          <div className="border border-primary rounded shadow">
            <div className="text-center m-2">
              {" "}
              <MdFastfood size={42} />
            </div>

            <hr />

            <div className="p-4 text-center">
            <h5 >Food and Dietary</h5>
            <small >
              24-hour Ambulance (713)-880-HELP (4357) ADOPTION HOURS. Monday –
              Thursday from noon to 7 p.m. Friday – Sunday from 11 a.m. to 6
              p.m.
            </small>
            
            </div>
          </div>
        </div> <div className="col-4 offset-2 my-3">
          <div className="border border-primary rounded shadow">
            <div className="text-center m-2">
              {" "}
              <FaUserNurse size={42} />
            </div>

            <hr />

            <div className="p-4 text-center">
            <h5 >Special Nurses</h5>
            <small >
              24-hour Ambulance (713)-880-HELP (4357) ADOPTION HOURS. Monday –
              Thursday from noon to 7 p.m. Friday – Sunday from 11 a.m. to 6
              p.m.
            </small>
            
            </div>
          </div>
        </div> <div className="col-4 offset-1 my-3">
          <div className="border border-danger rounded shadow">
            <div className="text-center m-2">
              {" "}
              <ImHome2 size={42} />
            </div>

            <hr />

            <div className="p-4 text-center">
            <h5 >Place Of WorkShop</h5>
            <small >
              24-hour Ambulance (713)-880-HELP (4357) ADOPTION HOURS. Monday –
              Thursday from noon to 7 p.m. Friday – Sunday from 11 a.m. to 6
              p.m.
            </small>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilitys;
