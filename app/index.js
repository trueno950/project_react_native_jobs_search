import { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite,
          headerShadowVisible: false},
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
          ),
          headerTitle: ''
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: SIZES.medium
        }}>
          <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={() => {
            if(searchTerm) {
              router.push(`/search/${searchTerm}`)
            }
          }}/>
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
