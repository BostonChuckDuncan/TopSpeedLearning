import { User } from '../_models/User';

export class UserAuthenticatedDto {
    public username?: string;
    public token?: string;
    // public roleslist?: string;
    // public knownAs?: string;

    public UserAuthenticatedDto() {
        this.username = '';
        this.token = '';
        // this.roleslist = '';
        // this.knownAs = '';
    }
}
