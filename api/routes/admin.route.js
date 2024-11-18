import express from 'express';

import multer from 'multer';
import { addBike, deleteBike, getAllBikes, loginAdmin } from '../controllers/admin.controller.js';

const adminRouter = express.Router();

const upload = multer({ dest: 'uploads/' });
adminRouter.post('/login',loginAdmin)

adminRouter.get('/api/admin/all-bikes', getAllBikes);

adminRouter.post('/api/admin/add-bike', upload.single('bike_image'), addBike);

adminRouter.delete('/api/admin/delete-bike/:bikeId', deleteBike);

export default adminRouter;
