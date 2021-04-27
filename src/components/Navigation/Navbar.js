import React, {useState, useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from "react-router-dom";

function Navbar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8000/api/category/"
        }).then(response => {
            setCategories(response.data)
        })
    }, [])

    console.log(categories)

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {categories.map(category => (
                                <Link className="nav-link" to={{pathname: `/category/${category.id}`, fromDashboard: false}}>{category.name}</Link>
                                // <a className="nav-link" href="#" key={category.id}>{category.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
