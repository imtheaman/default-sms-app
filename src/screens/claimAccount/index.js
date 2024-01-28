import {useNavigation} from '@react-navigation/native';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import Button from '../../components/Button';

const ClaimAccountScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <View>
        <Text style={styles.headerText}>Claim account</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.congratsText}>Welcome to TouchBlack</Text>
        <Text style={styles.anotherText}>Your account is ready to go!</Text>
        <Text style={styles.anotherText}>
          Please click below to claim your account
        </Text>
      </View>
         <View>
                <Button
                  title={'Claim my account'}
                  onPress={() => { navigation.navigate('EnterDetail') }}
                />
              </View>
    </ImageBackground>
  );
};

export default ClaimAccountScreen;
