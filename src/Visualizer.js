import React from 'react';

function Visualizer({ array }) {
    return(
        <div className="visualizer">
            <div className="bar-container">
                {
                    array.map((item, index) => {
                        return(
                            <div className="bar" key={index} style={{height: item/2 + 'px'}}></div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Visualizer;