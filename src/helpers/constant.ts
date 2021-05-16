export type ColorPalette = 'nero' | 'white' | 'nobel' | 'zambesi' | 'whisper' | 'whiteSmoke' | 'cyanBlue' | 'navyBlue' | 'solitude' | 'aliceBlue' | 'persimmon' | 'tenneOrange' | 'chardon' | 'seashell' | 'deepSea' | 'swansDown' | 'redOrange' | 'persianRed' | 'mistyRose' | 'mustard' | 'chinaIvory' | 'amber' | 'transparent';
export type Sizes = 'xs' | 'base' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export enum CHESS_PIECES {
  PAWN = 'p',
  BISHOP = 'b',
  KNIGHT = 'n',
  ROOK = 'r',
  QUEEN = 'q',
  KING = 'k'
}

export enum PLAYERS {
  WHITE = 'w',
  BLACK = 'b'
}

export const initialPos: {[args: string]: string} = Object.freeze({
  [cols[0] + 1]: PLAYERS.WHITE + CHESS_PIECES.ROOK,
  [cols[1] + 1]: PLAYERS.WHITE + CHESS_PIECES.KNIGHT,
  [cols[2] + 1]: PLAYERS.WHITE + CHESS_PIECES.BISHOP,
  [cols[3] + 1]: PLAYERS.WHITE + CHESS_PIECES.QUEEN,
  [cols[4] + 1]: PLAYERS.WHITE + CHESS_PIECES.KING,
  [cols[5] + 1]: PLAYERS.WHITE + CHESS_PIECES.BISHOP,
  [cols[6] + 1]: PLAYERS.WHITE + CHESS_PIECES.KNIGHT,
  [cols[7] + 1]: PLAYERS.WHITE + CHESS_PIECES.ROOK,
  [cols[0] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[1] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[2] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[3] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[4] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[5] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[6] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[7] + 2]: PLAYERS.WHITE + CHESS_PIECES.PAWN,
  [cols[0] + 8]: PLAYERS.BLACK + CHESS_PIECES.ROOK,
  [cols[1] + 8]: PLAYERS.BLACK + CHESS_PIECES.KNIGHT,
  [cols[2] + 8]: PLAYERS.BLACK + CHESS_PIECES.BISHOP,
  [cols[3] + 8]: PLAYERS.BLACK + CHESS_PIECES.QUEEN,
  [cols[4] + 8]: PLAYERS.BLACK + CHESS_PIECES.KING,
  [cols[5] + 8]: PLAYERS.BLACK + CHESS_PIECES.BISHOP,
  [cols[6] + 8]: PLAYERS.BLACK + CHESS_PIECES.KNIGHT,
  [cols[7] + 8]: PLAYERS.BLACK + CHESS_PIECES.ROOK,
  [cols[0] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[1] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[2] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[3] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[4] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[5] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[6] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
  [cols[7] + 7]: PLAYERS.BLACK + CHESS_PIECES.PAWN,
});
