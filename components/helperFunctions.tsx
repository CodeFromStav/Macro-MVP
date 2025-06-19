
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

export function extractMacros( nutrients: Nutrient[]): Macros {
    const macros: Macros = {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
    };

    for (const nutrient_index of nutrients) {
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





