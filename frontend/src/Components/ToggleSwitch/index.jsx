import React from 'react'

import './styles.css'

const ToggleSwitch = ({ values, setValues }) => {
    return (
        <label className="switch ml-3 d-flex align-items-end" id="switch">
            <input 
                type="checkbox" 
                id="doacao" 
                name="doacao"
                value={values.toggle}
                onClick={() => setValues({...values,toggle: !values.toggle})}
                checked={values.toggle}
                readOnly 
            />
            <span className="slider round" />
        </label>
    )    
}

export default ToggleSwitch
