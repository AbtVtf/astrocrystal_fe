import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import axios from 'axios';

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
  return <View />;
};

export default TestScreen;
