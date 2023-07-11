import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
              width={130}
              height={94}
              style={{ padding: "10px" }}
            />
          </div>
          <div className="footer-col">
            <h3>THE BASICS</h3>
            <ul>
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>GET INVOLVED</h3>
            <ul>
              <li>Contribution Bible</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>COMMUNITY</h3>
            <ul>
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>LeaderBoard</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>LEGAL</h3>
            <ul>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
