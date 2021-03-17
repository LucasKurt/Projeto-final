const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const crypto = require('crypto');

const storageTypes = {
    local: multer.diskStorage({
        destination: (req,file,cb) => {

            cb(null,'uploads/');

        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                file.key =`${hash.toString('hex') + file.mimetype.replace('image/','.')}`

                cb(null,file.key)
            })
        },
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'comercioamigavel',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                const fileName =`${hash.toString('hex') + file.mimetype.replace('image/','.')}`

                cb(null,fileName)
            })
        },
    }),
}

const multerAnunciosConfig =  {
    dest: 'uploads/',
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const alowedMimes = [
            'image/gif',
            'image/ico',
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/svg',
            'image/webp',
        ];
        if(alowedMimes.includes(file.mimetype)){
            cb(null,true);
        } else {
            cb(new Error('Formato não suportado'));
        }
    },
}

module.exports = multerAnunciosConfig