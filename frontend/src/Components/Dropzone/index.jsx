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
       /*eslint-disable-next-line react-hooks/exhaustive-deps*/
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});

    return (
        <div className="form-control" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            <p>CLique para adicionar uma imagem</p>
        </div>
    )
}

export default Dropzone;