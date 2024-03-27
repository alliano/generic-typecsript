abstract class Employee {
    id: number;
    name: string;
    departement: string;
    selary: number
    constructor(id: number, name: string, departement: string, selary: number){
        this.id = id;
        this.name = name;
        this.departement = departement;
        this.selary = selary;
    }
    abstract sayHello():void;
}
class Engineer extends Employee{
    constructor(id: number, name: string, departement: string, selary: number){
        super(id, name, departement, selary);
    }
    sayHello():void {
        console.log(`Hello my name is ${this.name} and im an Engineer`);
    }
}
class Manageer extends Employee{
    constructor(id: number, name: string, departement: string, selary: number){
        super(id, name, departement, selary);
    }
    sayHello(): void {
        console.log(`Hello my name is ${this.name} and im a Manager`);
        
    }
}
class VicePrecident extends Manageer{
    constructor(id: number, name: string, departement: string, selary: number){
        super(id, name, departement, selary);
    }
    sayHello(): void {
        console.log(`Hello my name is ${this.name} and im a Vice precident`);
    }
}
/**
 * disini kita membatasi bahwa type generic yang diperbolehkan
 * hanyalah turunan dari Employee
 */
class EmployeeMember<T extends Employee> {
    private employee: T;
    constructor(employee: T) {
        this.employee = employee;
    }
}
export { Employee, Manageer, Engineer, VicePrecident, EmployeeMember }