import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = ({ img, setImg, className, erro, msgErro }) => {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        setImg({
            ...img,
            img: file,
            imgUrl: fileUrl,
        });
       
    }, [img,setImg])

    if(erro){
        var border = "border-danger"
    } else {
        border = ''
    }

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});

    return (
        <div className={className}>
            <div className={`form-control ${border}`} {...getRootProps()}>
                <input
                {...getInputProps()}
                accept="image/*" 
                />
                <p>Clique para adicionar uma imagem</p>
            </div>
            {erro && <div className='text-danger'>{msgErro === '' ? msgErro : '* Campo obrigatório'}</div>}
        </div>
    )
}

export default Dropzone;