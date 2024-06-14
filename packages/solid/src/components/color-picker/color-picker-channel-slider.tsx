import type { ChannelProps } from '@zag-js/color-picker'
import { mergeProps } from '@zag-js/solid'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLArkProps, ark } from '../factory'
import { ColorPickerChannelPropsProvider } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'
import { useColorPickerFormatPropsContext } from './use-color-picker-format-context'

export interface ColorPickerChannelSliderProps extends Assign<HTMLArkProps<'div'>, ChannelProps> {}

export const ColorPickerChannelSlider = (props: ColorPickerChannelSliderProps) => {
  const [channelProps, localProps] = createSplitProps<ChannelProps>()(props, [
    'channel',
    'orientation',
  ])

  const api = useColorPickerContext()

  const formatProps = useColorPickerFormatPropsContext()
  const channelSliderProps = mergeProps(channelProps, formatProps)

  const mergedProps = mergeProps(() => api().getChannelSliderProps(channelSliderProps), localProps)

  return (
    <ColorPickerChannelPropsProvider value={channelProps}>
      <ark.div {...mergedProps} />
    </ColorPickerChannelPropsProvider>
  )
}
