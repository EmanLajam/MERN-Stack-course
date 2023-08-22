import  express  from "express";
 const router = express.Router()

import { getAllJobs,
    createJob,
    deleteJob, 
    updateJob, 
    showStat } 
    from '../controllers/jobsController.js'

    router.route('/').post(createJob).get(getAllJobs)
    router.route('/:id').delete(deleteJob).patch(updateJob)
    router.route('/stats').get(showStat)

    export default router