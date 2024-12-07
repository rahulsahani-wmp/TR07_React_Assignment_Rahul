import { Link } from 'react-router-dom';
import logo from '../images/logo192.png'

function Header() {
  return (
    <>
      <link rel="stylesheet" href="" />
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img
              src={logo}
              alt="Logo"
              style={{ height: '90px', width: '90px', padding: '10px' }}
            /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-end gap-4 w-100 ">
              <li className="nav-item">
                <Link className="nav-link  fs-2 " aria-current="page" to="/todo">TODO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fs-2 " to="/countrystateselector">Country-State Selector</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link  fs-2 " to="/postselector">Post Selector</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h1></h1>
      </div>
    </>
  );
}

export default Header;
