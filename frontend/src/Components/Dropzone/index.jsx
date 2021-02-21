import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = ({ values, setValues }) => {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);        
        setValues({
            ...values,
            linkArquivo: fileUrl,
            arquivo: file,
        });
       /*eslint-disable-next-line react-hooks/exhaustive-deps*/
    }, [values.arquivo])
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});

    return (
        <div className="form-control" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            <p>CLique para adicionar uma imagem</p>
        </div>
    )
}

export default Dropzone;