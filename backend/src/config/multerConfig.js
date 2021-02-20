const multer = require('multer');
const crypto = require('crypto');

const multerConfig =  {
    dest: 'uploads/anuncio/',
    storage: multer.diskStorage({
        destination: (req,file,cb) => {
            cb(null,'uploads/anuncio/');
        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                const fileName =`${hash.toString('hex') + file.mimetype.replace('image/','.')}`

                cb(null,fileName)
            })
        },
    }),
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

module.exports = multerConfig