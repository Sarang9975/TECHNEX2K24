import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

import img1 from "../assets/images/hackathon.jpeg";
import avt1 from "../assets/images/layouts/avt-01.png";
import avt2 from "../assets/images/layouts/avt-02.png";
import avt3 from "../assets/images/layouts/avt-03.png";
import avt4 from "../assets/images/layouts/avt-04.png";
import Footer2 from "../components/footer/Footer2";

function BlogDetails(props) {
  return (
    <div className="wrapper">
      {/* <PageTitle title="Hackathon" /> */}

      <section className="bloglist ">
        <div className="container w-[80%]">
          <div className="row">
            <div className="bloglist__main">
              <div className="list details">
                <h4 className="title text-[30px] font-bold"><span className="text-[35px]" style={{background:"linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Hackathon</span> :
                  ''Code all night, Ignite your passion for coding.''
                </h4>
                <p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.9375 0.75V2.0625M9.0625 0.75V2.0625M0.75 9.9375V3.375C0.75 3.0269 0.888281 2.69306 1.13442 2.44692C1.38056 2.20078 1.7144 2.0625 2.0625 2.0625H9.9375C10.2856 2.0625 10.6194 2.20078 10.8656 2.44692C11.1117 2.69306 11.25 3.0269 11.25 3.375V9.9375M0.75 9.9375C0.75 10.2856 0.888281 10.6194 1.13442 10.8656C1.38056 11.1117 1.7144 11.25 2.0625 11.25H9.9375C10.2856 11.25 10.6194 11.1117 10.8656 10.8656C11.1117 10.6194 11.25 10.2856 11.25 9.9375M0.75 9.9375V5.5625C0.75 5.2144 0.888281 4.88056 1.13442 4.63442C1.38056 4.38828 1.7144 4.25 2.0625 4.25H9.9375C10.2856 4.25 10.6194 4.38828 10.8656 4.63442C11.1117 4.88056 11.25 5.2144 11.25 5.5625V9.9375"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  February 18, 2024
                </p>

                <div className="line"></div>

                <div className="content-d">
                  {/* <ul className="list-social">
                                        <li><Link to="#">
                                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z" fill="white"></path>
                                            </svg>    
                                        </Link></li>
                                        <li><Link to="#">
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z" fill="white"></path>
                                            </svg> 
                                        </Link></li>
                                        <li><Link to="#">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z" fill="white"></path>
                                                <path d="M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z" fill="white"></path>
                                                <path d="M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z" fill="white"></path>
                                                </svg>
                                                
                                        </Link></li>
                                    
                                    </ul> */}

                  <div className="main">
                    {/* <p className="boild">Technex - Hackathon is the fourth version of University Hackathon in Nagpur under Technex, which the Annual Technical Fest of St.Vincent Pallotti College of Engineering & Technology, Nagpur. It is a platform where hackers, developers, innovators, entreuprenuers, students can come together to create solutions to real life problems. Developers can showcase their abilities, students can increase their network, innovators can create new solutions.</p> */}
                    <div className="image">
                      <img src={img1} alt="cyfonii" />
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
                    </div>
                    <p>
                      Technex - Hackathon is the fourth version of University
                      Hackathon in Nagpur under Technex, which the Annual
                      Technical Fest of St.Vincent Pallotti College of
                      Engineering & Technology, Nagpur. It is a platform where
                      hackers, developers, innovators, entreuprenuers, students
                      can come together to create solutions to real life
                      problems. Developers can showcase their abilities,
                      students can increase their network, innovators can create
                      new solutions.
                    </p>

                    <div className="line"></div>
                    <div className="flex flex-col text-[20px] gap-2 justify-center items-center">
                      <span className="">Prize Amount : 60,000/-</span>
                      <span className="">Registration Fees : FREE/-</span>
                      <span className="">Event Dates : 9th & 10th Feb</span>
                      <span className="">Result Declaration : 10th Feb</span>
                      <span className="">Team Size : 3 - 4 Members</span>
                      <span>Contact Info :-</span>
                      <span>Sahil : 9325912920</span>
                      <span>Sejit : 8080137067</span>

                    <Link to="/contact" className="action-btn">
                  <span>Register Now</span>
                </Link>
                    <Link to="/contact" className="action-btn">
                  <span>Rule Book</span>
                </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* <Sidebar /> */}
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
}

export default BlogDetails;
