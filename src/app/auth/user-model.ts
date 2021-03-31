export class User {

    id: number;
    pk: number;
    url: string;
    username: string;
    first_name: string;
    last_name: string;
    is_superuser: boolean;
    email: string;
    groups: number[] = [];

    constructor (obj: Object) {
        for (let field in obj) {
            if (obj.hasOwnProperty(field)) {
                    this.field = obj[field];
                }
            }
    }
    

}
