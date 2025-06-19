
type Nutrient = {
    nutrientName: string;
    value: number;
    unitName: string;
};

type Macros = {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
};

export function extractMacros( nutrientsArr: Nutrient[]): Macros {
    const macros: Macros = {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
    };

    for (const nutrient_index of nutrientsArr) {
        switch (nutrient_index.nutrientName) {
            case 'Energy':
                if (nutrient_index.unitName === 'KCAL')
                    macros.calories = nutrient_index.value;
                break;
            case 'Fat':
                macros.fat = nutrient_index.value;
                break;
            case 'Carbs':
                macros.carbs = nutrient_index.value;
                break;
        }
    }
    return macros;
}


export function sumMealMacros(entriesArr: Macros[]): Macros {
  return entriesArr.reduce(
    (acc: Macros, cur: Macros): Macros => ({
      calories: acc.calories + cur.calories,
      protein: acc.protein + cur.protein,
      fat: acc.fat + cur.fat,
      carbs: acc.carbs + cur.carbs,
    }),
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );
}




