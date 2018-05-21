import React from "react";
import { Link } from "react-router";

const CommunityCallout = ( { text, buttons, color } ) => {
    const styles = {
        "backgroundColor": color
    }
    return (
        <div className="community-callout" style={ styles }>
            <h3 className="community-text">{ text }</h3>
            <div>
              { buttons.map( ( button, i ) => {
                  if( button.link ){
                      return <Link key={ i } to={ button.link } className="solid-black-button">{ button.text }</Link>
                  }
                  else{
                      return <a key={ i } className="solid-black-button" href={ button.url }>{ button.text }</a>
                  }
              } ) }
            </div>
        </div>
    );
}

export default CommunityCallout;
