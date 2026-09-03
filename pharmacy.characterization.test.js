import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy existing behavior", () => {
  it("exposes the drug properties through the public API", () => {
    const drug = new Drug("Paracetamol", 5, 10);

    expect(drug).toEqual({
      name: "Paracetamol",
      expiresIn: 5,
      benefit: 10,
    });
  });

  it("mutates the drugs held by the pharmacy", () => {
    const drug = new Drug("Paracetamol", 5, 10);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();

    expect(drug).toEqual(new Drug("Paracetamol", 4, 9));
    expect(pharmacy.drugs[0]).toBe(drug);
  });

  it("returns the pharmacy drugs", () => {
    const drugs = [new Drug("Paracetamol", 5, 10)];
    const pharmacy = new Pharmacy(drugs);

    const updatedDrugs = pharmacy.updateBenefitValue();

    expect(updatedDrugs).toBe(drugs);
  });

  it("updates a pharmacy containing the existing drug types", () => {
    const pharmacy = new Pharmacy([
      new Drug("Paracetamol", 5, 10),
      new Drug("Herbal Tea", 5, 10),
      new Drug("Fervex", 11, 10),
      new Drug("Magic Pill", 0, 80),
    ]);

    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Paracetamol", 4, 9),
      new Drug("Herbal Tea", 4, 11),
      new Drug("Fervex", 10, 11),
      new Drug("Magic Pill", 0, 80),
    ]);
  });
});
