import React, { Component } from "react"
import "./footer.css"

const insta = require("../../../shared/insta logo.png")
const spotify = require("../../../shared/spotify logo.png")

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small mdb-color pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Chasing Plastic
              </h6>
              <p>
                Together we can make a difference! Let's join our hands and
                chase plastic together.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none"></hr>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Content</h6>
              <p>
                <a href="https://medium.com/chasing-plastics" className = "footer-link" target = "_blank">Blogs</a>
              </p>
              <p>
                <a href="https://open.spotify.com/show/0QOQzgkDBJqgGbGtNkqsbr" target="_blank" className = "footer-link">Podcasts</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none"></hr>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a className = "footer-link" href="https://www.instagram.com/chasingplastics/" target = "_blank">Instagram</a>
              </p>
              <p>
                <a className = "footer-link" href="https://open.spotify.com/show/0QOQzgkDBJqgGbGtNkqsbr" target="_blank">Spotify</a>
              </p>
              <p>
                <a className = "footer-link" href="https://medium.com/chasing-plastics" target = "_blank">Medium</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none"></hr>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Contact Info
              </h6>
              {/* <p>
                <i className="fa fa-home mr-3"></i> New York, NY 10012, US
              </p> */}
              <p className = "my-5">
                <span className="fa fa-lg fa-envelope my-2 mr-2"></span>
                info.chasingplastic@gmail.com
              </p>
              {/* <p>
                <i className="fa fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3"></i> + 01 234 567 89
              </p> */}
            </div>
          </div>

          <hr></hr>

          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2020 Copyright:
                <a className = "footer-link" href="#">
                  <strong> chasingplastic.com</strong>
                </a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  {/* Twitter aur facebook ke bhi icons banadena agar isme lagana ho toh. verna ye dono links hata denge */}
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1 footer-link">
                      <span className="fa fa-facebook fa-2x"></span>
                    </a>
                  </li>

                  {/* <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-twitter fa-2x"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1 footer-link" target="_blank" href = "https://open.spotify.com/show/0QOQzgkDBJqgGbGtNkqsbr">
                      <i className="fa fa-spotify fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1 footer-link" target = "_blank" href = "https://www.instagram.com/chasingplastics/">
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
