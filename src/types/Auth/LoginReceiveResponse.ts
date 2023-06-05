import { User } from "../User";
import { AuthResponseShape } from "../common";

export interface LogInReceiveResponse extends AuthResponseShape {
    data: {
        user: User;
        token: string;
    };
}
