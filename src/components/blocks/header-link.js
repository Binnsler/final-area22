import React from "react";
import { Link } from "react-router";

const HeaderLink = ( { link, key, onClick } ) => {
    if( link.url ){
        return (
            <li key={ key } className="nav-link-container">
                <a href={ link.url } className="nav-link" activeClassName="active">{ link.text }</a>
            </li>
        );
    }

    return (
        <li key={ key } className="nav-link-container">
            <Link to={ link.route } className="nav-link" onlyActiveOnIndex={ link.route === "" ? true : false } activeClassName="active" onClick={ onClick }>
                { link.text }
            </Link>
        </li>
    );
};

export default HeaderLink;
