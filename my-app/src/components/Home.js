import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
//import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Home = () => {
    const { id, firstName, lastName } = sessionStorage;
    const history = useHistory();
    const logoutUser = () => {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("loginStatus");

        history.push("/signin");

    };


    return (
        <div className="App">
            <header>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" target="_blank" href="#">
                            {/* <img class="img-fluid" src="https://via.placeholder.com/180x45" /> */}
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link p-3" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#about-us">About us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#features">Departments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link p-3" href="#teams">Teams</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/signup" class="nav-link p-3o">Sign Up</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/list" class="nav-link p-3o">Get Employees Details</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/leave" class="nav-link p-3o">Get Employees Leave Details</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/performance" class="nav-link p-3o">Performance List</a>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link active" href="#">Active</a> */}
                                    <a class="nav-link p-3o" href="/signin">Log Out</a>
                                </li>


                            </ul>
                            <div className="col">
                                <div className="btn-group " role="group">
                                    <button
                                        type="button"
                                        className="btn btn-primary "
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Welcome {firstName}
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="btnGroupDrop1"
                                    >

                                    </ul>
                                </div>
                            </div>





                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section>

                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div style={{ height: 700, width: 1000 }}>
                                {/* <img src="../../images/icon.jpeg" class="d-block w-100"  alt="..." /> */}

                                <img src="../../images/icon.jpeg" alt="..." style={{ height: 500, width: 1350 }} />
                            </div>
                            {/* <div class="carousel-item">
                                <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                            </div>
                            <div class="carousel-item">
                                <a target="_blank" href="#"><img src="https://via.placeholder.com/1468x500" class="d-block w-100" alt="..." /></a>
                            </div> */}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section id="about-us" class="py-5">
                    <div class="container">
                        <div class="text-center py-4">
                            <h1>About Us</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <a target="_blank" href="#">
                                    <img src="../../images/GlenLakeVII_Exterior-4-250x250.jpg.crdownload" class="d-block img-fluid" alt="..." />
                                </a>
                            </div>
                            <div class="col-md-9">
                                <p class="lead text-muted">DS Solutions is built on trust our clients have in us.
                                The ultimate goal is to provide every client with
                                that feeling. How do we do it? With a serious
                                approach to work and with the orientation to
                                results. Just because everybody does something one
                                way, it doesn’t mean it’s the way to do it. That’s
                                why our slogan is: “Turning things around”. The
                                driving force behind our successful business
                                story is in the strive for providing better
                                 results.</p>
                                <p>
                                    {/* <a href="#" class="btn btn-primary my-2 me-2">More Details</a> */}
                                    <a href="#contact" class="btn btn-primary my-2">Contact Us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" class="py-5 bg-light">
                    <div class="container">
                        <div class="text-center py-4">
                            <h1>Departments</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-4 mb-2">
                                <div class="box-part text-center">
                                    <i class="text-primary fas fa-heart fa-3x mb-3" aria-hidden="true"></i>
                                    <div class="title">
                                        <h4>HR</h4>
                                    </div>
                                    <div class="text mb-3">
                                        <span>An HR department is tasked with maximizing employee productivity and protecting the company from any issues that may arise within the workforce.</span>
                                    </div>
                                    <a class="btn btn-outline-primary" href="#">Learn More</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 mb-2">
                                <div class="box-part text-center">
                                    <i class="text-success fas fa-laptop fa-3x mb-3" aria-hidden="true"></i>
                                    <div class="title">
                                        <h4>Marketing</h4>
                                    </div>
                                    <div class="text mb-3">
                                        <span>The Marketing Department plays a vital role in promoting the business and mission of an organization.</span>
                                    </div>
                                    <a class="btn btn-outline-success" href="#">Learn More</a>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 mb-2">
                                <div class="box-part text-center">
                                    <i class="text-danger fas fa-box-open fa-3x mb-3" aria-hidden="true"></i>
                                    <div class="title">
                                        <h4>Customer Service</h4>
                                    </div>
                                    <div class="text mb-3">
                                        <span>Customer service representatives help customers with complaints and questions, give customers information about products and services, take orders, and process returns.</span>
                                    </div>
                                    <a class="btn btn-outline-danger" href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
                <section id="teams" class="team section-bg">
                         <div class="container" data-aos="fade-up">

                             <div class="section-title">
                                 <h2>Team</h2>
                                <p>Talent wins games, but teamwork and intelligence win championships.</p>
                                 <p>Coming together is a beginning. Keeping together is progress. Working together is success.</p>
                             </div>

                             <div class="row">

                              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                     <div class="member d-flex align-items-start">
                                         {/* <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" /></div> */}
                                         <div class="member-info">
                                             <h4>Simi Vincent</h4>
                                             {/* <span>Chief Executive Officer</span> */}
                                             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p> */}
                                            <div class="social">
                                                 <a href=""><i class="ri-twitter-fill"></i></a>
                                                 <a href=""><i class="ri-facebook-fill"></i></a>
                                                 <a href=""><i class="ri-instagram-fill"></i></a>
                                                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                             </div>
                                        </div>
                                     </div>
                               </div>

                                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                                     <div class="member d-flex align-items-start">
                                         {/* <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" /></div> */}
                                         <div class="member-info">
                                             <h4>Darshana Shinde</h4>
                                            {/* <span>Product Manager</span>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p> */}
                                             <div class="social">
                                                 <a href=""><i class="ri-twitter-fill"></i></a>
                                                 <a href=""><i class="ri-facebook-fill"></i></a>
                                                 <a href=""><i class="ri-instagram-fill"></i></a>
                                                 <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                            </div>
                                        </div>
                                     </div>
                                </div>



                             </div>

                       </div>
                    </section>
                    

            </main>
            <footer class="pt-4 pt-md-5 border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md">
                            {/* <a href="#">
                  <img class="img-fluid" src="https://via.placeholder.com/250x65" />
              </a> */}
                        </div>
                        <h5 id="contact" align="center">Contact Us</h5>
                        <div class="col-6 col-md">
                          
                           
                             <div class="col-sm-12">
                                     <div class="info">
                                         <div class="address">
                                             <i class="bi bi-geo-alt"></i>
                                             <h4>Location:</h4>
                                             <p>DS Solutions Pune Maharashtra</p>
                                         </div>

                                         <div class="email">
                                             <i class="bi bi-envelope"></i>
                                             <h4>Email:</h4>
                                             <p><a href="mailto:dssolutions@gmail.com" class="__cf_email__" >dssolutions@gmail.com</a></p>
                                            
                                         </div>

                                        <div class="phone">
                                             <i class="bi bi-phone"></i>
                                             <h4>Call:</h4>
                                             <p>+91 7378905458</p>
                                         </div>

                                     </div>

                                 </div>
                           
                        </div>
                        
                       
                        </div>
                    </div>
                {/* </div> */}
                <div class="text-center py-4 bg-light mt-4">Copyright 2022 | All right reserved by DS Solutions</div>
            </footer>

             </div>
        
    );
}

export default Home;