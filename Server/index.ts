import express from "express";
import { mockData , Collection, mockData2} from "./MockData";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors({
    origin: '*'
}));
app.use(express.json());


app.get( "/data", ( req: any, res: { send: (arg0: Collection) => void; } ) => {
    res.send(mockData);
});
app.get( "/sample-address", ( req: any, res: { send: (arg0: string) => void; } ) => {
    res.send(mockData2);
});


app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );