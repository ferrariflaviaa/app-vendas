import { Text, View } from "react-native";
import { HomeProps, ProductPhotographyProps } from "../../../routes/types/approutes/appscreen";
import { Container, Content } from "../../../components/global";
import { ScrollView } from "react-native";
import { CustomListOptions } from "./styles";
import { CustomButtonOption } from "../../../components/CustomButtonOption";
import { NetInfoCellularGeneration } from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { handleNavigatePhotography } from "./service";

export const ProductPhotography = ({navigation, route}: ProductPhotographyProps) => {
  const [loading, setLoading] = useState<boolean>(true);


  return (
    <Container>
     <Text>Teste</Text>
    </Container>
  );
};
