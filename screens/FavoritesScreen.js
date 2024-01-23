import { View, Text, StyleSheet } from 'react-native';

import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const favoriteMeals = [];
  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }

  return <MealsList items={[]} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});