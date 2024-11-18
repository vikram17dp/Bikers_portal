import express from 'express'

import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js';
import {addBike} from '../controllers/admin.controller.js';

const adminRouter = express.Router();

adminRouter.post('/login',loginAdmin);
adminRouter.post('/add-items',authAdmin,upload.single('image'),addBike)

export default adminRouter
