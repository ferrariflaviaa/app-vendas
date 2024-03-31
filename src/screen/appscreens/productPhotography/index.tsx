import { Text, View } from "react-native";
import {
  HomeProps,
  ProductPhotographyProps,
} from "../../../routes/types/approutes/appscreen";
import {
  Center,
  Container,
  Content,
  CustomScrollView,
} from "../../../components/global";
import { ScrollView } from "react-native";
import {
  ContainerButton,
  ContainerView,
  CustomListOptions,
  TextButton,
} from "./styles";
import { CustomButtonOption } from "../../../components/CustomButtonOption";
import { NetInfoCellularGeneration } from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import User from "../../../assets/user.svg";
import { CustomInput } from "../../../components/input/CustomInput";
import CustomFormButton, {
  ICustomFormButtonRef,
} from "../../../components/CustomFormButton";
import { handleChecks, handleSelectImage } from "./service";
import { Vendedor } from "../../../types/vendedor";
import { CustomInformSeller } from "../../../components/CustomInformSeller";
import { CustomSelectedImage } from "../../../components/CustomSelectedImage";

export const ProductPhotography = ({
  navigation,
  route,
}: ProductPhotographyProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cpfCnpj, setCpfCnpj] = useState<string>("11694028607");
  const [seller, setSeller] = useState<Vendedor>();
  // const [images, setImages] = useState<string[]>([]);
  const [imagesProblemReport, setImagesProblemReport] = useState<string[]>([]);
  const ref = useRef<ICustomFormButtonRef>(null);

  const dataSelectImage = {
    imagesProblemReport,
    setImagesProblemReport,
  };

  useEffect(() => {
    console.log(imagesProblemReport);
  }, [imagesProblemReport]);

  return (
    <Container>
      <Content>
        <CustomScrollView>
          <Text>Informe o CPF:</Text>
          <CustomInput
            keyboardType="numeric"
            placeholder="Informe o CPF"
            value={cpfCnpj}
            onChangeText={(text) => setCpfCnpj(text)}
          />
          <CustomFormButton
            onPress={() => handleChecks({ DFCPFCNPJ: cpfCnpj, setSeller })}
            title="Informar"
            selectColor="primary"
            loading={loading}
            ref={ref}
          />
          {seller ? (
            <View style={{ width: "100%" }}>
              <View style={{ alignItems: "center", marginTop: 20 }}>
                {imagesProblemReport.length > 0 ? (
                  <CustomSelectedImage
                    selectedImage={() => null}
                    label=""
                    images={imagesProblemReport}
                    setImages={setImagesProblemReport}
                    // iconSelect={<User />}
                  />
                ) : (
                  <User width={100} height={100} color={"black"} />
                )}

                <ContainerView>
                  <ContainerButton
                    onPress={() =>
                      handleSelectImage({
                        data: {
                          ...dataSelectImage,
                        },
                      })
                    }
                  >
                    <TextButton>Foto</TextButton>
                  </ContainerButton>
                  <ContainerButton onPress={() => null}>
                    <TextButton>Salvar</TextButton>
                  </ContainerButton>
                </ContainerView>
              </View>
              <CustomInformSeller
                {...{
                  data: {
                    CPFCNPJ: seller.DFCPFCNPJ,
                    DataNascimento: seller.DFIDATANASCIMENTO,
                    Email: seller.DFEMAIL,
                    Nome: seller.DFNOME,
                  },
                }}
              />
            </View>
          ) : (
            <></>
          )}
        </CustomScrollView>
      </Content>
    </Container>
  );
};
