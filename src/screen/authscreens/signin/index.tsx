import { useState } from "react";
import { View, Text } from "react-native";
import { SigninProps } from "../../../routes/types/authroutes/authscreen";
import { Container, CustomScrollView, Form, FormKeyboardAvoidingView } from "../../../components/global";
import { CustomFormInput } from "../../../components/input/CustomFormInput";
import CustomFormButton from "../../../components/CustomFormButton";

export const Signin = ({ navigation }: SigninProps) => {
  const [signinLoading, setSigninLoading] = useState<boolean>(false);
  const [DFNOME, setDFNOME] = useState<string>("");
  const [DFSENHA, setDFSENHA] = useState<string>("");
 
  return (
    <Container>
      <FormKeyboardAvoidingView>
        <Form>
          <CustomScrollView>
            {/* <CustomLogoApp /> */}
            <CustomFormInput
              type="USERS"
              placeholder="Tanqueiro"
              value={DFNOME}
              onChangeText={setDFNOME}
            />
            <CustomFormInput
              type="SECRET"
              placeholder="Senha"
              secureTextEntry
              value={DFSENHA}
              onChangeText={setDFSENHA}
            />
            {/* <CustomKeepConected
              onChangeState={setKeepConected}
              value={keepConected}
            /> */}
            <View style={{ marginTop: 30 }}>
              <CustomFormButton
                title="Entrar"
                selectColor="primary"
                onPress={() => null
                  // handleLoginUser({
                  //   DFLOGIN,
                  //   DFSENHA,
                  //   setModal,
                  //   keepConected,
                  //   setSigninLoading,
                  //   loadingExistTanker,
                  // })
                }
                loading={signinLoading}
                enabled={!signinLoading}
              />
              <CustomFormButton
                title=" Validar Vendendor"
                selectColor="secondary"
                onPress={() => null}
              />
            </View>
          </CustomScrollView>
        </Form>
      </FormKeyboardAvoidingView>
      {/* <ValidAuthenticationModalMessages
        {...{
          isOpen,
          modalType,
          openModal: () => setModal({ isOpen: false, modalType: 0 }),
          messages: message,
          setLoading: () => null,
          handleNavigate: () => handleValidToken(),
          buttonName: ["Corrigir", "Prosseguir"],
        }}
      /> */}
    </Container>
  );
};