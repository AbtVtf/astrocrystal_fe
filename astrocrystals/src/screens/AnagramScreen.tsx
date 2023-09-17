import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
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
  });

const AnagramScreen: React.FC = () => {

    const [location, setLocation] = useState('');
    const [timeOfBirth, setTimeOfBirth] = useState('');
    const [isSubmitEnabled, setSubmitEnabled] = useState(false);
  
    // Update state and check if form can be submitted
    const handleInputChange = (field: any, value: any) => {
      if (field === 'location') {
        setLocation(value);
      } else if (field === 'timeOfBirth') {
        setTimeOfBirth(value);
      }
  
      setSubmitEnabled(location !== '' && timeOfBirth !== '');
    };
  
    const handleSubmit = () => {
      // Your submit logic here
    //   alert(`Location: ${location}, Time of Birth: ${timeOfBirth}`);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          value={location}
          onChangeText={(value) => handleInputChange('location', value)}
        />
  
        <Text style={styles.label}>Time of Birth (hh:mm:ss):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your time of birth"
          value={timeOfBirth}
          onChangeText={(value) => handleInputChange('timeOfBirth', value)}
        />
  
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!isSubmitEnabled}
        />
      </View>
      );
  };
  
  export default AnagramScreen;