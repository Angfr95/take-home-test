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
    if (drug.name != "Herbal Tea" && drug.name != "Fervex") {
      if (drug.benefit > 0 && drug.name != "Magic Pill") {
        drug.benefit = drug.benefit - 1;
      }
    } else if (drug.benefit < 50) {
      drug.benefit = drug.benefit + 1;
      if (drug.name == "Fervex") {
        if (drug.expiresIn < 11 && drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
        }
        if (drug.expiresIn < 6 && drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
        }
      }
    }

    if (drug.expiresIn <= 0) {
      if (drug.name == "Herbal Tea") {
        if (drug.benefit < 50) {
          drug.benefit = drug.benefit + 1;
        }
      } else if (drug.name == "Fervex") {
        drug.benefit = drug.benefit - drug.benefit;
      } else if (drug.benefit > 0 && drug.name != "Magic Pill") {
        drug.benefit = drug.benefit - 1;
      }
    }
  }

  updateExpiration(drug) {
    if (drug.name != "Magic Pill") {
      drug.expiresIn = drug.expiresIn - 1;
    }
  }
}
