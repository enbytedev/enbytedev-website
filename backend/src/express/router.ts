import { Express, Router } from "express";
import { logger } from "../setup/mainLogger.js";
import { browserRateLimit } from "../express/middleware.js";
import RoutesAggregate from "./routes/routesAggregate.js";
import { graphqlHTTP } from "express-graphql";
import schema from "../graphql/Schema.js";
import root from "../graphql/Resolver.js";
import cors from 'cors';
import bodyParser from 'body-parser';

const Routes = new RoutesAggregate();
const router = Router();

export const setRoutes = (app: Express) => {
    logger.debug(`Configuring Express routing...`, "ExpressJS Setup")

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    router.use("/api", graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: false,
    }))
    router.get("/", browserRateLimit, Routes.basic.home);
    // router.get("*", browserRateLimit, Routes.basic.notFound);

    app.post('/access', cors(), browserRateLimit, Routes.access.newlink);
    app.get('/access', browserRateLimit, Routes.access.access);

    app.use(cors());
    app.use(router);
}

export default setRoutes;