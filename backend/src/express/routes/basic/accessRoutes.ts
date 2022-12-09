import { Request, Response } from 'express';
import NodeCache from 'node-cache';
import sugarcube from 'sugarcube';
import users from '../../../graphql/Users.js';
import path from 'path';

enum File {
    'resume' = 'resume.pdf',
}
type FileType = keyof typeof File;

const tokenCache = new NodeCache( { stdTTL: 30, checkperiod: 60 } );

class AccessRoutes {
    newlink(req: Request, res: Response) {
        // if (req.body!.file == null && req.body!.username == null && req.body!.password == null) { res.status(400).send("Bad Request"); return;}
        if (File[req.body!.file as FileType] === undefined) { res.status(400).send("Bad Request"); return; }
        const user = users.find(u => u.username === req.body!.username && u.password === req.body!.password)
            if (user) {
                let accessToken = sugarcube.randomNumber(16);
                tokenCache.set( accessToken, File[req.body!.file as FileType] as string );
                res.status(200).send(`${accessToken}`);
                return;
            } else {
                res.status(401).send("Unauthorized");
                return;
            }
    }
    access(req: Request, res: Response) {
        if (typeof req.query.t === 'string') {
            const file = tokenCache.get(req.query.t);
            if (file) {
                res.status(200).sendFile(path.resolve('./static', file as string));
            } else {
                res.status(401).send("Unauthorized")
            }
        } else {
            res.status(400).send("Bad Request")
        }
    }
}

export default AccessRoutes;