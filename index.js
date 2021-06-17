import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
	"mongodb+srv://jaredbrown:memories1@cluster0.9imio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch(() => console.log(error.message));

mongoose.set("useFindAndModify", false);
