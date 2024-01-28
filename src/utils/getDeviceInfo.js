import { Platform } from 'react-native';
import UniqueIdentifier from 'rn-unique-identifier';

export default async function getDeviceInfo() {
  function getOs() {
    const characters = Platform.OS.split('')
    characters[0] = characters[0].toUpperCase()
    return characters.join('')
  }
  return {
    unique_device_id: UniqueIdentifier?.getPersistentIdentifier(),
    device_os: getOs()
  };
}
