import { Text, View } from "react-native";
import { HomeProps } from "../../../routes/types/approutes/appscreen";
import { Container, Content } from "../../../components/global";
import { ScrollView } from "react-native";
import { CustomListOptions } from "./styles";
import { CustomButtonOption } from "../../../components/CustomButtonOption";
import { NetInfoCellularGeneration } from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { handleNavigatePhotography, handleQrCodeExample } from "./service";

export const Home = (screen: HomeProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(false);
    }, []),
  );
  return (
    <Container>
      {loading ? (
        <Text>Carregando</Text>
      ): (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 0 }}>
        <Content>
          <CustomListOptions>
             <CustomButtonOption
              title="Fotografia produto"
              onPress={() => handleNavigatePhotography(screen)}
              enabled={true}
            /> 
             <CustomButtonOption
              title="QrCode"
              onPress={() => handleQrCodeExample(screen)}
              enabled={true}
            /> 
          </CustomListOptions>
        </Content>
      </ScrollView>
      )}
    </Container>
  );
};
