/* eslint-disable @typescript-eslint/no-unused-vars */
import permission, { request } from 'react-native-permissions';

import { version } from './returnApiLevel';

const requestNearbyDevices = async () => {
  try {
    if (version >= 32) {
      const NEARBY_WIFI_DEVICES = await permission.request(
        'android.permission.NEARBY_WIFI_DEVICES',
      );
      const BLUETOOTH_CONNECT = await permission.request(
        'android.permission.BLUETOOTH_CONNECT',
      );
      const BLUETOOTH_SCAN = await permission.request(
        'android.permission.BLUETOOTH_SCAN',
      );
      const BLUETOOTH_ADVERTISE = await permission.request(
        'android.permission.BLUETOOTH_ADVERTISE',
      );
      if (
        NEARBY_WIFI_DEVICES === 'granted' ||
        NEARBY_WIFI_DEVICES === 'unavailable'
      ) {
        return true;
      }
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

export { requestNearbyDevices };
