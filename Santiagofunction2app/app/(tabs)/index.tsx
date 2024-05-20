import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Button, ScrollView, Image} from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 5) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  
  return (
//
    <View>
 
  <Pressable onPress={() => changenumber()}>
       
        <Text
     
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraph
              : number === 2
              ? styles.paragraphred
              : styles.paragraphgreen}>
        This is my first interest. this is {number}
        </Text>
      </Pressable>
      

 <ScrollView>
 {number == 1 ? <View style={styles.container}>
      <Text style={styles.paragraph}>
        I like play soccer 
      </Text>
    </View> : number == 2 ? <View style={styles.container}>
      <Text style={styles.paragraph2}>
      Hello
      </Text>
    </View> :  null}

    {number == 2 ? <View style={styles.container3}>
      <Text style={styles.paragraph}>
      I like to watch boxing
      </Text>
    </View> : number == 3 ? <View style={styles.container4}>
      <Text style={styles.paragraph4}>
      Hello 
      
      </Text>
    </View> :  null}

    {number == 3 ? <View style={styles.container5}>
      <Text style={styles.paragraph5}>
        i like to se cars
      </Text>
    </View> : number == 4 ? <View style={styles.container5}>
      <Text style={styles.paragraph5}>
      Hello
      </Text>
    </View> :  null}

    {number == 4 ? <View style={styles.container3}>
      <Text style={styles.paragraph6}>
        I like play videogames
      </Text>
    </View> : number == 5 ? <View style={styles.container6}>
      <Text style={styles.paragraph6}>
      Hello
      </Text>
    </View> :  null}

    




     {number== 1 ? <View style={styles.container2}>
     <Image
          source={{ uri: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4IP6XZ3QNJM2LIXL4RBTL6FLXU.jpg' }}
          style={{ width: 390, height: 300 }}
        />
      <Text style={styles.paragraph}>
        i like play soccer 
      </Text>
    </View> : number == 2 ?
         <View style={styles.container4}>
          <Image
          source={{ uri: 'https://cdn.britannica.com/76/187976-050-7EF67E13/Floyd-Mayweather-Jr-ducks-Philippines-Manny-Pacquiao-May-2-2015.jpg' }}
          style={{ width: 395, height: 300 }}
        />
      <Text style={styles.paragraph4}>
        
      I like to watch boxing
      </Text>
      
    </View> : number == 3 ?
         <View style={styles.container5}>
          <Image
          source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&height=900&width=1600&fit=bounds' }}
          style={{ width: 395, height: 300 }}
        />
      <Text style={styles.paragraph5}>
        i like to see cars
      </Text>
    </View> :number == 4 ?
         <View style={styles.container6}>
          <Image
          source={{ uri: 'https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?q=h_1194,w_2121,x_0,y_0' }}
          style={{ width: 395, height: 300 }}
        />
      <Text style={styles.paragraph6}>
        i like play videogames
      </Text>
    </View> :<View  style={styles.container7}>
      <Text style={styles.paragraph7}>
        i like to watching movies
      </Text>
      <Image
          source={{ uri: 'https://stylebyemilyhenderson.com/wp-content/uploads/2020/04/UpdatedEmily-Henderson-Current-Animated-Movies-1670x1541.jpg' }}
          style={{ width: 395, height: 300 }}
        />
    </View>    }
    </ScrollView>
    </View>  
  );
};

// Output (like HTML) ends here

//need to export the Component.
export default App;

//Styling -- Like CSS starts here.
const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 9,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 9,
    
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"purple"
  },
  paragraphred: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange',
  },
  paragraphgreen: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },

  paragraph2: {
    margin: 14,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
  },

  container4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  
  
  
  container4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },

  paragraph4: {
    margin: 14,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
  },

  container5: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 8,
  },



paragraph5: {
  margin: 24,
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  color:"lime"
},
  
container6: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'brown',
  padding: 8,
},

paragraph6: {
  margin: 24,
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  color:"gold"
},
  
container7: {

  justifyContent: 'center',
  backgroundColor: 'gray',
  padding: 8,
},

paragraph7: {
  margin: 24,
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  color:"violet",
  
},
  
});