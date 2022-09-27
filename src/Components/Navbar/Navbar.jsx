import React, { useState, useEffect  } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

import brand from "../../assets/Images/brand.png";

import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);
    const [add, setAdd] = useState([]);

        useEffect(() => {
        axios.get('response.json')
          .then(res => {
            // console.log(res.data.results);
            setAdd(res.data.results);
          })
      });

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <style jsx='true'>
                {`
                    .active {
                        color: #6c757d !important;
                        font-weight: bold !important;
                        border-bottom: 3px solid #6c757d !important;
                    }

                    .button {
                        border-radius : 0;
                    }
                `}
            </style>

            <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">
                        <img src={brand} alt="brand" width={150} className="img-fluid" />
                    </Link>
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 gap-2 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeclassname='active' onClick={handleClick} className={`${styles.navLink} nav-link`} to="/">Dashboard</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} aria-current="page" to="/internalbot">Internal Bots</NavLink>
                            </li>
                            {add.slice(0, 1).map((item) => (
                            <>
                              {!(`${item.access_code}` == "aaccess_code") && (
                                <li className="nav-item">
                                    <NavLink onClick={handleClick} className={`${styles.navLink} nav-link disabled`} to="/externalbot">External Bots</NavLink>
                                </li>     
                              )}
                            </>
                          ))}
                            {/* <li className="nav-item">
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/experience">Create Experience</NavLink>
                            </li> */}
                        </ul>
                        <div className={`${styles.buttons} d-flex gap-2`}>
                            <button onClick={() => navigate('/interaction')} className={`${styles.search}`}>
                                <FaSearch className='fs-4' />
                            </button>
                            <Link onClick={handleClick} className="mt-1" to="/profile">
                                <img
                                    src="https://gravatar.com/avatar/21396bf8a2c260311eaca86416ef5db7?s=400&d=mp&r=x"
                                    alt="avatar"
                                    className={styles.avatar}
                                />
                            </Link>
                            <button onClick={() => navigate('/login')} className={`${styles.login} btn btn-outline-secondary`}>Login</button>
                            <button onClick={() => navigate('/register')} className="btn btn-dark">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;