import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const Details = ({ cocktailId }) => {
  const [cocktailDetails, setCocktailDetails] = useState(null);

  useEffect(() => {
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

    fetchCocktailDetails();
  }, [cocktailId]);

  if (!cocktailDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { strDrink, strInstructions, strDrinkThumb } = cocktailDetails;

  return (
    <View>
      <Text>{strDrink}</Text>
      <Image
        source={{ uri: strDrinkThumb }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{strInstructions}</Text>
    </View>
  );
};

export default Details;
