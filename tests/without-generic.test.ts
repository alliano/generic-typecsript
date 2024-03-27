import { User } from "../src/User"

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