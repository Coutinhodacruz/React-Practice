
const Elite  = require('../class/Elite.js')

describe("Elite", () => {
    let elite;

    beforeEach(() => {
        elite = new Elite();
    });

    it("should have initial values", () => {
        expect(elite.getAcName()).toBe("Coutinho");
        expect(elite.displayTemperature()).toBe("Off");
    });

    it("should increase temperature when it is on", () => {
        elite.powerOn();
        elite.increaseTemperature();
        expect(elite.displayTemperature()).toBe(17);
    });

    it("should not increase temperature when it is off", () => {
        elite.increaseTemperature();
        expect(elite.displayTemperature()).toBe("Off");
    });

    it("should power on and display temperature", () => {
        elite.powerOn();
        expect(elite.displayTemperature()).toBe(16);
    });

    it("should decrease temperature when it is on", () => {
        elite.powerOn();
        elite.decreaseTemperature();
        expect(elite.displayTemperature()).toBe(15);
    });

    // it("should not decrease temperature below 0", () => {
    //     elite.powerOn();
    //     elite.decreaseTemperature();
    //     elite.decreaseTemperature();
    //     expect(elite.displayTemperature()).toBe(0);
    // });

    it("should not decrease temperature when it is off", () => {
        elite.decreaseTemperature();
        expect(elite.displayTemperature()).toBe("Off");
    });

    it("should set and get AC name", () => {
        elite.setAcName("New AC");
        expect(elite.getAcName()).toBe("New AC");
    });
});