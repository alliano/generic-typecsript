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