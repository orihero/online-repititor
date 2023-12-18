import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "./styles";
import { ArrowIcon } from "../../assets/icons/icon";
import { EnglishWithHooks } from "./hooks";
import InputRange from "../../components/local/InputRange";

const FilterScreen = () => {
  const { onEnglishPress } = EnglishWithHooks();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.filterContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <ArrowIcon />
          </TouchableOpacity>
          <Text style={styles.title}>Фильтр</Text>
        </View>
        <View style={styles.filterSection}>
          <View>
            <Text style={styles.regionText}>Регион</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <InputRange min={1950} max={2022} title="Year" steps={1} onValueChange={(range: any) => console.log(range)}/>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onEnglishPress}>
          <Text style={styles.buttonText}>Применить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
