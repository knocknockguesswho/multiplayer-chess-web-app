export const test = 'test';

export const textStyleFormat = (style: string) => {
  const text = 'text-';
  return text.concat(style);
};

export function getPiecesImage(piece: string) {
  return `/static/chess-themes/pieces/${piece}.png`;
}

export function getSelectedPos(box: {pos: string, piece: string}[]) {
  if (box && box[0]?.piece) {
    return box[0]?.pos || '';
  } else {
    return '';
  }
}

export function convertObjectKeyToString(obj: Object) {
  let str: string = '';
  Object.entries(obj).forEach(([key]) => str = key);
  return str;
}

export function generateInputGroup(keys: string[]) {
  const obj: any = [];
  keys.map((key: any) => obj.push({ [key]: { value: '', isError: false, errorMessage: '', type: key == 'password' ? 'password' : 'text' } }));
  return obj;
}
