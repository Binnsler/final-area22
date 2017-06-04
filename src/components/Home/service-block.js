import React from "react";
import { Link } from "react-router";

const ServiceBlock = ( { service } ) => (
    <div className="col-1-3 service">
      <img className="service-graphic" src={ service.img }/>
      <h3>{ service.title }</h3>
      <p className="paragraph">{ service.text }</p>
      { service.buttons.map( ( button, i ) => (
          <Link key={ i } to={ button.route } className="black-button">{ button.text }</Link>
      ) ) }
    </div>
)

export default ServiceBlock;
