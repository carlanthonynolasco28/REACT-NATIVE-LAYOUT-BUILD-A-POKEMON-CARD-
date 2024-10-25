import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  
  const rayquazaData = {
    name: "Rayquaza",
    image: require("./assets/rayquaza.png"), // Replace with the actual image path
    type: "Fire",
    hp: 210,
    moves: ["Celestial Roar", "Dragon Burst"],
    weaknesses: ["Ice"],
  };

   const eveeData = {
    name: "Evee",
    image: require("./assets/evee.png"),
    type: "Grass",
    hp: 60,
    moves: ["Call for Family", "Tackle"],
    weaknesses: ["Fighting"],
  };

  const meowthData = {
    name: "Meowth",
    image: require("./assets/meowth.png"),
    type: "Normal",
    hp: 60,
    moves: ["Nap", "Jump on"],
    weaknesses: ["Fighting"],
  };

   const umbreonData = {
    name: "Umbreon",
    image: require("./assets/umbreon.png"),
    type: "Electric",
    hp: 100,
    moves: ["Shadow Drain", "Slashing Strike", "Shadow Bullet", "Strafe"],
    weaknesses: ["Fairy"],
  };

  const mewtwoData = {
    name: "Mewtwo",
    image: require("./assets/mewtwo.png"),
    type: "Electric",
    hp: 130,
    moves: ["X Ball", "Psydrive", "Reflective Barrier", "Pressure"],
    weaknesses: ["Ghost"],
  };

   const magikarpData = {
    name: "Magikarp",
    image: require("./assets/magikarp.png"),
    type: "Water",
    hp: 30,
    moves: ["Submerge", "Water Evolution", "Epic Splash", "Jump"],
    weaknesses: ["Electric"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...rayquazaData} />
        <PokemonCard {...eveeData} />
        <PokemonCard {...meowthData} />
        <PokemonCard {...umbreonData} />
        <PokemonCard {...mewtwoData} />
        <PokemonCard {...magikarpData} />


        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});