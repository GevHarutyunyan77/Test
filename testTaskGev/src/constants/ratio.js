import {Dimensions} from 'react-native';
let width = Dimensions.get('window').width;

export const ratio = width / 392.72727272727275;

export const Size = {};

for (let i = 1; i < 700; i++) {
  Size[`size${i}`] = i * ratio > i ? i : i * ratio;
}

export const Sizes = (size) => {
  return Size[`size${size}`];
};
