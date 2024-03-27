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