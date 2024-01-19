import { View, Image, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return <View>
    <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
    <Text>{selectedMeal.title}</Text>
    <MealDetails
      complexity={selectedMeal.complexity}
      duration={selectedMeal.duration}
      affordability={selectedMeal.affordability}
    />
    <Text>Ingredients</Text>
    {selectedMeal.ingredients.map(ingredient => (
      <Text key={ingredient}>{ingredient}</Text>
    ))}
    <Text>Steps</Text>
    {selectedMeal.steps.map(step => (
      <Text key={step}>{step}</Text>
    ))}
  </View>
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});