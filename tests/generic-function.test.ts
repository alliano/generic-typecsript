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