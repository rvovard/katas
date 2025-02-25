import { Agneau, Fromage, Oignon, Pain, Salade, Tomate } from "./KebabV1";

describe('test Kebab', () => {
  const saladeTomate = new Salade(new Tomate(new Pain));
  const saladeTomateOignons = new Salade(new Tomate(new Oignon(new Pain)));
  const agneauTomateOignons = new Agneau(new Tomate(new Oignon(new Pain)));
  const agneauFromageTomateFromage = new Agneau(new Fromage(new Tomate(new Fromage(new Pain))));

  test('ingrédients', () => {
      expect(saladeTomate.listIngredients()).toBe('Salade Tomate Pain');
      expect(saladeTomateOignons.listIngredients()).toBe('Salade Tomate Oignon Pain');
      expect(agneauTomateOignons.listIngredients()).toBe('Agneau Tomate Oignon Pain');
      expect(agneauFromageTomateFromage.listIngredients()).toBe('Agneau Fromage Tomate Fromage Pain');
  });

  test('isVegetarian', () => {
      expect(saladeTomate.isVegetarien()).toBe(true);
      expect(saladeTomateOignons.isVegetarien()).toBe(true);
      expect(agneauTomateOignons.isVegetarien()).toBe(false);
      expect(agneauFromageTomateFromage.isVegetarien()).toBe(false);
  });

  test('doubleCheese', () => {
      const saladeTomateDC = saladeTomate.doubleCheese();
      const salaadeTomateOignonsDC = saladeTomateOignons.doubleCheese();
      const agneauTomateOignonsDC = agneauTomateOignons.doubleCheese();
      const agneauFromageTomateFromageDC = agneauFromageTomateFromage.doubleCheese();
      expect(saladeTomateDC.listIngredients()).toBe('Salade Tomate Pain');
      expect(salaadeTomateOignonsDC.listIngredients()).toBe('Salade Tomate Oignon Pain');
      expect(agneauTomateOignonsDC.listIngredients()).toBe('Agneau Tomate Oignon Pain');
      expect(agneauFromageTomateFromageDC.listIngredients()).toBe('Agneau Fromage Fromage Tomate Fromage Fromage Pain');
  });

  test('removeOnion', () => {
      const saladeTomateRO = saladeTomate.removeOnion();
      const salaadeTomateOignonsRO = saladeTomateOignons.removeOnion();
      const agneauTomateOignonsRO = agneauTomateOignons.removeOnion();
      const agneauFromageTomateFromageRO = agneauFromageTomateFromage.removeOnion();
      expect(saladeTomateRO.listIngredients()).toBe('Salade Tomate Pain');
      expect(salaadeTomateOignonsRO.listIngredients()).toBe('Salade Tomate Pain');
      expect(agneauTomateOignonsRO.listIngredients()).toBe('Agneau Tomate Pain');
      expect(agneauFromageTomateFromageRO.listIngredients()).toBe('Agneau Fromage Tomate Fromage Pain');
  })
});
