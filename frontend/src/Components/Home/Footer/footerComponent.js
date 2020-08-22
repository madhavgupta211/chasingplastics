import React, { Component } from "react"
import "./footer.css"

const insta = require("../../../shared/insta logo.png")
const spotify = require("../../../shared/spotify logo.png")

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small mdb-color pt-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">
                Chasing Plastic
              </h6>
              <p>
                Together we can make a difference! Let's join our hands and
                chase plastic together.
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none"></hr>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Content</h6>
              <p>
                <a href="#!">Blogs</a>
              </p>
              <p>
                <a href="#!">Podcasts</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none"></hr>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a href="#!">Instagram</a>
              </p>
              <p>
                <a href="#!">Spotify</a>
              </p>
              <p>
                <a href="#!">Medium</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none"></hr>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact Info</h6>
              <p>
                <i class="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i>{" "}
                info.chasingplastic@gmail.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>

          <hr></hr>

          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-center text-md-left">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/">
                  <strong> chasingplastic.com</strong>
                </a>
              </p>
            </div>

            <div class="col-md-5 col-lg-4 ml-lg-0">
              <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                  {/* Twitter aur facebook ke bhi icons banadena agar isme lagana ho toh. verna ye dono links hata denge */}
                  <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn-floating btn-sm rgba-white-slight mx-1">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <img
                      src={spotify}
                      className="d-none d-lg-block nav-redirects"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      src={insta}
                      className="d-none d-lg-block nav-redirects"
                    />
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
