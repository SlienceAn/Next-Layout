import React from 'react';

interface Text {
    text?: string
}
const TextLayout = (props: Text) => {
    return (
        <div className="Text-box">
            <h1>{props.text}</h1>
            {/* <div className="Text-box-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div> */}
        </div>
    );
};

export default TextLayout;