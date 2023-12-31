import React, { useEffect } from 'react';
import { useState } from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { fontFamilies, fontSizes } from '../utils/fonts';
import { Card } from 'react-native-paper';  // Optional for card styling
import axios from "axios";
const data = Array.from({ length: 11 }, (_, i) => ({
  id: i.toString(),
  title: `Card ${i + 1}`,
}));

const CardItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Card style={styles.anagramCard}>
      <Card.Content>
        <Text style={styles.anagramText}>Scorpio</Text>
        <Text style={styles.anagramText}>{name}</Text>
        <Text style={styles.anagramText}>House 5</Text>
      </Card.Content>
    </Card>
  );
};

const planets = [
    {
      id: "1",
      name: "Earnest Green",
    },
    {
      id: "2",
      name: "Winston Orn",
    }
]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: colors.background,
      borderRadius: 20,
      paddingTop: 15,
      marginTop: 5,
    },
    anagramCard: {
        backgroundColor: colors.secondary,
        padding: 12,
        marginBottom: 25,
        borderRadius: 10
    },
    anagramText: {
        fontSize: fontSizes.large,
        fontFamily: fontFamilies.ubuntuRegular,
        color: colors.text,
        marginBottom: 8,
    },

    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 12,
      marginBottom: 16,
      borderRadius: 4,
    },
    card: {
        marginBottom: 10,
      },
  });

const AnagramScreen: React.FC = () => {
    const [formData, setFormData] = useState({
        api_key: "",
        full_name: "",
        place: "",
        gender: "",
        day: "",
        month: "",
        year: "",
        hour: "",
        min: "",
        sec: "",
        lon: "",
        lat: "",
        tzone: "",
      });
      const [result, setResult] = useState(null);
    

    useEffect(() => {
     
  
      fetchData();
    }, []);
    const handleChange = (name: string, value: string) => {
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    

    const fetchData = async () => {
        try {
            const response = await axios.post(
              "http://localhost:3000/getAnagram",
              formData
            );
            setResult(response.data.data);
            console.log("RESPONSSSSSS:",response.data.data);
          } catch (error) {
            console.error("There was an error making the API call:", error);
          }
      };

    return (
      <View style={styles.container}>
        <FlatList
        data={planets}
        renderItem={({ item }) => <CardItem name={item.name} />}
        keyExtractor={(item) => item.id}
      />
        
        
      
      </View>
      );
  };
  
  export default AnagramScreen;