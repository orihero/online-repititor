import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { PopIcon, SearchIcon, StarIcon } from "../../assets/icons/icon";
import {
  CATEGORYCARD,
  INFORMATION,
  REVIEWS,
  TOP_COURSES,
} from "../../constant";
import { FlatList } from "react-native/Libraries/Lists/FlatList";
// import { Image } from "react-native-svg";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeHooks } from "./hooks";
import Review from "../../components/review";

const HomeScreen = () => {
  const { onCategoryPress } = HomeHooks();
  const { onCoursePress } = HomeHooks();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.homeContainer}>
          <View>
            <Text style={styles.headText}>Поиск курсов</Text>
            <View style={styles.search}>
              <TextInput
                placeholder="Название курса"
                style={{ width: 200, fontSize: 15 }}
              />
              <Pressable>
                <SearchIcon />
              </Pressable>
            </View>
          </View>
          <View style={styles.category}>
            <View style={styles.categoryHead}>
              <Text style={styles.categoryText}>Категории</Text>
              <TouchableOpacity onPress={onCategoryPress}>
                <Text style={styles.allCategory}>Посмотреть все</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ borderRadius: 10, marginTop: 13 }}
            >
              <View style={styles.cards}>
                {CATEGORYCARD.map((e, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.card}
                      onPress={onCategoryPress}
                    >
                      <Image
                        source={e.images}
                        style={styles.cardImage}
                        resizeMode="cover"
                      />
                      <Text style={styles.cardText}>{e.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.topCourse}>
            <View style={styles.courseHead}>
              <Text style={styles.courseText}>Топовые курсы</Text>
              <TouchableOpacity onPress={onCoursePress}>
                <Text style={styles.allCourse}>Посмотреть все</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ borderRadius: 10, marginTop: 13 }}
            >
              <View style={styles.courseCards}>
                {TOP_COURSES.map((e, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.courseCard}
                      onPress={onCoursePress}
                    >
                      <Image source={e.images} />
                      <View style={styles.popular}>
                        <View style={styles.popIcon}>
                          <PopIcon />
                          <Text style={styles.popText}>{e.popular}</Text>
                        </View>
                        <View style={styles.star}>
                          <StarIcon />
                          <Text style={styles.starText}>{e.star}</Text>
                        </View>
                      </View>
                      <Text style={styles.title}>{e.title}</Text>
                      <View style={styles.price}>
                        <Text style={styles.priceText}>{e.price}$</Text>
                        <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View>
            <Review />
          </View>
          <View style={styles.subscribe}>
            <Text style={styles.subscribeText}>
              Подпишитесь на нашу новостную рассылку
            </Text>
            <Text style={styles.subscribeDict}>
              Подпишитесь и вы будете в курсе все наших акций, скидок, появление
              Новых предметов, дисциплин и учебных центров.
            </Text>
            <View style={styles.subscribeInput}>
              <TextInput placeholder="Введите ваш email" style={styles.input} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Подписаться</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.information}>
            {INFORMATION.map((e, index) => {
              return (
                <View key={index} style={styles.inforCard}>
                  <Image source={e.images} />
                  <View>
                    <Text style={styles.about}>{e.about}</Text>
                    <Text style={styles.dec}>{e.dec}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
