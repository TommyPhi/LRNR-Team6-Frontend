// import React from "react";
// import './App.css';
// import lrnrlogo from "./assets/images/lrnrlogo.png";
// import lrnrwallpaper from "./assets/images/lrnr-turtle2.jpg";
// import { Container } from 'react-bootstrap';


import turtlelogo from "./assets/images/transparent-turtle.png";


// export default function Home() {
//   return (
//     <div>
// <div className="wallpaper">
//         <Container>
//           <div className="wallpaper-content">
//             <img
//               src={lrnrwallpaper}
//               alt="LRNR logo"
//             />
//           </div>
//         </Container>
//         </div>

//       <div class="container">
//         <div class="p-5 text-center">
//           <div
//             style={{
//               display: "flex",
//               height: "200px",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src={lrnrlogo}
//               alt="LRNR logo"
//               style={{
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//               }}
//             />
//           </div>
//           <h4 class="mb-3">Your guided path to programming enlightenment</h4>
//           <a data-mdb-ripple-init class="btn btn-primary" href="" role="button">
//             Begin journey
//           </a>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           <div className="col">
//             <div class="card" style={{ width: "18rem;", border: "none" }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="50"
//                 height="50"
//                 fill="#64B6AC"
//                 class="bi bi-lightning-fill"
//                 viewBox="0 0 16 16"
//                 className="card-img-top"
//               >
//                 <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
//               </svg>
//               <div class="card-body">
//                 <h5 className="cart-title text-center">Personalized Quizzes</h5>
//                 <p class="card-text">
//                   Greetings, young padawan. Are you ready to embark on a journey
//                   of personalized enlightenment through the art of coding? Our
//                   app, can create custom quizzes that align with your coding
//                   skills and interests. Whether you are a novice or a master,
//                   our system can generate questions that will test your
//                   proficiency in programming languages, tools, and concepts
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div class="card" style={{ width: "18rem;", border: "none" }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="50"
//                 height="50"
//                 fill="#64B6AC"
//                 class="bi bi-cash"
//                 viewBox="0 0 16 16"
//                 className="card-img-top"
//               >
//                 <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
//                 <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
//               </svg>
//               <div class="card-body">
//                 <h5 class="card-title text-center">Rewarding</h5>
//                 <p class="card-text">
//                   Our app is designed to be both challenging and rewarding, so
//                   you can learn new concepts while enjoying the process. With
//                   our personalized quiz app, you can track your progress,
//                   compete with your peers, and discover new areas of expertise.
//                   The journey of a thousand lines of code begins with a single
//                   keystroke
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div class="card" style={{ width: "18rem;", border: "none" }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="50"
//                 height="50"
//                 fill="#64B6AC"
//                 class="bi bi-person-fill"
//                 viewBox="0 0 16 16"
//                 className="card-img-top"
//               >
//                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
//               </svg>
//               <div class="card-body">
//                 <h5 class="card-title text-center">Personal SME</h5>
//                 <p class="card-text">
//                   Welcome to the path of knowledge. Our app is like having a
//                   personal subject matter expert at your side, guiding you on
//                   your journey towards wisdom
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import './App.css';
// import lrnrlogo from "./assets/images/lrnrlogo.png";
// import lrnrwallpaper from "./assets/images/lrnr-turtle2.jpg";
// import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-v1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mr-auto text-center text-lg-left">
              <span className="d-block subheading">About</span>
              <h1 className="heading mb-3">About LRNR</h1>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!</p>
              <p className="mb-4"><a href="/quiz" className="btn btn-primary">Start Quiz Here</a></p>
            </div>
            <div className="col-lg-6">
              <figure className="illustration">
                <img src={turtlelogo} alt="for page" className="img-fluid"
                 style={{ width: "20%", height: "35%" }}/>
                
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <figure className="img-play-vid">
                <img src="images/hero_1.jpg" alt="background imaging" className="img-fluid" />
                <div className="absolute-block d-flex">
                  <span className="text">Watch the Video</span>
                  <a href="/" data-fancybox className="btn-play">
                    <span className="icon-play"></span>
                  </a>
                </div>
              </figure>
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="mb-4 section-heading">What is LRNR?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!</p>
              <ul className="list-check list-unstyled mb-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Unde doloremque</li>
              </ul>
              <p><a href="/" className="btn btn-primary">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      

      {/* CARDS SECTION  */}
      <div className="container-fluid pt-5 pb-5 bg-custom-color">
      <h1 className="text-center pt-4 pb-4 h4">Bootstrap 4 card component MORE INFORMATION</h1>
  <div className="row">
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon one">
												<i classname="far fa-sun"></i>
											</div>
                      
											<div className="content">
												<h4 className="title">
													Exclusive Offer
												</h4>

                        <p className="card-text">
                    Exclusive Offer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel justo efficitur auctor.
                  </p>
                        
												<a href="#" className="link">read more <i class="fas fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div class="single-feature">
											<div className="icon two">
												<i className="fas fa-fire-extinguisher"></i>
											</div>
											<div className="content">
												<h4 className="title">
													Provably Fair
												</h4>

                        <p className="card-text">
                    Exclusive Offer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel justo efficitur auctor.
                  </p>

												<a href="/" className="link">read more <i class="fas fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6">
										<div className="single-feature">
											<div className="icon three">
												<i className="fas fa-headset"></i>
											</div>
											<div className="content">
												<h4 className="title">
														24/7 Support
												</h4>

                        <p className="card-text">
                    Exclusive Offer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo vel justo efficitur auctor.
                  </p>

												<a href="/" className="link">read more <i class="fas fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>
            </div>
          </div>
  );
}