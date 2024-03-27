import { DataEntry, TriperlEntry } from "../src/MultipleGeneric";

describe('Multiple Generic', function(): void {
    test('Should support multiple generic', (): void => {
        const dataEntry: DataEntry<number, string> = new DataEntry<number, string>(1, "Alliano");
        const tripleDataEntiry: TriperlEntry<number, string, boolean> = new TriperlEntry<number, string, boolean>(2, "Audia", true);
        console.log(dataEntry);
        console.log(tripleDataEntiry);
    });
})