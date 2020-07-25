import React from 'react'

const ResetButton = () => {

    return (
        <div>
            <button
              className="btn reset-btn"
              onClick={(event) => this.onButtonClear(event)}
            >
              Reset
            </button>            
        </div>
    )
}

export default ResetButton
