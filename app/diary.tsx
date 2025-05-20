
import foodDB from '@/components/foodDB'; // Importing the food database
import { diary_style } from '@/components/styles';
import React from 'react';
import { ScrollView, Text } from 'react-native';
// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64,
// };

const DiaryScreen = () => {
    
    return (
    <ScrollView style = {diary_style.container}>
        {Object.entries(foodDB).map(([meal, items]) => (
            <ScrollView style = {diary_style.sectionCard} key={meal}>
                <Text style = {diary_style.sectionTitle}>{meal}</Text>
                <ScrollView style = {diary_style.foodItemContainer}>
                    {items.map((item, index) => (
                        <ScrollView style = {diary_style.foodTile} key={index}>
                            <Text style = {diary_style.foodText}>{item}</Text>
                        </ScrollView>
                    ))}
                </ScrollView>
            </ScrollView>
        ))}
        
        
    </ScrollView>
    )
};

    export default DiaryScreen;