import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

const ChartScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    place: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    hour: '',
    min: '',
    sec: '',
    lon: '',
    lat: '',
    tzone: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    // Check if any field is empty
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        Alert.alert('Validation Error', `${key} is required.`);
        return false;
      }
    }
    return true;
  };

  const fetchData = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        'http://192.168.0.208:3000/chart',
        formData,
      );
      setResult(response.data.data);
    } catch (error) {
      console.error('There was an error making the API call:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Get Planetary Positions</Text>
        {Object.keys(formData).map(key => (
          <View key={key}>
            <Text style={styles.label}>{key}</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange(key, value)}
              value={formData[key as keyof typeof formData]}
            />
          </View>
        ))}
        <View style={styles.button}>
          <Button title="Get Data" onPress={fetchData} />
        </View>
        {result && (
          <View>
            <Text style={styles.result}>Results:</Text>
            <Text>{JSON.stringify(result, null, 2)}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ChartScreen;

