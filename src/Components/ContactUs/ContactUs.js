import React from 'react';
import picture from "../Picture/s.jpg"

const ContactUs = () => {
    return (
        <div>
            <div class="container">



                <div class="row">
                      <div class="col text-center">
                        <img style={{ height: "550px"}} src={picture} alt="" />
                    </div>




                    <div class="col">

                     <div className ="my-5">
                      <h3 className="text-center">Contract Us </h3>
                     
                     
                     </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your phone number with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Text Us </label>
                                <textarea type="textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text"></div>
                            </div>
                            
                           
                            <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
                        </form>
                    </div>


                  



                </div>


            </div>


        </div>



    );


};


export default ContactUs;