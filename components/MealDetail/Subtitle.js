import { Text, StyleSheet } from 'react-native'

function Subtitle({ children }) {
  return (
    <Text style={styles.subTitle}>{children}</Text>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    marginHorizontal: 12,
    textAlign: 'center',
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2
  }
});