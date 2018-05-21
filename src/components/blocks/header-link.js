import React from "react";
import { Link } from "react-router";

const HeaderLink = ( { link, key, onClick } ) => {
    if( link.url ){
        return (
            <li key={ key }>
                <a href={ link.url } activeClassName="active">{ link.text }</a>
            </li>
        );
    }

    return (
        <li key={ key }>
            <Link to={ link.route } activeClassName="active" onClick={ onClick }>
                { link.text }
            </Link>
        </li>
    );
};

export default HeaderLink;
