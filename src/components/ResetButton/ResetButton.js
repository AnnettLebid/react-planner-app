import React from 'react'

const ResetButton = (props) => {

    return (
        <div>
            <button
              className="btn reset-btn"
              onClick={(event) => props.onButtonClear(event)}
            >
              Reset
            </button>            
        </div>
    )
}

export default ResetButton
