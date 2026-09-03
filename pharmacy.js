export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      this.updateBenefit(this.drugs[i]);
      this.updateExpiration(this.drugs[i]);
    }

    return this.drugs;
  }

  updateBenefit(drug) {
    switch (drug.name) {
      case "Magic Pill":
        return;
      case "Herbal Tea":
        this.updateHerbalTeaBenefit(drug);
        return;
      case "Fervex":
        this.updateFervexBenefit(drug);
        return;
      default:
        this.updateNormalDrugBenefit(drug);
    }
  }

  updateNormalDrugBenefit(drug) {
    if (drug.benefit > 0) {
      drug.benefit = drug.benefit - 1;
    }
    if (drug.expiresIn <= 0 && drug.benefit > 0) {
      drug.benefit = drug.benefit - 1;
    }
  }

  updateHerbalTeaBenefit(drug) {
    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
    if (drug.expiresIn <= 0 && drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
  }

  updateFervexBenefit(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit = drug.benefit - drug.benefit;
      return;
    }

    if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
    if (drug.expiresIn < 11 && drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
    if (drug.expiresIn < 6 && drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
    }
  }

  updateExpiration(drug) {
    if (drug.name !== "Magic Pill") {
      drug.expiresIn = drug.expiresIn - 1;
    }
  }
}
