import React from 'react';

type CurrentMove = {movement: string, piece: string | undefined}

export interface IProps{
  playerCurrentMove?: CurrentMove[];
  opponentCurrentMove?: CurrentMove[];
}

const MoveHistory = ({ playerCurrentMove }: IProps) => {
  const historyRef: any = React.useRef();
  React.useEffect(() => {
    historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [playerCurrentMove]);
  return (
    <div className='w-full h-full flex-1 flex flex-col border border-whisper overflow-auto relative'>
      <div className='absolute w-px h-full bg-whisper transform inset-x-1/2' />
      <div className='w-full flex flex-row text-center text-zambesi text-sm sticky top-0 shadow-bottom bg-whiteSmoke'>
        <div className='flex-1 py-4 font-bold'>You</div>
        <div className='flex-1 py-4 font-bold'>Opponent</div>
      </div>
      <div
        ref={historyRef}
        className='w-full h-full flex-1 flex-col overflow-y-scroll scrolling-touch'
      >
        {playerCurrentMove && playerCurrentMove?.length > 0 && playerCurrentMove?.map((detail: CurrentMove, idx: number) => {
          return (
            <div
              key={idx}
              className={`w-full text-sm text-zambesi ${idx % 2 == 0 ? 'bg-white' : ''}`}
            >
              <div className='w-full flex flex-row text-sm items-center'>
                <p className='text-sm text-center py-2 w-5 bg-nobel text-white'>{idx + 1}</p>
                <div className='text-zambesi flex-1 px-2 py-2'>{detail.piece}-{detail.movement}</div>
                <div className='text-zambesi flex-1 px-2 py-2'>Pass</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoveHistory;
