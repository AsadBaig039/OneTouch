import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ListView from './ListView';

export default function ListViewList({data, onPress}) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {data.map((item) => (
            <View style={styles.listContainer} key={item.key}>
              <ListView
                key={item.key}
                title={item.title}
                description={item.description}
                accountImageUri={item.imageUri}
                onPress={onPress}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  listContainer: {},
});
