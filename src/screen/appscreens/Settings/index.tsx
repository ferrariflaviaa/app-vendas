import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import { insertTbFornecedor } from "../../../database/TBFORNECEDOR/INSERT/insertTbFornecedor";
import { getDBConnection } from "../../../database/connection";
import { SettingsProps } from "../../../routes/types/approutes/appscreen";

export const Settings = ({navigation, route}:SettingsProps) => {
 

  return (
   <></>
  )
};



