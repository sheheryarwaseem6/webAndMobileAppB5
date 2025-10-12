import multer from 'multer';
import path from 'path'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      
      const uniqueSuffix = Date.now() +"-"+Math.floor(Math.random() * 9000) + 1000;
      cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
  })
  
  export const upload = multer({ storage: storage })