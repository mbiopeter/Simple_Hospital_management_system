import Express from 'express';
import { addEmployee, addPatient, sheduleAppointment, addTreatment, getAllEmployees, getAllPatients, getAllAppointments, acceptAppointment, rejectedAppointment } from '../controllers/controller.js';

const routes = Express.Router();

routes.post('/addEmployee', addEmployee);
routes.post('/addPatient', addPatient);
routes.post('/sheduleAppointment', sheduleAppointment);
routes.post('/addTreatment', addTreatment);
routes.get('/getAllEmployees', getAllEmployees);
routes.get('/getAllPatients', getAllPatients);
routes.get('/getAllAppointments', getAllAppointments);
routes.post('/acceptAppointment', acceptAppointment);
routes.post('/rejectedAppointment', rejectedAppointment);


export default routes;
