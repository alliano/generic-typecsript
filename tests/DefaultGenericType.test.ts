import { Customer } from "../src/DefaultGenericType"

describe('Default Generic Type', function(): void {
    test('Should support oprional Generic Type', function(): void {
        const customer: Customer = new Customer("ywe7329", "Alliano", "alliano@gmail.com"); 
        const customer1: Customer<number> = new Customer<number>(1, "Audia", "audia@gmail.com");
        expect(customer.id).toBe("ywe7329");
        expect(customer1.id).toEqual(1);
    })
})