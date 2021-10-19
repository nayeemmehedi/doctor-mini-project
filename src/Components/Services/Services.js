import React from 'react';
import fakedata from '../Tools/Tools.json';
import { Link,useHistory } from 'react-router-dom';



const Services = () => {
    const history = useHistory();


    const funchClick =() =>{
          history.push("/appointment");
    }



    return (
        <div>
            <h2 className="text-center my-2 " style={{ fontFamily: 'Besley', color: "#303f9f" }}>TYPE OF <span style={{ fontFamily: 'Besley', color: "#007bff" }}>DOCTORS</span></h2>

            <div className="row ms-4 p-5">
                {
                    fakedata.map(v =>

                        <div className="col-4 rounded" style={{ fontFamily: 'Besley' }}>

                            <img className="rounded" style={{ height: "200px", width: '300px' }} src={v.img} alt="" />

                            <h5 className="mt-3" style={{ color: "black"}}>Department: {v.name}</h5>

                            <h5  style={{ color: "white"}}>Name: {v.doctorName}</h5>

                            <p style={{ color: "#0207a8" ,width: '300px' }}> Description: {v.description}</p>

                            <div className="ps-5 ms-2 mb-3">

                                <button onClick={funchClick} className="btn btn-danger rounded-pill">Click Me</button>

                            </div>




                        </div>



                    )
                }
            </div>


        </div>
    );
};


export default Services;