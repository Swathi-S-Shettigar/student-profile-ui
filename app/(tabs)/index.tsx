


import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("collections");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0d0d0d" }}>
      {/* Cover Image */}
      <ImageBackground
        source={require("../../assets/images/cover1.png")}
        style={{ width: "100%", height: 250 }}
        resizeMode="cover"
      >
        <View
          style={{
            paddingTop: 50,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={{
              width: 65,
              height: 65,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fff",
              marginRight: 15,
            }}
          />
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                @theo_from_hsr
              </Text>
              <Entypo name="check" size={16} color="#1db954" style={{ marginLeft: 5 }} />
            </View>
            <Text style={{ color: "#fff", marginTop: 2 }}>🇮🇳 INDIA</Text>
            <Text style={{ color: "#ccc", fontSize: 12, marginTop: 4 }}>
              18 y/o with high ambitions. want to build cool stuff!
            </Text>
          </View>
          <Feather name="share-2" size={18} color="#fff" style={{ marginRight: 10 }} />
          <Feather name="settings" size={18} color="#fff" />
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 20, marginTop: 15 }}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#ccc",
                textDecorationLine: "underline",
                fontSize: 12,
                marginRight: 20,
              }}
            >
              EDIT PROFILE
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#1db954", fontSize: 12 }}>2 FOLLOWING</Text>
        </View>
      </ImageBackground>

      {/* Tabs */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setActiveTab("collections")}
          style={{
            alignItems: "center",
            borderBottomWidth: activeTab === "collections" ? 2 : 0,
            borderBottomColor: "#1db954",
            paddingBottom: 10,
          }}
        >
          <Feather name="grid" size={16} color="#ccc" />
          <Text
            style={{
              color: activeTab === "collections" ? "#1db954" : "#ccc",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            COLLECTIONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("manageTags")}
          style={{
            alignItems: "center",
            borderBottomWidth: activeTab === "manageTags" ? 2 : 0,
            borderBottomColor: "#1db954",
            paddingBottom: 10,
          }}
        >
          <Feather name="tag" size={16} color="#ccc" />
          <Text
            style={{
              color: activeTab === "manageTags" ? "#1db954" : "#ccc",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            MANAGE TAGS
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === "collections" ? (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingHorizontal: 10,
            marginTop: 15,
            paddingBottom: 30,
          }}
        >
          <CollectionCard
            image={require("../../assets/images/nature.jpg")}
            label="LIKED (32)"
          />
          <CollectionCard
            image={require("../../assets/images/saved.jpg")}
            label="SAVED (23)"
          />
          <CollectionCard
            image={require("../../assets/images/files.jpg")}
            label="FILES (3)"
          />
        </View>
      ) : (
        <View style={{ paddingHorizontal: 20, marginTop: 20, paddingBottom: 30 }}>
          <Text
            style={{
              color: "#ccc",
              fontSize: 13,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            our recommendations work best when you let us know these things:
          </Text>

          <TagCard
            icon={<Ionicons name="flash-outline" size={20} color="#FFD700" />}
            title="YOUR DIFFICULTY ✨"
            subtitle="you decide the level of challenge you want!"
          />
          <TagCard
            icon={<Ionicons name="star-outline" size={20} color="#FFD700" />}
            title="INTERESTS YOU LIKE ✨"
            subtitle="we’ll use these to show you cool builds"
          />
          <TagCard
            icon={<Feather name="tool" size={20} color="#ccc" />}
            title="TOOLS USED 🛠"
            subtitle="we’ll suggest better using these picks."
          />
        </View>
      )}
    </ScrollView>
  );
};

// Collection Card Component
const CollectionCard = ({ image, label }) => (
  <View style={{ width: screenWidth * 0.44, marginVertical: 10 }}>
    <Image
      source={image}
      style={{ width: "100%", height: 100, borderRadius: 10 }}
    />
    <Text style={{ color: "#ccc", textAlign: "center", marginTop: 5, fontSize: 12 }}>
      {label}
    </Text>
  </View>
);

// Tag Card Component
const TagCard = ({ icon, title, subtitle }) => (
  <TouchableOpacity
    style={{
      backgroundColor: "#1a1a1a",
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <View style={{ marginRight: 15 }}>{icon}</View>
    <View style={{ flex: 1 }}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
        {title}
      </Text>
      <Text style={{ color: "#ccc", fontSize: 12 }}>{subtitle}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#ccc" />
  </TouchableOpacity>
);

export default ProfileScreen;
