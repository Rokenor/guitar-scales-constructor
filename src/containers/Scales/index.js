import { useEffect, useState } from 'react';

import Select from '../../components/Select';

import getNoteSequence from '../../utils/getNoteSequence';
import getGuitarScale from '../../utils/getGuitarScale';

import { NOTE_SEQUENCE } from '../../constants/common';

import { ScalesWrapper, ScalesHeader, ScalesBlock, ScalesTitle, ScalesTuning } from './scales-styled';
import getGuitarTuning from '../../utils/getGuitarTuning';


function Scales() {
  const [activeNote, setActiveNote] = useState('E');
  const [activeMode, setActiveMode] = useState('normal');

  const [currentTuning, setCurrentTuning] = useState('');

  const handleChooseNote = (e) => {
    setActiveNote(e.target.value);
  }

  const handleChooseMode = (e) => {
    setActiveMode(e.target.value);
  }

  useEffect(() => {
    console.log('activeNote', activeNote);
    console.log(getGuitarScale(activeNote, activeMode));
    setCurrentTuning(getGuitarTuning(activeNote, activeMode, 'text'));
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
    </ScalesWrapper>
  );
}

export default Scales;
