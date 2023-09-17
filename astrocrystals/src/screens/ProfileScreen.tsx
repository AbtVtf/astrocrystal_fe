import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    calendar: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    dayContainer: {
      alignItems: 'center',
      marginHorizontal: 10,
    },
    dayText: {
      fontSize: 16,
    },
    dateText: {
      fontSize: 20,
    },
    sunContainer: {
      alignItems: 'center',
    },
    sunText: {
      marginTop: 10,
      fontSize: 18,
    },
  });

const ProfileScreen: React.FC = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        {/* {daysOfWeekcurrentDay.map((day, index) => ( */}
          <View key={currentDay} style={styles.dayContainer}>
            <Text style={styles.dayText}>{currentDay}</Text>
            <Text style={styles.dateText}>{currentDate.getDate() + currentDay}</Text>
          </View>
        {/* ))} */}
      </View>
{/* 
      <View style={styles.sunContainer}>
        <Svg height="100" width="100">
          <Circle cx="50" cy="50" r="45" stroke="gold" strokeWidth="5" fill="gold" />
        </Svg>
        <Text style={styles.sunText}>Sun</Text>
      </View> */}
    </View>
  );
};



export default ProfileScreen;
