# Setup
``` sh
yarn init
```

``` sh
yarn add @types/jest -D
```

``` sh
yarn add babel-jest @babel/preset-env -D      
```

``` sh
yarn add typescript -D
```

``` sh
tsc --init
```

set up `babel.config.json`
``` json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript"
    ]
}
```

set up `package.json`
``` json
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
  "type": "module"
```

set up `tsconfig.json`
``` json
"include": ["./src/**/*", "./tests/**/*.test.ts"]
"module": "ES6"
```

# Without Generic class
``` ts
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
```
``` ts
describe('First', function(): void {
    test('shuuld support class withod generic', function(): void {
        // ini sangat berbahaya karena tipe id dalam 1 class bisa 
        // berubah(tidak konsisten)
        const user1: User = new User("alliano", "alliano@gmail.com", 1);
        console.log(user1);
        user1.id = "e39ey7723d";
        console.log(user1);
        user1.id = false;
        console.log(user1);
        user1.id = new Object();
        console.log(user1);
    })
})
```
# With generic class
``` ts
export class User<T> {
    id: T;
    name: string;
    email: string;
    constructor(id: T, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
```
``` ts
describe('Generic', function(): void {
    it('Should support with generic class', function(): void {
        const user: User<number> = new User<number>(1, "Naila", "naila@gmail.com");
        expect(user.id).toEqual(1);
        // user.id = "jd03ewqu8" => ini error
        // user.id = false; => ini error
        // user.id = new Object(); => ini error
        user.id = 10;
        expect(user.id).toEqual(10);

        const user1: User<string> = new User<string>("d34792", "Alliano", "alliano@gmail.com");
        expect(user1.id).toBe("d34792");
        
    })
})
```

# Generic function
``` ts
describe('Generic function', function(): void {
    it('Sould support method generic', function(): void {
        // generic arrow function
        const create1 = <T> (arg: T): T => arg;
        // generic function
        function create2<T>(arg: T): T {
            return arg;
        }
        const result1: number = create1<number>(100);
        const result2: string = create2<string>("Audia");
        expect(result1).toEqual(100);
        expect(result2).toBe("Audia")
    })
})
```

# Multiple generic
``` ts
class DataEntry<K, V> {
    private key: K;
    private value: V;
    constructor(key: K, value: V){
        this.key = key;
        this.value = value;
    }
}

class TriperlEntry<K, V, T> {
    private key: K;
    private value: V;
    private t: T;
    constructor(key: K, value: V, t: T) {
        this.key = key;
        this.value = value;
        this.t = t;
    }
}

export { DataEntry, TriperlEntry }
```

``` ts
describe('Multiple Generic', function(): void {
    test('Should support multiple generic', (): void => {
        const dataEntry: DataEntry<number, string> = new DataEntry<number, string>(1, "Alliano");
        const tripleDataEntiry: TriperlEntry<number, string, boolean> = new TriperlEntry<number, string, boolean>(2, "Audia", true);
        console.log(dataEntry);
        console.log(tripleDataEntiry);
    });
})
```

# Optional generic
``` ts
describe('Optional generic', function(): void {
    class OptionalGeneric<T> {
        private value?: T
        setValue(value: T): void {
            this.value = value;
        }
        getValue(): T | undefined {
            return this.value;
        }
    }
    it('should support oprional generic', function(): void {
        const optionalGeneric: OptionalGeneric<string> = new OptionalGeneric<string>();
        optionalGeneric.setValue("Alliano");
        expect(optionalGeneric.getValue()).toBe("Alliano");
    })
})
```

# Generic Type Default
``` ts
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
```
``` ts
describe('Default Generic Type', function(): void {
    test('Should support oprional Generic Type', function(): void {
        const customer: Customer = new Customer("ywe7329", "Alliano", "alliano@gmail.com"); 
        const customer1: Customer<number> = new Customer<number>(1, "Audia", "audia@gmail.com");
        expect(customer.id).toBe("ywe7329");
        expect(customer1.id).toEqual(1);
    })
})
```

# Genric Constraint
``` ts
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
```

``` ts
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
```

# Genric Collection
``` ts
describe('Generic Collection', function(): void {
    test('Should support Array Genric', function(): void {
        const dataArr: Array<string> = new Array<string>();
        dataArr.push("Abdillah", "Alli", "Audia", "Naila", "Safa");
        dataArr.forEach(e => console.log(e));
    })

    test('Should support generic Set', function(): void {
        const dataSet: Set<number> = new Set<number>();
        dataSet.add(1);
        dataSet.add(2);
        dataSet.add(3);
        dataSet.add(4);
        dataSet.forEach(e => console.log(e));
    })
    test('Should support generic Map', function(): void {
        const dataMap: Map<number, string> = new Map<number, string>();
        dataMap.set(1, "Alliano");
        dataMap.set(2, "Naila");
    })
})
```

# Generic Promise
``` ts
describe('Genric Promise', function(): void {
    type User = {
        id: string;
        name: string;
        email: string;
    }
    const getUser = async (id: number): Promise<User> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(id == 1) resolve({
                    id: "d3u827e823",
                    name: "alliano",
                    email: "alliano@gmail.com",
                });
                    else 
                reject("Invalid Id");
            }, 2000);
        })
    }
    test('Should support Genric Promise',async () => {
        const dataUser: User = await getUser(1);
        expect(dataUser.name).toBe("alliano");
        try {
            await getUser(2);
        }
        catch(e){
            expect(e).toBe("Invalid Id");
        }
    })
})
```