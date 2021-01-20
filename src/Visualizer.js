import React from 'react';

function Visualizer({ array, element }) {
    return(
        <div className="visualizer">
            <div ref={element} className="bar-container">
                {
                    array.map((item, index) => {
                        return(
                            <div id={`bar-${index}`} className="bar" key={index} style={{height: item/2 + 'px'}}></div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Visualizer;