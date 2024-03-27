export class User {
    id: any;
    name: string;
    email: string;
    constructor(name: string, email: string, id: any) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}