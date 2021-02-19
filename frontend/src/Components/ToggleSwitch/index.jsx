import React from 'react'

import './styles.css'

const ToggleSwitch = ({ toggle, setToggle }) => {
    return (
        <label className="switch ml-3 d-flex align-items-end" id="switch">
            <input 
                type="checkbox" 
                id="doacao" 
                name="doacao"
                value={toggle}
                onClick={() => setToggle(!toggle)} 
            />
            <span className="slider round" />
        </label>
    )
}

export default ToggleSwitch
