import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import {
  ArrowIcon,
  PopIcon,
  RatingArrowIcon,
  RatingIcon,
  StarIcon,
} from "../../assets/icons/icon";
import { LIKED_CARD } from "../../constant";
import { CourseHooks } from "./hooks";

const CourseScreen = () => {
  const { onFilterPress } = CourseHooks();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.courseContainer}>
          <View style={styles.header}>
            <TouchableOpacity >
              <ArrowIcon />
            </TouchableOpacity>
            <View style={styles.courseHead}>
              <View>
                <Text style={styles.title}>Английский</Text>
                <Text style={styles.course}>500 курсов</Text>
              </View>
              <TouchableOpacity style={styles.rating} onPress={onFilterPress}>
                <RatingIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ratingList}>
            <Text>Сортировка:</Text>
            <Pressable style={styles.arrow}>
              <Text style={styles.arrowText}>По рейтингу</Text>
              <RatingArrowIcon />
            </Pressable>
            <Pressable style={styles.arrow}>
              <Text style={styles.arrowText}>По цене</Text>
              <RatingArrowIcon />
            </Pressable>
          </View>
          <View style={styles.cards}>
            {LIKED_CARD.map((e, index) => {
              return (
                <TouchableOpacity key={index} style={styles.card}>
                  <Image
                    source={e.images}
                    style={{ width: 93, height: 91, borderRadius: 10 }}
                  />
                  <View style={styles.coursAbout}>
                    <Text style={styles.titleCard}>{e.title}</Text>
                    <View style={styles.priceLesson}>
                      <View style={styles.price}>
                        <Text style={styles.coursPrice}>{e.price}$</Text>
                        <Text style={styles.oldPrice}>{e.oldPrice}$</Text>
                      </View>
                      <View style={styles.coursPeople}>
                        <View style={styles.popular}>
                          <PopIcon />
                          <Text style={styles.popText}>{e.people}</Text>
                        </View>
                        <View style={styles.star}>
                          <StarIcon />
                          <Text style={styles.startText}>{e.star}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseScreen;
