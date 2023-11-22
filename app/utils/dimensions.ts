import { Dimensions, PixelRatio } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

const BASELINE_HEIGHT = 812
const BASELINE_WIDTH = 375

const BASELINE_HEIGHT_PERCENTAGE = 100 / BASELINE_HEIGHT
const BASELINE_WIDTH_PERCENTAGE = 100 / BASELINE_WIDTH

let windowDimensions: { width: number; height: number } | null = null

export const calculateResponsiveSize = (size: number, based: 'width' | 'height' = 'width') => {
  if (!windowDimensions) {
    windowDimensions = Dimensions.get('window')
  }

  const percentage = size * (based === 'height' ? BASELINE_HEIGHT_PERCENTAGE : BASELINE_WIDTH_PERCENTAGE)
  const baseValue = based === 'width' ? windowDimensions.width : windowDimensions.height

  return PixelRatio.roundToNearestPixel((baseValue * percentage) / 100)
}
