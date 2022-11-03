import { createContext } from '../createContext'
import type { UseDialogReturn } from './use-dialog'

export type DialogContext = UseDialogReturn

export const [DialogProvider, useDialogContext] = createContext<DialogContext>({
  name: 'DialogContext',
  hookName: 'useDialogContext',
  providerName: '<DialogProvider />',
})
