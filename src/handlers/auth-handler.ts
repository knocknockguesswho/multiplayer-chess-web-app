import { PLAYERS } from 'Helpers/constant';

export class AuthHandler {
  public static usePlayer() {
    const checkPlayerSide = () => {
      return PLAYERS.WHITE; // hardcoded
    };
    const playerSide = checkPlayerSide();
    return { playerSide };
  }
}
