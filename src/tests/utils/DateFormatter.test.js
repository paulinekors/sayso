import { getFormattedDate } from "../../utils/DateFormatter";

describe(getFormattedDate, () => {

    // Pass when correct date is passed
    describe("when given the date 2020-04-15T07:53:13.848Z", () => {
        it("returns April 15, 2020", () => {
            expect(getFormattedDate(new Date("2020-04-15T07:53:13.848Z"))).toEqual("April 15, 2020");
        });
    })
    describe("when given the date 2014-02-11", () => {
        it("returns February 11, 2014", () => {
            expect(getFormattedDate(new Date("2014-02-11"))).toEqual("February 11, 2014");
        });
    })
    describe("when given the date Date.UTC(2012, 11, 20, 3, 0, 0)", () => {
        it("returns December 19, 2012", () => {
            expect(getFormattedDate(new Date(Date.UTC(2012, 11, 20, 3, 0, 0)))).toEqual("December 20, 2012");
        });
    })
    // Fail when incorrect date is passed
    describe("when given the date this is not a date", () => {
        it("returns Unknown date", () => {
            expect(getFormattedDate(new Date("this is not a date"))).toEqual("Unknown date");
        });
    })
});



