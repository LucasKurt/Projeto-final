import React from 'react'

const Input = ({className,label,span,name,type,value,onChange,placeholder,erro,msgErro}) => {
    if(erro){
       var border = "border border-danger"
    } else {
        border = ''
    }

    return (
        <div className={className}>
            <label htmlFor={name}>{label}<span className="text-muted">{span}</span></label>
            <input 
                className={`form-control ${border}`} 
                type={type} 
                id={name}
                name={name}                        
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
            />
            {erro && <div className='text-danger'>{msgErro === '* Campo obrigatório' ? msgErro : 'campo já cadastrado'}</div>}
        </div>
    )
}

export default Input
