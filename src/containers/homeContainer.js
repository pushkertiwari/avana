import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import Constants from "../constants";
// import TextInput from "../components/common/TextInput";
// import Header from "../components/common/Header";
// import Button from "../components/common/Button";
import { moderateScale } from "../helpers/ResponsiveFonts";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      phone:'',
      accessCode:''
    };
    
  }
  static navigationOptions = {
    header: null,
  };
 
  render() {
    return (
      <Fragment>
        <View style={{ flex: 1, backgroundColor: "#F1BDBD" }}>
          <View style={styles.maskOutter}>
            <Image style={{
              bottom: moderateScale(135),
              left: moderateScale(105)
            }} source={require('../assets/images/EllipseImage.png')} />
          </View>
          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ resizeMode: "contain", width: '40%', marginLeft: moderateScale(30), marginTop: moderateScale(30) }} source={require('../assets/images/mainIcon.png')} />
          </View>
          <View style={{ marginLeft: 40, marginRight: 15, flex: 0.2, padding: moderateScale(5), marginTop: moderateScale(20) }}>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 20,
                textAlign: "justify",
                color: "#7B5151",
              }}
            >
              We're So Happy You're Here!
              </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 14,
                textAlign: "justify",
                paddingVertical: 10,
                color: "#7B5151",
              }}
            >
              If you are seeing this screen, Congratulations! You have been
                chosen to try out our brand new product.{"\n"} {"\n"}
              Please enter your access code to proceed with the free demo
              version of this app.
              </Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);

const styles = StyleSheet.create({
  maskOutter: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    marginTop: moderateScale(10),
    paddingRight: moderateScale(5),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }, 
})