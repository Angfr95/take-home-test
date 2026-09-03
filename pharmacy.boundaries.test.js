import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy expiration and benefit boundaries", () => {
  it("decreases a normal drug before expiration", () => {
    const pharmacy = new Pharmacy([new Drug("Paracetamol", 5, 20)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Paracetamol", 4, 19),
    ]);
  });

  it("decreases a normal drug twice as fast after expiration", () => {
    const pharmacy = new Pharmacy([new Drug("Paracetamol", -1, 20)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Paracetamol", -2, 18),
    ]);
  });

  it("does not decrease benefit below zero", () => {
    const pharmacy = new Pharmacy([new Drug("Paracetamol", -1, 1)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Paracetamol", -2, 0),
    ]);
  });

  it("moves a drug from its expiration day to expired", () => {
    const pharmacy = new Pharmacy([new Drug("Paracetamol", 0, 20)]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Paracetamol", -1, 18),
    ]);
  });
});
