import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryId, navigation])

  function renderMealItem(itemData) {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem} />
    </View>
  )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});