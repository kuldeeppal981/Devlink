import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import groupRoutes from './routes/groupRoutes';
import {connectDB} from './config/db'
import friendRoutes from './routes/friendRoutes';


const app = express();
app.use(bodyParser.json());

connectDB()

app.use('/api/friends', friendRoutes);
app.use('/api/groups', groupRoutes);


const PORT = process.env.PORT || 6000;

app.get('/', (req: Request, res: Response) => {
    res.send('Group Management API');
});

app.listen(PORT, () => {
     
    console.log(`Server running on port ${PORT}`);
});
