import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = ({setSelectedFile, selectedFileUrl, setSelectedFileUrl}) => {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        setSelectedFileUrl(fileUrl);
        setSelectedFile(file);
       /*eslint-disable-next-line react-hooks/exhaustive-deps*/
    }, [setSelectedFile])
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});

    return (
        <div className="form-control" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            <p>Coloque a imagem do anúncio</p>
        </div>
    )
}

export default Dropzone;