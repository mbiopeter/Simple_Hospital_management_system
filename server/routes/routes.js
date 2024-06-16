import Express from 'express';
import { addEmployee, addPatient, sheduleAppointment, addTreatment, getAllEmployees, getAllPatients, getAllAppointments, acceptAppointment, rejectedAppointment, AllEmployees, getAllTreatments, maxRegNo } from '../controllers/controller.js';

const routes = Express.Router();

routes.post('/addEmployee', addEmployee);
routes.post('/addPatient', addPatient);
routes.post('/sheduleAppointment', sheduleAppointment);
routes.post('/addTreatment', addTreatment);
routes.get('/getAllEmployees', getAllEmployees);
routes.get('/getAllPatients', getAllPatients);
routes.get('/getAllAppointments', getAllAppointments);
routes.get('/getAllTreatments', getAllTreatments);
routes.post('/acceptAppointment', acceptAppointment);
routes.post('/rejectedAppointment', rejectedAppointment);
routes.get('/AllEmployees', AllEmployees);
routes.get('/maxRegNo', maxRegNo);


export default routes;
