import express from 'express';
const router = express.Router();

import { saveProject, getMyProject, deleteProject } from '../controllers/projectController.js';

router.post('/save', saveProject);
router.get('/my-project', getMyProject);
router.delete('/delete', deleteProject);

export default router;
