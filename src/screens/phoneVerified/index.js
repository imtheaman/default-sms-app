import {useNavigation} from '@react-navigation/native';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import Button from '../../components/Button';

const VerifiedScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <View>
        <Text style={styles.headerText}>Phone number verified</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.congratsText}>Congratulations!</Text>
        <Text style={styles.anotherText}>Your phone number is verified</Text>
      </View>
        <View>
                <Button
                  title={'Next'}
                  onPress={() => { navigation.navigate('ClaimScreen') }}
                />
              </View>
    </ImageBackground>
  );
};

export default VerifiedScreen;
