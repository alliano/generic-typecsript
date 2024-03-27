import { EmployeeMember, Engineer, Manageer, VicePrecident } from "../src/GenericConstraint"

describe('Genric Constraint', function(): void {
    test('Should support Generic Constrinat', function(): void {
        const manager: Manageer = new Manageer(1, "Alli", "IT", 50.000000);
        manager.sayHello();
        const employeeMember: EmployeeMember<Manageer> = new EmployeeMember<Manageer>(manager);
        console.log(employeeMember);
        
        
        const engineer: Engineer = new Engineer(2, "Audia", "IT", 90.000000);
        engineer.sayHello();
        const employeeMember2: EmployeeMember<Engineer> = new EmployeeMember<Engineer>(engineer);
        console.log(employeeMember2);
        
        const vicePrecident: VicePrecident = new VicePrecident(3, "Abdillah", "IT", 100.000000);
        vicePrecident.sayHello();
        const employeeMember3: EmployeeMember<VicePrecident> = new EmployeeMember<VicePrecident>(vicePrecident);
        console.log(employeeMember3);

        // let employeeMember4: EmployeeMember<string>; => ini error karena string bukan turunan Employee
    })
})