import GenericWebhook from "./controllers/GenericWebhook";
import { Router } from "express";

/**
 * Generate a express Router with aca-py webhook routes registered. Those routes are 
 * handled by the methods implemented by webhookController parameter, which must be an 
 * instance of GenericWebhoook.
 * 
 * @param webhookController A instance of GenericWebhook
 * @returns The express Router, with the aca-py webhook routes registered
 */
export function generateRouter(webhookController: GenericWebhook): Router {
    const router = Router();
    
    router.post('/topic/oob_invitation', webhookController.oob_invitation);
    router.post('/topic/connections', webhookController.connections);
    router.post('/topic/ping', webhookController.ping);
    router.post('/topic/basicmessages', webhookController.basicmessages);
    router.post('/topic/issue_credential', webhookController.issue_credential);
    router.post('/topic/issuer_cred_rev', webhookController.issuer_cred_rev);
    router.post('/topic/issue_credential_v2_0', webhookController.issue_credential_v2_0);
    router.post('/topic/issue_credential_v2_0_indy', webhookController.issue_credential_v2_0_indy);
    router.post('/topic/issue_credential_v2_0_dif', webhookController.issue_credential_v2_0_dif);
    router.post('/topic/present_proof', webhookController.present_proof);
    router.post('/topic/revocation_registry', webhookController.revocation_registry);
    router.post('/topic/problem_report', webhookController.problem_report);    

    return router;
}


export default GenericWebhook;