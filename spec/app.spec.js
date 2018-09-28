 
describe("pad", () => {
    it("number less than 10 adds a zero to the lef side", () => {
        let check = pad(5);
        console.log(typeof check); 
        expect(check).toEqual('05');
    })
});