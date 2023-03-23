import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoSVG from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './../NewTransactionModal/index'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSVG} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transaçâo</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
