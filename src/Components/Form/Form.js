import React from 'react';
import "../Form/Form.css"

function Form({ inputTextValue, setInputTextValue, inputPositionValue, setInputPositionValue }) {
  
    return (
        <div >
            <form >
               <div className='Form-container'>
               <label>Enter text:</label>&nbsp
                <input name='text' id="text" placeholder='Enter text'
                value={inputTextValue} onChange={(e) => setInputTextValue(e.target.value)} />
                <br />
                <label>Select an option:</label>&nbsp
                <select name="options"
                value={inputPositionValue} onChange={(e) => setInputPositionValue(e.target.value)}>
                    <option value="">Select an position</option>
                    <option value="top">Top</option>
                    <option value="left">Left</option>
                    <option value="bottom">Bottom</option>
                    <option value="right">Right</option>
                </select>
               </div>
            </form>
        </div>

    )
}

export default Form