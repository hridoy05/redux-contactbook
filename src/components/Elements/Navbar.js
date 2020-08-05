import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [name, setName] = useState(true)
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">
                    Contact Book
                </a>
                <div>
                    {
                        name ?
                            <Link to="/contacts/add" onClick={() => setName(!name)} className="btn btn-light ml-auto">
                                Create User
                    </Link>
                            : ''
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;