import { useEffect, useState } from 'react';

import Select from '../../components/Select';

import getNoteSequence from '../../utils/getNoteSequence';
import getGuitarScale from '../../utils/getGuitarScale';
import getGuitarTuning from '../../utils/getGuitarTuning';

import { GUITAR_FRETS, NOTE_SEQUENCE } from '../../constants/common';

import { ScalesWrapper, ScalesHeader, ScalesBlock, ScalesTitle, ScalesTuning, ScalesGrid, ScalesGridItem } from './scales-styled';

function Scales() {
  const [activeNote, setActiveNote] = useState('E');
  const [activeMode, setActiveMode] = useState('normal');
  const [currentTuning, setCurrentTuning] = useState('');
  const [currentGrid, setCurrentGrid] = useState([]);

  const handleChooseNote = (e) => {
    setActiveNote(e.target.value);
  }

  const handleChooseMode = (e) => {
    setActiveMode(e.target.value);
  }

  useEffect(() => {
    setCurrentTuning(getGuitarTuning(activeNote, activeMode, 'text'));
  }, [activeNote, activeMode])

  useEffect(() => {
    setCurrentGrid(getGuitarScale(activeNote, activeMode));
    console.log(currentGrid);
  }, [activeNote, activeMode])

  return (
    <ScalesWrapper>
      <ScalesHeader>Guitar Scales</ScalesHeader>
      <ScalesBlock>
        <ScalesTitle>Note:</ScalesTitle>
        <Select placeholder='Choose note' selected={activeNote} options={NOTE_SEQUENCE} onChange={handleChooseNote} />
      </ScalesBlock>
      <ScalesBlock>
        <ScalesTitle>Mode:</ScalesTitle>
        <Select placeholder='Choose mode' selected={activeMode} options={['normal', 'drop']} onChange={handleChooseMode} />
      </ScalesBlock>
      <ScalesBlock>
        <ScalesTitle>Tuning:</ScalesTitle>
        <ScalesTuning>{currentTuning}</ScalesTuning>
      </ScalesBlock>
      <ScalesBlock>
        <ScalesTitle>Scale:</ScalesTitle>
        <ScalesGrid>
          {GUITAR_FRETS.map(item => {
            return <ScalesGridItem>{item}</ScalesGridItem>
          })}
          {currentGrid && currentGrid.map(gridLine => {
            return <>
              {gridLine[0].map(item => {
                return <ScalesGridItem>{item}</ScalesGridItem>
              })}
            </>
          })}
        </ScalesGrid>
      </ScalesBlock>
    </ScalesWrapper>
  );
}

export default Scales;
