import FoodSearch from '@/components/foodSearch';
import { diary_style } from '@/components/styles';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

interface FoodItem {
  fdcId: number;
  description: string;
  brandOwner?: string;
}

const DiaryScreen = () => {
  const [diaryItems, setDiaryItems] = useState<FoodItem[]>([]);

  const addFoodToDiary = (item: FoodItem) => {
    setDiaryItems((prevItems) => [...prevItems, item]);
  };

  return (
    <FlatList
      data={diaryItems}
      keyExtractor={(item) => item.fdcId.toString()}
      renderItem={({ item }) => (
        <View style={diary_style.foodTile}>
          <Text style={diary_style.foodText}>{item.description}</Text>
        </View>
      )}
      /*This allows more than one scrollable FlatList on the screen
      and creates a food search above the list */
      ListHeaderComponent={ 
        <View style={diary_style.header}>
          <FoodSearch onFoodSelect={addFoodToDiary} />
          <Text style={diary_style.sectionTitle}>Diary Entries</Text>
        </View>
      }
      contentContainerStyle={diary_style.container}
    />
  );
};

export default DiaryScreen;