import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

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
