import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function About() {
  //   const [cocktailsCategories, setCocktailsCategories] = useState([]);

  //   const fetchCategories = async () => {
  //     await fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1`)
  //       //   .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //         // setCocktailsCategories(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //   useEffect(() => {
  //     fetchCategories();
  //   }, []);

  return (
    <View style={styles.viewContainer}>
      {/* Title */}
      <View style={styles.viewCenter}>
        <Text style={styles.textTitle}>Welcome to TheCocktailDB🍹</Text>
      </View>

      <View style={styles.viewCenter}>
        <Text style={[styles.textDesc]}>
          An open, crowd-sourced database of drinks and cocktails from around
          the world.{`\n`}
          We also offer a free JSON API for anyone wanting to use it.{`\n`}
          If you like the site, please consider supporting us on Patreon by
          clicking the link below...
        </Text>
      </View>
      <Text style={styles.textSection}>Statistics🍸</Text>

      <View style={styles.viewStats}>
        <View style={styles.viewAttribute}>
          <Text style={[styles.textAttribute]}>Total Drinks:</Text>
          <Text style={[styles.textDesc, { paddingLeft: 14 }]}>635</Text>
        </View>

        <View style={styles.viewAttribute}>
          <Text style={[styles.textAttribute]}>Total Ingredients:</Text>
          <Text style={[styles.textDesc]}>489</Text>
        </View>
        <View style={styles.viewAttribute}>
          <Text style={[styles.textAttribute]}>Drink Images:</Text>
          <Text style={[styles.textDesc]}>635</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,

    paddingTop: 20,

    backgroundColor: '#161b1d',
  },

  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    color: '#ff9f31',
    fontSize: 24,
    marginBottom: 20,
  },

  textAttribute: {
    marginRight: 10,
    color: '#05a6c3',
  },

  textDesc: {
    color: '#fafafa',
    width: '80%',
  },

  textSection: {
    paddingLeft: 18,
    paddingTop: 20,
    color: '#ff9f31',
    fontSize: 18,
    paddingBottom: 16,
  },

  viewAttribute: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewStats: {
    paddingLeft: 18,
  },

  // textAttribute: {
  //   marginRight: 10,
  //   color: '#05a6c3',
  // },
});
