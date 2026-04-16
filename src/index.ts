import express, { Request, Response } from 'express';
import cors from 'cors'


const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    return res.status(200).json({
        message: "API is running"
    });
});

app.get("/health", (_req: Request, res: Response) => {
    return res.status(200).json({
        message: "Healthy"
    });
});

app.get("/me", (_req: Request, res: Response) => {
    return res.status(200).json({
        "name": "Wilfrid Okorie",
        "email": "wilfridokorie@gmail.com",
        "github": "https://github.com/OWK50GA"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})