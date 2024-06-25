import React from 'react';
import { useState } from 'react';
import "../Tooltip/Tooltip.css"

function Tooltip({position,text}) {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(true);
  return (
    <div className='Container'>
     <div className='tooltip'
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}>
        Hover Over Me!
     </div>
     {text!== ""&& position!==""&& visible? <div className={`tooltip-box ${position}`}>{text}</div>: null}
     {/* {visible && <div className={`tooltip-box ${position}`}>{text}</div>} */}
    </div>
  )
}

export default Tooltip;