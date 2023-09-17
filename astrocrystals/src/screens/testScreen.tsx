import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import axios from "axios";

interface FormData {
  api_key: string;
  full_name: string;
  place: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  hour: string;
  min: string;
  sec: string;
  lon: string;
  lat: string;
  tzone: string;
}

const TestScreen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
  const [result, setResult] = useState<any>(null);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/getPlanetaryPositions",
        formData
      );
      setResult(response.data.data);
    } catch (error) {
      console.error("There was an error making the API call:", error);
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Get Planetary Positions</Text>
      {Object.keys(formData).map((key) => (
        <View key={key} style={{ marginBottom: 20 }}>
          <Text>{key}</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingLeft: 10,
            }}
            onChangeText={(value) => handleChange(key as keyof FormData, value)}
            value={formData[key as keyof FormData]}
          />
        </View>
      ))}
      <Button title="Get Data" onPress={handleSubmit} />
      {result && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Results:</Text>
          <Text>{JSON.stringify(result, null, 2)}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default TestScreen;
