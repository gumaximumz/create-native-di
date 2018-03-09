const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: "#fff"
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  btnLogin:{
    margin: 15, 
    marginTop: 50 
  }
};