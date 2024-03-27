export class Customer<T = string> {
    id: T;
    name: string;
    email: string;
    constructor(id: T, name: string, email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}