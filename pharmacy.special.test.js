import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy special drug behaviors", () => {
  describe("Herbal Tea", () => {
    it("increases benefit before expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 5, 10)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", 4, 11),
      ]);
    });

    it("increases benefit twice as fast after expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", -1, 10)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", -2, 12),
      ]);
    });

    it("does not increase benefit above 50", () => {
      const pharmacy = new Pharmacy([new Drug("Herbal Tea", 5, 50)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Herbal Tea", 4, 50),
      ]);
    });
  });

  describe("Fervex", () => {
    it("increases benefit by one with more than 10 days remaining", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 11, 10)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", 10, 11),
      ]);
    });

    it("increases benefit by two with 10 days remaining", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 10, 10)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", 9, 12),
      ]);
    });

    it("increases benefit by three with 5 days remaining", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 5, 10)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", 4, 13),
      ]);
    });

    it("drops benefit to zero after expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 0, 10)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", -1, 0),
      ]);
    });

    it("does not increase benefit above 50", () => {
      const pharmacy = new Pharmacy([new Drug("Fervex", 5, 49)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Fervex", 4, 50),
      ]);
    });
  });

  describe("Magic Pill", () => {
    it("does not change benefit or expiration", () => {
      const pharmacy = new Pharmacy([new Drug("Magic Pill", 0, 80)]);

      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Magic Pill", 0, 80),
      ]);
    });
  });
});
