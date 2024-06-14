import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { type HTMLArkProps, ark } from '../factory'
import { useColorPickerChannelPropsContext } from './use-color-picker-channel-props-context'
import { useColorPickerContext } from './use-color-picker-context'
import { useColorPickerFormatPropsContext } from './use-color-picker-format-context'

export type ColorPickerChannelSliderTrackBaseProps = {}
export interface ColorPickerChannelSliderTrackProps
  extends HTMLArkProps<'div'>,
    ColorPickerChannelSliderTrackBaseProps {}

export const ColorPickerChannelSliderTrack = forwardRef<
  HTMLDivElement,
  ColorPickerChannelSliderTrackProps
>((props, ref) => {
  const colorPicker = useColorPickerContext()

  const channelProps = useColorPickerChannelPropsContext()
  const formatProps = useColorPickerFormatPropsContext()
  const channelSliderProps = { ...channelProps, ...formatProps }

  const mergedProps = mergeProps(colorPicker.getChannelSliderTrackProps(channelSliderProps), props)

  return <ark.div {...mergedProps} ref={ref} />
})

ColorPickerChannelSliderTrack.displayName = 'ColorPickerChannelSliderTrack'
