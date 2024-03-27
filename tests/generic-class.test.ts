import { User } from "../src/GenericUser"

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