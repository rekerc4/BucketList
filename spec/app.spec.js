 
describe("pad", () => {
    it("number less than 10 adds a zero to the lef side", () => {
        let check = pad(5);
        expect(check).toEqual('05');
    })
});

describe("Date.prototype.toISOShortString", () => {
    it("  message ", () => {
        let ndate = new Date(2018, 8, 7);
        let check = ndate.toISOShortString();
        expect(check).toBe('2018-09-07T04:00:00Z');
    })
})