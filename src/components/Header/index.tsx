import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoSVG from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSVG} />
        <NewTransactionButton> Nova transaçâo</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
