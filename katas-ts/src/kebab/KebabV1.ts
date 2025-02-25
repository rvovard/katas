export interface Kebab {
  isVegetarien(): boolean;
  isPescetarian(): boolean;
  doubleCheese(): Kebab;
  removeOnion(): Kebab;
  listIngredients(): string;
}

export class Pain implements Kebab {
  isVegetarien(): boolean {
    return true;
  }
  isPescetarian(): boolean {
    return true;
  }
  doubleCheese(): Kebab {
    return new Pain();
  }
  removeOnion(): Kebab {
    return new Pain();
  }
  listIngredients(): string {
    return Pain.name;
  }
}

export class Salade implements Kebab {
  child: Kebab;
  constructor(child: Kebab) {
    this.child = child;
  }
  isVegetarien(): boolean {
    return this.child.isVegetarien();
  }
  isPescetarian(): boolean {
    return this.child.isPescetarian();
  }
  doubleCheese(): Kebab {
    return new Salade(this.child.doubleCheese());
  }
  removeOnion(): Kebab {
    return new Salade(this.child.removeOnion());
  }
  listIngredients(): string {
    return Salade.name + ' ' + this.child.listIngredients();
  }
}

export class Tomate implements Kebab {
  child: Kebab;
  constructor(child: Kebab) {
    this.child = child;
  }
  isVegetarien(): boolean {
    return this.child.isVegetarien();
  }
  isPescetarian(): boolean {
    return this.child.isPescetarian();
  }
  doubleCheese(): Kebab {
    return new Tomate(this.child.doubleCheese());
  }
  removeOnion(): Kebab {
    return new Tomate(this.child.removeOnion());
  }
  listIngredients(): string {
    return Tomate.name + ' ' + this.child.listIngredients();
  }
}

export class Agneau implements Kebab {
  child: Kebab;
  constructor(child: Kebab) {
    this.child = child;
  }
  isVegetarien(): boolean {
    return false;
  }
  isPescetarian(): boolean {
    return false;
  }
  doubleCheese(): Kebab {
    return new Agneau(this.child.doubleCheese());
  }
  removeOnion(): Kebab {
    return new Agneau(this.child.removeOnion());
  }
  listIngredients(): string {
    return Agneau.name + ' ' + this.child.listIngredients();
  }
}

export class Oignon implements Kebab {
  child: Kebab;
  constructor(child: Kebab) {
    this.child = child;
  }
  isVegetarien(): boolean {
    return this.child.isVegetarien();
  }
  isPescetarian(): boolean {
    return this.child.isPescetarian();
  }
  doubleCheese(): Kebab {
    return new Oignon(this.child.doubleCheese());
  }
  removeOnion(): Kebab {
    return this.child.removeOnion();
  }
  listIngredients(): string {
    return Oignon.name + ' ' + this.child.listIngredients();
  }
}

export class Fromage implements Kebab {
  child: Kebab;
  constructor(child: Kebab) {
    this.child = child;
  }
  isVegetarien(): boolean {
    return this.child.isVegetarien();
  }
  isPescetarian(): boolean {
    return this.child.isPescetarian();
  }
  doubleCheese(): Kebab {
    return new Fromage(new Fromage(this.child.doubleCheese()));
  }
  removeOnion(): Kebab {
    return new Fromage(this.child.removeOnion());
  }
  listIngredients(): string {
    return Fromage.name + ' ' + this.child.listIngredients();
  }
}
