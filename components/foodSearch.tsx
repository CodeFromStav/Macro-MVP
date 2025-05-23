
//TODO: gather food data from a real database and fill accordingly
import React, { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { food_search_style } from './styles';

const API_KEY = 'EYroURX34mSwLrzvq4FvGctYygHSz0Ijgd3EB5Hw';

interface FoodItem {
  fdcId: number;
  description: string;
  brandOwner?: string;
}
interface FoodSearchProps {
  onFoodSelect: (food: FoodItem) => void;
}

export default function FoodSearch({ onFoodSelect }: FoodSearchProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<FoodItem[]>([]);
    const url = new URL('https://api.nal.usda.gov/fdc/v1/foods/search');
    const searchFood = async () => {
      if (!query.trim()) {
        alert ('Please enter a food name');
        return;
      }

      url.searchParams.append('query', query);
      url.searchParams.append('api_key', API_KEY);

      try {
        const result = await fetch(url.toString());
        const data = await result.json();
        setResults(data.foods || []);
      } catch (err) {
        console.error('Error fetching food data:', err);
      }
      setQuery(''); //clears search 
    };

 return (
    <View style={food_search_style.container}>
      <TextInput
        placeholder="Search for food..."
        value={query}
        onChangeText={setQuery}
        style={food_search_style.input}
      />
      <Button title="Search" onPress={searchFood} /> 
      <FlatList
        data={results}
        keyExtractor={(item) => item.fdcId.toString()}
        renderItem={({ item }) => (
          <View style={food_search_style.resultItem}>
            <Text>{item.description}</Text>
            <Button title="Add to Diary" onPress={() => onFoodSelect(item)} />
          </View>
        )}
      />
    </View>
  );
}


    
// export const foodDB = {
//     Breakfast: ['Eggs', 'Bacon', 'Toast'], 
//     Lunch: ['Chicken', 'Rice', 'Salad'],
//     Dinner: ['Steak', 'Potatoes', 'Vegetables'],
//     Snacks: ['Chips', 'Cookies', 'Fruit']
// };