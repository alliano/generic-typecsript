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