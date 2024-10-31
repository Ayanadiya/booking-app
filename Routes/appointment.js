const express= require('express');
const router=express.Router();

const appointmentController=require('../Controllers/appointment');

router.post('/appointments', appointmentController.postAppointments);

router.get('/appointments/user',appointmentController.getAppointments);

//set router for delete functonality.
router.delete('/appointments/delete/:id', appointmentController.deleteAppointments);

module.exports=router;