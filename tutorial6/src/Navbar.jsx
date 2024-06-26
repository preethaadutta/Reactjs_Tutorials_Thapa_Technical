import React from 'react';//importing React from react package

//creating Navbar component with dynamic content with the help of props
function Navbar(props)
{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.nav1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.nav2}</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.nav3}</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">{props.subnav1}</a></li>
                                <li><a className="dropdown-item" href="/">{props.subnav2}</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">{props.subnav3}</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">{props.search}</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;//exporting Navbar component