import React from 'react';
import fakedata from '../Tools/Tools.json';


const Doctortype = () => {
    return (
        <div>
            <h2 className="text-center my-5 " style={{ fontFamily: 'Besley', color: "#303f9f" }}>Medical  <span style={{ fontFamily: 'Besley', color: "#007bff" }}>Departments</span></h2>

            <div className="row ms-4 p-5">
                {
                    fakedata.slice(0,3).map(v =>

                        <div className="col-4 rounded" style={{ fontFamily: 'Besley' }}>

                            <img className="rounded" style={{ height: "200px", width: '300px' }} src={v.img} alt="" />

                            <h5 className="mt-3" style={{ color: "black"}}>Department: {v.name}</h5>

                            <h5  style={{ color: "white"}}>Name: {v.doctorName}</h5>

                            <p style={{ color: "#0207a8" ,width: '300px' }}> Description: {v.description}</p>

                           



                        </div>



                    )
                }
            </div>


        </div>
    );
};

export default Doctortype;