import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <nav className="nav">
        <i>
          <label className="label">Make Team Easy</label>
        </i>
      </nav>

      <div className="whole-sidebar">
        <div className="side-menu">
          <center>
            {/* <img src="image.jpg"></img> */}
            <br></br>
            <br></br>
            <h2>Abc yadav</h2>
          </center>
          <br></br>

          <a href="github.com">
            <i class="fa fa-home"></i>
            <span>Home</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-user"></i>
            <span>login</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-address-card"></i>
            <span>Profile</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-user-plus"></i>
            <span>Freinds</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-person-circle-plus"></i>
            <span>followers</span>
          </a>
          <a href="github.com">
            <i class="fa fa-envelope"></i>
            <span>message</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-people-group"></i>
            <span>Make team</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Search player</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-location-dot"></i>
            <span>Your location</span>
          </a>
        </div>

        <div className="right-side-menu">
          <center>
            <br></br>
            <br></br>
            <h2>Sports</h2>
          </center>
          <br></br>
          <a href="github.com">
            <i class="fa-solid fa-users-between-lines"></i>
            <span>Training for cricket</span>
          </a>
          <a href="github.com">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Search sports goods</span>
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <a href="github.com">
            <i class="fa-brands fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a href="github.com">
            <i class="fa-brands fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="github.com">
            <i class="fa-brands fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="github.com">
            <i class="fa-brands fa-youtube"></i>
            <span>Youtube</span>
          </a>
        </div>

        <div className="middle-side-menu-image-post">
          <h1>this image post by user</h1>
          <p>surya kumar ............................</p>
          <img src="sky1.jpg" className="image"></img>
          <nav className="cnav">
            <div className="d1">
              <p>like</p>
            </div>
            <div className="d2">
              <p>comment</p>
            </div>
            <div className="d3">
              <p>share</p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
