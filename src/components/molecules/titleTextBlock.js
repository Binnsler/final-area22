// Libraries
import React from "react";

const TitleTextBlock = ( { text, backgroundColor, textColor } ) => {
    const styles = {
        "backgroundColor": backgroundColor,
        "color": textColor
    }

    return (
        <div className="titleTextBlock" style={ styles }>
            <div className="width70">
                <h1>{text.title}</h1>
                <p>{text.paragraph}</p>
            </div>
        </div>
    );
}

export default TitleTextBlock;
