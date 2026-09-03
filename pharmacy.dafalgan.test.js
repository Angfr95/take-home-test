import { Drug, Pharmacy } from "./pharmacy";

describe("Dafalgan", () => {
  it("decreases benefit twice as fast as a normal drug before expiration", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 5, 20)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Dafalgan", 4, 18),
    ]);
  });

  it("decreases benefit twice as fast as a normal drug after expiration", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", -1, 20)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Dafalgan", -2, 16),
    ]);
  });

  it("does not decrease benefit below zero", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", -1, 3)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Dafalgan", -2, 0),
    ]);
  });

  it("decreases expiration normally", () => {
    const drug = new Drug("Dafalgan", 5, 20);

    new Pharmacy([drug]).updateBenefitValue();

    expect(drug.expiresIn).toBe(4);
  });

  it("updates Dafalgan alongside the existing drug types", () => {
    const pharmacy = new Pharmacy([
      new Drug("Paracetamol", 5, 10),
      new Drug("Herbal Tea", 5, 10),
      new Drug("Fervex", 5, 10),
      new Drug("Magic Pill", 0, 80),
      new Drug("Dafalgan", 5, 20),
    ]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Paracetamol", 4, 9),
      new Drug("Herbal Tea", 4, 11),
      new Drug("Fervex", 4, 13),
      new Drug("Magic Pill", 0, 80),
      new Drug("Dafalgan", 4, 18),
    ]);
  });
});
