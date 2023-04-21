import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Details = ({ route }) => {
  const { cocktailId } = route.params;
  const [cocktailDetails, setCocktailDetails] = useState(null);

  const fetchCocktailDetails = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      );
      const json = await response.json();
      setCocktailDetails(json.drinks[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCocktailDetails();
  }, [cocktailId]);

  return (
    <View style={styles.viewContainer}>
      {/* Cocktails recipes */}
      <ScrollView>
        {cocktailDetails ? (
          <View style={styles.viewCocktail}>
            <View style={[styles.textTitle, { paddingLeft: 28 }]}>
              <Text style={[styles.textTitle, { fontSize: 24 }]}>
                Details of {cocktailDetails?.strDrink}
              </Text>
            </View>

            <View
              style={[styles.viewCenter, { paddingTop: 20, paddingBottom: 20 }]}
            >
              <Image
                source={{
                  uri: `${cocktailDetails?.strDrinkThumb}`,
                }}
                style={{ width: 250, height: 250 }}
              />
            </View>

            <View
              style={[
                styles.viewAttribute,
                { marginBottom: 10, paddingLeft: 28 },
              ]}
            >
              <Text style={styles.textAttribute}>Last updated :</Text>
              <Text style={styles.textDesc}>
                {cocktailDetails?.dateModified}
              </Text>
            </View>

            <Text style={styles.textDescPadding}>
              {cocktailDetails?.strAlcoholic === 'Alcoholic'
                ? 'This cocktail contains alcohol'
                : "This cocktail doesn't contains alcohol"}
            </Text>

            <View
              style={[
                styles.viewAttribute,
                { marginBottom: 10, paddingLeft: 28 },
              ]}
            >
              <Text style={styles.textAttribute}>Drink category :</Text>
              <Text style={styles.textDesc}>
                {cocktailDetails?.strCategory}
              </Text>
            </View>

            <Text style={styles.textDescPadding}>
              This cocktail is traditionally served in a{' '}
              {cocktailDetails?.strGlass}
            </Text>

            <Text style={styles.textAttributePadding}>Ingredients :</Text>

            {(() => {
              const ingredients = [];
              for (let i = 1; i <= 15; i++) {
                const propName = `strIngredient${i}`;
                if (propName in cocktailDetails && cocktailDetails[propName]) {
                  ingredients.push(cocktailDetails[propName]);
                }
              }
              return ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.textDescPadding}>
                  {'-'}
                  {ingredient}
                </Text>
              ));
            })()}

            <Text style={styles.textAttributePadding}>Recipe :</Text>

            <Text style={styles.textDescPadding}>
              {cocktailDetails?.strInstructions}
            </Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#161b1d',
  },

  textTitle: {
    alignItems: 'center',
    color: '#ff9f31',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },

  viewAttribute: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewCocktail: {
    marginBottom: 40,
  },

  textAttribute: {
    marginRight: 10,
    color: '#05a6c3',
  },

  textAttributePadding: {
    marginRight: 10,
    color: '#05a6c3',
    marginBottom: 10,
    paddingLeft: 28,
  },

  textDesc: {
    color: '#fafafa',
  },

  textDescPadding: {
    color: '#fafafa',
    marginBottom: 10,
    paddingLeft: 28,
  },
});
