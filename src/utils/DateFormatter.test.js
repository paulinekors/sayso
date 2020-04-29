import {getFormattedDate} from "./DateFormatter";

describe(getFormattedDate, () => {

    describe("when given the date 2020-04-15T07:53:13.848Z", () => {
        it("returns April 15, 2020", () => {
            expect(getFormattedDate("2020-04-15T07:53:13.848Z")).toEqual("April 15, 2020");
        });
    })
});



