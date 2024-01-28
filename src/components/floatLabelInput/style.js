import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 18,
    color: '#000',
  },
});

export default styles;

// import { StyleSheet, Dimensions } from "react-native";
// // import Scale, { height, width } from "../../core/Scale";
// import { colorCodes } from "../../theme/Colors";
// import { customFonts } from "../../theme/CustomFonts";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

// export default StyleSheet.create({
//   list_item_container: {
//     width: width * 0.89,
//     height: height * 0.06,
//     marginHorizontal: (width * 0.09) / 2,
//     justifyContent: "space-evenly",
//     alignSelf: "center",
//     alignItems: "center",
//   },
//   animatedStyle: {
//     top: 12,
//     left: 4,
//     position: "absolute",
//     borderRadius: 90,
//     zIndex: 10000,
//   },
//   label: {
//     fontSize: 16,
//     backgroundColor: 'black'
//   },
//   input: {
//     fontSize: 16,
//     height: height * 0.05,
//     position: "absolute",
//     top: 6,
//     width: width * 0.9,
//     color: 'white',
//     borderColor: 'white',
//     borderWidth: 1,
//     textAlignVertical: "center",
//   },
// });
