import { StyleSheet } from 'react-native';

//styles for the login screen
export const login_style = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#F5FCFF", // Background color
  },
    input: {
      height: 40,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
});

//styles for the diary screen
export const diary_style = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1a1a1a',
    flex: 1,
  },
  sectionCard: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  foodItemContainer: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  foodTile: {
    backgroundColor: '#555',
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  foodText: {
    color: '#fff',
    fontSize: 14,
  },
  header: {
  paddingHorizontal: 16,
  paddingTop: 24,
  paddingBottom: 8,
  backgroundColor: '#1a1a1a', // or whatever your main background is
}, 
});

export const food_search_style = StyleSheet.create({
    container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
  resultItem: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 8,
    borderRadius: 6,
  },
  name: { fontWeight: 'bold' },
  details: { fontSize: 12, color: '#666' },
});

