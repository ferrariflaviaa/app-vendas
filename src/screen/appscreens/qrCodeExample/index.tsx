import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import { insertTbFornecedor } from "../../../database/TBFORNECEDOR/INSERT/insertTbFornecedor";
import { getDBConnection } from "../../../database/connection";

export const QRCodeExample = () => {
  const cameraRef = useRef(null);


  const isValidQRStructure = (data) => {
    return (
      data &&
      typeof data === "object" &&
      "data" in data &&
      Array.isArray(data.data) &&
      data.data.every(
        (item) =>
          typeof item === "object" &&
          "DFNOME" in item &&
          "DFLOGIN" in item &&
          "DFSENHA" in item &&
          "DFIDATANASCIMENTO" in item &&
          "DFEMAIL" in item &&
          "DFTELEFONE" in item &&
          "DFCPFCNPJ" in item &&
          typeof item.DFNOME === "string" &&
          typeof item.DFLOGIN === "string" &&
          typeof item.DFSENHA === "string" && 
          typeof item.DFIDATANASCIMENTO === "string" && 
          typeof item.DFEMAIL === "string" && 
          typeof item.DFTELEFONE === "string" && 
          typeof item.DFCPFCNPJ === "string" 
      )
    );
  };


  const device = useCameraDevice("back"); 
  if (device == null) {
    return <View>Erro: Câmera não encontrada.</View>;
  }

  const teste = async(data) => {
    const db = await getDBConnection();
    insertTbFornecedor({db, data})
  }

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes: any) => {
      let jsonString: any;
      const qrData = codes[0].value;
      const precisaReplace =
        qrData.includes("&#34;") || qrData.includes("&#39;");

      if (precisaReplace) {
        jsonString = qrData.replace(/&#34;|&#39;/g, '"');
      } else {
        jsonString = qrData;
      }
      const qrCode: any = JSON.parse(jsonString);
      if (qrCode.data.length > 0) {
        try {
          if (isValidQRStructure(qrCode)) {
           
            teste(qrCode);
            // insertDataIntoDatabase(decodedData);
          } else {
            console.log("QR Code inválido:", qrCode);
          }
        } catch (error) {
          console.log("Erro ao decodificar QR Code:", error);
        }
      }
    },
  });

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.preview}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

