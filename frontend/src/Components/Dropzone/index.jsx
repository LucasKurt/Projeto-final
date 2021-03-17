import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = ({ img, setImg }) => {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        setImg({
            ...img,
            img: file,
            imgUrl: fileUrl,
        });
       
    }, [img,setImg])
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});

    return (
        <div className="form-control" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            <p>Clique para adicionar uma imagem</p>
        </div>
    )
}

export default Dropzone;