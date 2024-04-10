import { Text, View } from "react-native";
import {
  HomeProps,
  ProductPhotographyProps,
} from "../../../routes/types/approutes/appscreen";

import { openModal } from "./service";
import { ValidModal } from "../../../components/modal/ValidModal";
import { teste } from "../../../utils/messages";
import { ModalSecondary } from "../../../components/modal/ModalSecondary";
import { Container } from "../../../components/global";
import { useState } from "react";

export const Modalexample = ({
  navigation,
  route,
}: ProductPhotographyProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<0 | 1 | 2 | 3>();
  const [modalTypeTeste, setModalTypeTeste] = useState<0 | 1 | 2 | 3 | 4>();
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Container>
      <ValidModal
        {...{
          isOpen,
          modalType,
          messages: teste,
          openModal: () => openModal({ isOpen, setIsOpen }),
          setLoading,
          handleNavigate: () => null,
        }}
      />
      <ModalSecondary
        {...{
          isOpen,
          modalType: modalTypeTeste,
          messages: teste,
          openModal: () => openModal({ isOpen, setIsOpen }),
          setLoading: setLoadingCreate,
          handleNavigate: () => navigation.navigate("Home"),
        }}
      />
    </Container>
  );
};
