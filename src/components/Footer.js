import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xs-12 about-company">
          <h2>LRNR</h2>
          <p className="pr-5 text-white-50">Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.' </p>
          <div className="socialIcons">
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaFacebook /></a>
          <a href="/"><FaTwitter /></a>
          <a href="/"><FaYoutube /></a>
        </div>
        </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Links</h4>
        <ul className="m-0 p-0">
          <li><a href="/">Home</a></li>
          <li><a href="/quiz">Quiz Generator</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>1101 Red Ventures Dr, Fort Mill, SC 29707</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p><i className="fa fa-envelope-o mr-3"></i>info@lrnr.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2024. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>

  );
}
