import React from 'react';
import Game from 'Components/templates/game';

const GameByRoomId = () => {
  const [el, setEl] = React.useState(<></>);
  React.useEffect(() => {
    if (process.browser) {
      setEl(<Game />);
    }
  }, []);
  return el;
};

export default GameByRoomId;
