import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoSVG from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "./../NewTransactionModal/index";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSVG} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton> Nova transaçâo</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

// dialog root em volta de todo o modal, o trigger para abri o modal, o portal para poder abrir o modal em qualquer outro lugar da aplicação
// overlay para criar um fundo preto e o content é todo conteúdo do modal
