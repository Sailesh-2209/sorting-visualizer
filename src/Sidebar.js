import React from 'react';

function Sidebar() {
    return(
        <div className="sidebar">
            <form className="form">
                <label className='form-label' htmlFor="algorithm">
                    Choose an Algorithm
                </label>
                <br/>
                <select className='form-select' name="algortithm" id="algorithm">
                    <option className='form-option' value="bubble">Bubble Sort</option>
                    <option className='form-option' value="selection">Selection Sort</option>
                    <option className='form-option' value="insertion">Insertion Sort</option>
                    <option className='form-option' value="quick">Quick Sort</option>
                    <option className='form-option' value="merge">Merge Sort</option>
                </select>

                <div className="slider-container">
                    <label className='slider-label' htmlFor="range">
                        Set Number of Values
                    </label>
                    <br/>
                    <input 
                        type="range" 
                        min='50' 
                        max='1000' 
                        defaultValue='500'
                        className='range-slider' 
                        id='range' 
                        name='range' 
                    />
                </div>

                <button className='submit-btn' type='submit'>Sort</button>
            </form>
        </div>
    );
}

export default Sidebar;