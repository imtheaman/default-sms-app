import AsyncStorage from "@react-native-async-storage/async-storage";
import { CAPTURE_DEVICE } from "../api/EndPoints";
import { baseURL } from "../constant/Config";
import getDeviceInfo from "./getDeviceInfo";

const { useEffect } = require("react");

function useAppStart() {
  useEffect(() => {
    (async () => {
      if (await AsyncStorage.getItem("isDeviceRegistered")) return;

      const response = await fetch(`${baseURL}${CAPTURE_DEVICE}`, {
        method: 'POST',
        body: JSON.stringify(await getDeviceInfo())
      })
      const data = await response.json()
      data.data.success && await AsyncStorage.setItem("isDeviceRegistered")
    })()
  }, [])
}

export default useAppStart
