import React from 'react';
import { PlayerType } from '../../types/PlayerType';
import Modal from '../../components/ui/Modal';
import Player from '../../components/Player';
import Board from '../../components/Board';
import Info from '../../components/Info';
import useCells from '../../hooks/useCells';
import useWinner from '../../hooks/useWinner';
import useReusableState from '../../hooks/useReusableState';
import useModal from '../../hooks/useModal';
import './Game.scss';

function Game() {
    const [turn, setTurn, resetTurn] = useReusableState(PlayerType.X);
    const { cells, setCells, resetCells } = useCells();
    const { winner, resetWinner } = useWinner(cells, turn);
    const { modalActive, setModalActive } = useModal([winner], () => {
        return winner === PlayerType.X || winner === PlayerType.O;
    });

    const onReset = () => {
        resetTurn();
        resetCells();
        resetWinner();
    };

    const onModalClose = () => {
        onReset();
        setModalActive(false);
    };

    return (
      <>
          <Modal active={modalActive} onClose={onModalClose}>
              Winner:
              <Player player={winner} />
          </Modal>
          <div className="Game">
              <Board
                turn={turn}
                setTurn={setTurn}
                cells={cells}
                setCells={setCells}
              />
              <Info
                turn={turn}
                onReset={onReset}
              />
          </div>
      </>
    );
}

export default Game;
