export function setupBoard(cols: any, initialPos: any) {
  const tempBoardDetail: any[] = [];
  const board = cols.map((_: any, colIdx: number) => {
    const rows: any = [];
    for (let i = 0; i < cols.length; i++) {
      rows.push(i + colIdx);
    }
    return (
      rows.map((row: any, rowIdx: number) => {
        const pos = cols[rowIdx] + Math.abs(colIdx - cols.length);
        const isBlackBox = row % 2 !== 0;
        const piece = initialPos[pos];
        tempBoardDetail.push({ pos, piece });
        return {
          isBlackBox,
          pos,
          piece
        };
      })
    );
  });
  return board;
}

// IMPORTANT NOTE: GENERATING MOVE PHASE
/*
  * create pattern for every pieces
  * validate pattern
  * generate possible move
  * generate recomend move
  * moving
  * store moveHistory to db by websocket
*/

// VALIDATION TERMS AND CONDITION DICTIONARY
// (1). opponentPos:
/// /// a. means opponent's piece that is possible to eat.
// (2). blockingPiece:
/// /// a. means the piece that is on the recomend move.
// (3). isBlocked: AT THE FIRST CLICK
/// /// a. means piece cannot step over the blockingPiece. (one of recomend move will be right before the blockingPiece or at the blockingPiece if it's the opponent's)
/// /// b. if isBlocked caused by opponent's piece, player's piece can move to the opponentPos.
// (4). isChecked: AT THE FIRST CLICK
/// /// a. king need to move
/// /// b. need to block the check
/// /// c. if opponent threat the king with knight, another pieces cannot block it because knight can step over the piece
// (5). isCheckMate: AT THE FIRST CLICK
/// /// a. !isAnyPossibleMove
// (6). isIllegalMove: AT THE FIRST CLICK
/// /// a. means player willing to move the piece that block the check
/// /// b. means player move the king to the isChecked box
// (6). isAnyPossibleMove: AT THE FIRST CLICK
/// /// a. every move for the remaining pieces
// (7). safePlace:
/// /// a. means all boxes on the first horizontal
// (8). initialPos:
/// /// a. means first position of the game
// (9). recomend move:
/// /// a. every move for the selectedPiece that will send to the board component
// (10). box-travel:
/// /// example: v-2-box-travel-inc
/// /// a. prefix v-n, h-n and d-n. n means step-total
/// /// b. suffix inc and dcr
/// /// c. inc and dcr is not absolute, depends on player or opponent' perspective.
/// /// d. vertical n add or subtract board number notation, constraint: 0 < n < 8
/// /// e. horizontal n add or subtract board letter notation that stored in cols: Array, cols[n]. constraint: 0 < n < 8
/// /// f. diagonal n add or subtract board rows index, constraint:
// (11). knight-move-patterns
/// /// a. v-2-box-travel-inc and (h-1-box-travel-inc or h-1-box-travel-dcr)
/// /// b. v-2-box-travel-dec and (h-1-box-travel-inc or h-1-box-travel-dcr)
/// /// a. h-2-box-travel-inc and (v-1-box-travel-inc or v-1-box-travel-dcr)
/// /// a. h-2-box-travel-dec and (v-1-box-travel-inc or v-1-box-travel-dcr)
// (12). select-box:
/// /// a. box status at first-click or first element of clickedBox
// (13). selected-box:
/// /// a. box status on second-click, recomend move already generated, ready to generate move.

// ITTERATE ALL PIECES THAT IS POSSIBLE TO MOVE & RECOMEND MOVE
// (1). Pawn move:
/// /// a. pawn can move vertically (1 or 2 box-steps).
/// /// b. pawn can only move 2-box-steps on its initialPos
/// /// c. pawn on v-4-box-travel-inc, has a special move to eat opponent's pawn that if opponent is on the next horizontal-box (from a to h) with v-2-box-travel-inc at once (2 box-steps).
/// /// d. pawn can move diagonally if there is opponent's piece on the next horizontal-box (vertical-box -n for PLAYER.BLACK pawn, vertical-box +n for PLAYER.WHITE pawn, constraint: n = 1)
/// /// e. pawn special move is diagonal move to the horizontal-box of opponentPos (vertical-box -n for PLAYER.BLACK pawn, vertical-box +n for PLAYER.WHITE pawn), constraint: n = 1.
/// /// f. pawn can be promoted as a Queen if it has been reached opponent's safe place.
/// /// g. pawn cannot step over the piece (refer to isBlocked)
// (2). Rook move:
/// /// a. rook can only move vertically or horizontally (vertical-box and horizontal-box (-) or (+) n, constraint: 0 < n < 8)
/// /// b. rook cannot step over the piece (refer to isBlocked)
// (3). Knight move:
/// /// a. knight-move-pattern is special, it is often being called as the letter L.
/// /// b. knight can step over the piece (no need isBlocked validation for knight)
/// /// c. knight cannot move to player's blockingPiece
// (4). Bishop move:
/// /// a. bishop can only move diagonally
/// /// b. bishop cannot step over the piece (refer to isBlocked)
// (5). Queen move:
/// /// a. queen can do every piece's moves but knight's.
/// /// b. queen cannot step over the piece
// (6). King move:
/// /// a. king can only move 1 step horizontal, vertical or diagonal, inc or dec
/// /// b. king cannot move to the isChecked box (refer to isIllegalMove)
// (7). castle:
/// /// a. move the king to the letter notation b or g on the safePlace
/// /// b. if castle to b box, rook a will move to c. if castle to g box, rook h will move to f
/// /// c. is the recomend move of king not rook
/// /// a. can do if !isChecked
/// /// b. can do if !isIllegalMove
