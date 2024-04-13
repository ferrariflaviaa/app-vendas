import {
  ProductPhotographyProps,
} from "../../../routes/types/approutes/appscreen";
import {
  Container,
  Content,
  
} from "../../../components/global";

import { useEffect, useRef, useState } from "react";
import CustomFormButton, {
  ICustomFormButtonRef,
} from "../../../components/CustomFormButton";
import { Vendedor } from "../../../types/vendedor";


export const QrCodeExample = ({
  navigation,
  route,
}: ProductPhotographyProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cpfCnpj, setCpfCnpj] = useState<string>("11694028607");
  const [seller, setSeller] = useState<Vendedor>();
  // const [images, setImages] = useState<string[]>([]);
  const [imagesProblemReport, setImagesProblemReport] = useState<string[]>([]);
  const ref = useRef<ICustomFormButtonRef>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<0 | 1 | 2 | 3>();

 
  useEffect(() => {
    console.log(imagesProblemReport);
  }, [imagesProblemReport]);

  return (
    <Container>
      <Content>

      </Content>
    </Container>
  );
};
