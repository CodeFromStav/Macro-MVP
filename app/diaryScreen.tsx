import FoodSearch from '@/components/foodSearch';
import { diary_style } from '@/components/styles';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button, Menu } from 'react-native-paper';
interface FoodItem {
  fdcId: number;
  description: string;
  brandOwner?: string;
}
const DiaryScreen = () => {
 
  type DiaryByMeal = Record<string, FoodItem[]>;

  
  const [diaryItems, setDiaryItems] = useState<DiaryByMeal>({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
  });

  // const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  //Sets meal based on time of day.
  const [selectedMeal, setSelectedMeal] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const getDefaultMealByTime = () => {
      const hour = new Date().getHours();

      if (hour < 11) return 'Breakfast';
      if (hour < 16) return 'Lunch';
      return 'Dinner';
  };

  const defaultMeal = getDefaultMealByTime();
  
  setSelectedMeal(defaultMeal);
}, []);
  
  const addFoodToDiary = (meal: string, item: FoodItem) => {
  setDiaryItems((prev) => ({
    ...prev,
    [meal]: [...prev[meal], item],
  }));
};


 

  return (
    <FlatList
    /* data and renderItem strange typescript req. */
      data={[]}
      renderItem={() => null}
      
      ListHeaderComponent={ 
        <View style={diary_style.header}>

          {selectedMeal !== '' && (
            
          
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <Button mode="outlined" onPress={() => setMenuVisible(true)}>
                  {selectedMeal || 'Select Meal'}
                </Button>
              }
            >
              {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                <Menu.Item
                  key={meal}
                  onPress={() => {
                    setSelectedMeal(meal);
                    setMenuVisible(false);
                  }}
                  title={meal}
                />
              ))}
            </Menu>
  
        )}
          
            <FoodSearch onFoodSelect={(item) => addFoodToDiary(selectedMeal, item)} />
            <Text style={diary_style.sectionTitle}>Diary Entries</Text>

          {Object.entries(diaryItems).map(([meal, items]) => (
            <View key={meal} style={diary_style.sectionCard}>
              <Text style={diary_style.sectionTitle}>{meal}</Text>
              <View style={diary_style.foodItemContainer}>
                {items.map((item) => (
                  <View key={item.fdcId} style={diary_style.foodTile}>
                    <Text style={diary_style.foodText}>{item.description}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      }
      contentContainerStyle={diary_style.container}
    />
    
  );
};
export default DiaryScreen;