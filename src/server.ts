import express, {Request, Response} from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port: number = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join('/scripts', '../public/scripts')));

app.get('/', (request: Request, response: Response) => {
    response.send('Hello, Typescript.... demo text!');
});

app.listen(port, () => {
    console.log(`server running on localhost:${port}`);
})