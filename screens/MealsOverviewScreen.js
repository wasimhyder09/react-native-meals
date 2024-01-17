import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0
  });

  function renderMealItem(itemData) {
    return (
      <MealItem title={itemData.item.title} />
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