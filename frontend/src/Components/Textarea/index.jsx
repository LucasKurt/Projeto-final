import React from 'react'

const Textarea = ({ className, label, span, name, value, onChange, placeholder, cols, rows, erro, msgErro }) => {
    if(erro){
       var border = "border border-danger"
    } else {
        border = ''
    }

    return (
        <div className={className}>
            <label htmlFor={name}>{label}<span className="text-muted">{span}</span></label>
            <textarea 
                className={`form-control ${border}`} 
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                cols={cols}
                rows={rows} 
            />
            {erro && <div className='text-danger'>{msgErro === '' ? msgErro : '* Campo obrigatório'}</div>}
        </div>
    )
}

export default Textarea
