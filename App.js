import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [cocktailsList, setCocktailsList] = useState([]);

  const fetchCocktails = async () => {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((response) => response.json())
      .then((response) => {
        // response.drinks[0].idDrink;

        // console.log(response.drinks[0]);
        setCocktailsList(response.drinks);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <View style={styles.viewContainer}>
      {/* Title */}
      <Text style={styles.textTitle}>Cocktails recipes</Text>

      {/* Cocktails recipes */}
      <ScrollView>
        {cocktailsList.map((data, index) => {
          // Get all ingredients
          const ingredients = [];
          for (let i = 1; i <= 15; i++) {
            const propName = `strIngredient${i}`;
            if (propName in data && data[propName]) {
              ingredients.push(data[propName]);
            }
          }

          return (
            <View key={index} style={styles.viewCocktail}>
              <View style={styles.viewAttribute}>
                <Text style={[styles.textAttribute, { fontSize: 24 }]}>
                  Cocktail name :
                </Text>
                <Text style={[styles.textDesc, { fontSize: 24 }]}>
                  {data.strDrink}
                </Text>
              </View>

              <View style={[styles.viewAttribute, { marginBottom: 10 }]}>
                <Text style={styles.textAttribute}>Last updated :</Text>
                <Text style={styles.textDesc}>{data.dateModified}</Text>
              </View>

              <Text style={[styles.textDesc, { marginBottom: 10 }]}>
                {data.strAlcoholic === "Alcoholic"
                  ? "This cocktail contains alcohol"
                  : "This cocktail doesn't contains alcohol"}
              </Text>

              <View style={[styles.viewAttribute, { marginBottom: 10 }]}>
                <Text style={styles.textAttribute}>Drink category :</Text>
                <Text style={styles.textDesc}>{data.strCategory}</Text>
              </View>

              <Text style={[styles.textDesc, { marginBottom: 10 }]}>
                This cocktail is traditionally served in a {data.strGlass}
              </Text>

              <Text style={styles.textAttribute}>Ingredients :</Text>

              {ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.textDesc}>
                  {"-"}
                  {ingredient}
                </Text>
              ))}

              <Text style={[styles.textAttribute, { marginTop: 10 }]}>
                Recipe :
              </Text>

              <Text style={styles.textDesc}>{data.strInstructions}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161b1d",
  },

  textTitle: {
    color: "#ff9f31",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },

  viewCocktail: {
    marginBottom: 40,
  },

  viewAttribute: {
    flexDirection: "row",
    alignItems: "center",
  },

  textAttribute: {
    marginRight: 10,
    color: "#05a6c3",
  },

  textDesc: {
    color: "#fafafa",
  },
});

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// // ... other code from the previous section
// const styles = StyleSheet.create({
//   viewContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#05a6c3",
//   },

//   textTitle: {
//     color: "#000000",
//     fontSize: 24,
//     marginLeft: 20,
//     paddingVertical: 30,
//     paddingLeft: 10,
//   },
// });

// ----------------------------------------------------------------

// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// https://shakeit.netlify.app/main
