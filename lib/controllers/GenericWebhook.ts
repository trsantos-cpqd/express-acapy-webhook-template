import { Request, Response } from 'express'

/**
 * A ready-to-use handler of the aca-py webhook endpoints. It only receives
 * the request and does nothing else.
 */
export default class GenericWebhook {

    constructor () {
        // nothing to do
    }    
    
    async oob_invitation(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }
    
    async connections(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async ping(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async basicmessages(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async issue_credential(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async issuer_cred_rev(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async issue_credential_v2_0(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async issue_credential_v2_0_indy(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async issue_credential_v2_0_dif(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async present_proof(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async revocation_registry(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

    async problem_report(req: Request, res: Response): Promise<any> {
        console.debug(`[${req.url}] Request received`);
        return res.send();
    }

}