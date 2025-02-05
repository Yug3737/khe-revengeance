import { Email } from "./email-address.ts";
import { SupportTicket, Message } from "./support-ticket.ts";

/**
 * This class declares functions that can be called in remult BackendMethods to
 * do stuff on the server. they are actually defined in server/api.ts, which is
 * only imported on the backend.
 */
export class RemoteProcedures {
  static sendSupportAlert: (
    ticket: SupportTicket,
    message: Message
  ) => Promise<void>;
  static sendSupportReply: (
    ticket: SupportTicket,
    message: Message
  ) => Promise<void>;
  static sendWelcome: (email: Email) => Promise<void>;
}
