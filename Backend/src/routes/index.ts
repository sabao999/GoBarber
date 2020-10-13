// eslint-disable-next-line import/no-unresolved
import { Router } from 'express';

// eslint-disable-next-line import/no-unresolved
import appointmentsRouter from './appointments.routes';
// eslint-disable-next-line import/no-unresolved
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
