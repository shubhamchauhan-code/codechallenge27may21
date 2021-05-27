import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

const Dimension = {
  normalize: (size) => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  },
  getHeight: (percente) => {
    percente = !percente ? 100 : percente;
    return (Dimension.getWindowSize().height * percente) / 100;
  },
  getWidth: (percente) => {
    percente = !percente ? 100 : percente;
    return (Dimension.getWindowSize().width * percente) / 100;
  },

  getWindowSize: () => Dimensions.get('window'),

};

export default Dimension;
