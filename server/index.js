import express from "express";
import cors from "cors";

const app = express();

import routes from "./routes/routes.js";

//MIDDLEWARES
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
})
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",

}));


app.use("/api/", routes);

app.listen(8800, () => {
    console.log("Server running on port 8800");
});