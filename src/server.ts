import App from "@/app";
import BedRoute from "@routes/bed.route";
import validateEnv from "@utils/validateEnv";

validateEnv();

const app = new App([new BedRoute()]);

app.listen();
