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
    padding: 10,
    marginBottom: 15,
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
  backgroundColor: 'grey', // or whatever your main background is
  },

  picker: {
  marginVertical: 12,
  backgroundColor: 'white',
  color: '#fff',
  borderRadius: 8,
  paddingHorizontal: 8,
},
 
});

export const food_search_style = StyleSheet.create({
    container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'yellow',
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
  resultItem: {
    padding: 5,
    backgroundColor: 'beige',
    marginBottom: 8,
    borderRadius: 6,
  },
  name: { fontWeight: 'bold' },
  details: { fontSize: 12, color: '#666' },
});

