import { Router } from 'express';


// API version
import version from '../helpers/version';

// user controller
import Message from './../controllers/messages';

// check authethication
import authethicate from './../middleware/authethicate';

const messageRouter = Router();

messageRouter.post(`${version}messages`, authethicate, Message.compose);

export default messageRouter;