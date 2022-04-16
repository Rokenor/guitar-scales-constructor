import { useEffect, useState, Fragment } from "react";

import Select from "../../components/Select";

import getGuitarTuning from "../../utils/getGuitarTuning";
import getGuitarScale from "../../utils/getGuitarScale";

import {
  GUITAR_FRETS,
  NOTE_SEQUENCE,
  SCALE_TYPES,
  TUNING_MODE
} from "../../constants/common";

import {
  ScalesWrapper,
  ScalesHeader,
  ScalesBlock,
  ScalesInnerBlock,
  ScalesTitle,
  ScalesTuning,
  ScalesGrid,
  ScalesGridItem,
  ScalesGridItemText
} from "./scales-styled";
import getScale from "../../utils/getScale";

function Scales() {
  const [activeNote, setActiveNote] = useState("E");
  const [activeType, setActiveType] = useState("major");
  const [activeMode, setActiveMode] = useState("normal");

  const [currentTuning, setCurrentTuning] = useState("");
  const [currentScale, setCurrentScale] = useState("");
  const [currentGrid, setCurrentGrid] = useState([]);

  const handleChooseNote = (e) => {
    setActiveNote(e.target.value);
  };

  const handleChooseType = (e) => {
    setActiveType(e.target.value);
  };

  const handleChooseMode = (e) => {
    setActiveMode(e.target.value);
  };

  useEffect(() => {
    setCurrentTuning(getGuitarTuning(activeNote, activeMode, "text"));
    setCurrentScale(getScale(activeNote, activeType, "text"));
  }, [activeNote, activeMode, activeType]);

  useEffect(() => {
    setCurrentGrid(getGuitarScale(activeNote, activeType, activeMode));
  }, [activeNote, activeMode, activeType]);

  return (
    <ScalesWrapper>
      <ScalesHeader>Guitar Scales</ScalesHeader>
      <ScalesBlock>
        <ScalesInnerBlock sizeRate={2}>
          <ScalesTitle>Note:</ScalesTitle>
        </ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={2}>
          <Select
            placeholder="Choose note"
            selected={activeNote}
            options={NOTE_SEQUENCE}
            onChange={handleChooseNote}
          />
        </ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={6}>
          <Select
            placeholder="Choose type"
            selected={activeType}
            options={SCALE_TYPES}
            onChange={handleChooseType}
          />
        </ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={1}></ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={2}>
          <ScalesTitle>Scale:</ScalesTitle>
        </ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={8}>
          <ScalesTuning>{currentScale}</ScalesTuning>
        </ScalesInnerBlock>
      </ScalesBlock>
      <ScalesBlock>
        <ScalesInnerBlock sizeRate={2}>
          <ScalesTitle>Mode:</ScalesTitle>
        </ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={3}>
          <Select
            placeholder="Choose mode"
            selected={activeMode}
            options={TUNING_MODE}
            onChange={handleChooseMode}
          />
        </ScalesInnerBlock>
      </ScalesBlock>
      <ScalesBlock>
        <ScalesInnerBlock sizeRate={2}>
          <ScalesTitle>Tuning:</ScalesTitle>
        </ScalesInnerBlock>
        <ScalesInnerBlock sizeRate={6}>
          <ScalesTuning>{currentTuning}</ScalesTuning>
        </ScalesInnerBlock>
      </ScalesBlock>
      <ScalesBlock>
        <ScalesInnerBlock sizeRate={2}>
          <ScalesTitle>Guitar Fretboard:</ScalesTitle>
        </ScalesInnerBlock>
      </ScalesBlock>
      <ScalesBlock>
        <ScalesGrid>
          {currentGrid &&
            currentGrid.map((gridLine, index) => {
              const key = `${index}`;
              return (
                <Fragment key={key}>
                  {gridLine.map((item) => {
                    const isItemValue = item.value !== " ";
                    return (
                      <ScalesGridItem key={item.id} className={item.type}>
                        {isItemValue && (
                          <ScalesGridItemText>{item.value}</ScalesGridItemText>
                        )}
                      </ScalesGridItem>
                    );
                  })}
                </Fragment>
              );
            })}
          {GUITAR_FRETS.map((item, index) => {
            const key = `${index}`;
            return <ScalesGridItem key={key}>{item}</ScalesGridItem>;
          })}
        </ScalesGrid>
      </ScalesBlock>
    </ScalesWrapper>
  );
}

export default Scales;
