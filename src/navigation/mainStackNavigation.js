import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClaimAccountScreen from '../screens/claimAccount';
import ConfirmDetailsScreen from '../screens/confirmDetails';
import CreateAccountByPhone from '../screens/createAccountByPhone';
import DiscoverFilterScreen from '../screens/discoverFilterScreen';
import EnterDetailsScreen from '../screens/enterDetails';
import LoginScreen from '../screens/login';
import OtpScreen from '../screens/otpScreen';
import VerifiedScreen from '../screens/phoneVerified';
import SignUpScreen from '../screens/signUp';
import SplashScreen from '../screens/splashscreen';
import MyTabs from './bottomTabNavigation';
import CheckRedux from '../screens/checkGetRedux';
import checkPostRedux from '../screens/checkPostRedux/index';
import AddFilmScreen from '../screens/addFilm';
import AddTeamScreen from '../screens/addTeam';
import AddTeamMemberScreen from '../screens/addTeamMember';
import EditDetailsScreen from '../screens/editDetails';

import VideoPlay from '../screens/videoPlay';
import EditAwardScreen from '../screens/editAward';
import AddAwardScreen from '../screens/addAwardScreen';
import ChatScreen from '../screens/chatScreen';
import ArchiveBlackBookScreen from '../screens/archiveBlackBook';
import UpdateFilm from '../screens/updateFilm';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" 
      // screenOptions={{
      //   gestureEnabled: false, 
      // }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkPostRedux"
          component={checkPostRedux}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckRedux"
          component={CheckRedux}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="videoPlay"
          component={VideoPlay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountByPhone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneVerified"
          component={VerifiedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ClaimScreen"
          component={ClaimAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmDetail"
          component={ConfirmDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterDetail"
          component={EnterDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiscoverFilter"
          component={DiscoverFilterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddFilm"
          component={AddFilmScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="UpdateFilm"
          component={UpdateFilm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTeam"
          component={AddTeamScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTeamMemberScreen"
          component={AddTeamMemberScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditDetailsScreen"
          component={EditDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAwardScreen"
          component={EditAwardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddAwardScreen"
          component={AddAwardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArchiveScreen"
          component={ArchiveBlackBookScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
