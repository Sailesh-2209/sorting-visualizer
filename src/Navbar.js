import React from 'react';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Navbar() {
    return (
        <div className="nav-div">
            <div className="title">
                <IconContext.Provider value={{ className: 'fa-icon' }}>
                    <FaSortAmountUpAlt />
                </IconContext.Provider>
                <span className='title-text'>Sorting Visualizer</span>
            </div>
        </div>
    );
}

export default Navbar;