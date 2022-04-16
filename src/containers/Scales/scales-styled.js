import styled from "styled-components";

export const ScalesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScalesHeader = styled.h1``;

export const ScalesBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
`;

export const ScalesInnerBlock = styled.div`
  display: flex;
  min-width: ${(props) => {
    return `${24 * props.sizeRate}px`;
  }};
`;

export const ScalesTitle = styled.h5`
  margin: 0;
`;

export const ScalesTuning = styled.p`
  margin: 10px;
`;

export const ScalesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 50px);
  grid-template-rows: repeat(6, 30px);
`;

export const ScalesGridItem = styled.div`
  display: flex;
  justify-content: center;

  font-size: 14px;
  line-height: 30px;

  min-height: 30px;

  &.higher {
    &_start {
      position: relative;
      margin-right: 2px;

      &:after {
        content: "";
        position: absolute;
        right: 0px;
        top: 50%;
        height: 50%;
        border-right: 3px solid #000;
      }
    }
    &_single {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0;
        height: 50%;
        width: calc(100% - 2px);
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
    &_double {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0;
        height: 50%;
        width: calc(100% - 2px);
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
    &_default {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0;
        height: 50%;
        width: calc(100% - 2px);
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
  }
  &.dotted {
    &_start {
      border-right: 3px solid #000;
      margin-right: 2px;
    }
    &_single {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }
    }
    &_singletop {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: calc(50% - 7px);
        bottom: -7px;
        height: 14px;
        width: 14px;
        background: #000;

        border-radius: 50%;
      }
    }
    &_doubletop {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: calc(30% - 7px);
        bottom: -7px;
        height: 14px;
        width: 14px;
        background: #000;

        border-radius: 50%;
      }
    }
    &_doublebottom {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        right: calc(30% - 7px);
        top: -7px;
        height: 14px;
        width: 14px;
        background: #000;

        border-radius: 50%;
      }
    }
    &_default {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }
    }
  }
  &.lower {
    &_start {
      position: relative;
      margin-right: 2px;

      &:after {
        content: "";
        position: absolute;
        right: 0px;
        top: 0;
        height: 50%;
        border-right: 3px solid #000;
      }
    }
    &_single {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0;
        height: 50%;
        width: calc(100% - 2px);
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
    &_double {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0;
        height: 50%;
        width: calc(100% - 2px);
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
    &_default {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0;
        height: 50%;
        width: calc(100% - 2px);
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    }
  }
  &.default {
    &_start {
      border-right: 3px solid #000;
      margin-right: 2px;
    }
    &_single {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }
    }
    &_double {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }
    }
    &_default {
      position: relative;
      border-left: 1px solid #000;
      border-right: 1px solid #000;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: calc(50% - 2px);

        height: 1px;
        width: 100%;

        border-bottom: 2px solid #000;
      }
    }
  }
`;

export const ScalesGridItemText = styled.span`
  display: flex;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #ccc;

  width: 20px;
  height: 20px;

  justify-content: center;
  align-items: center;
  align-self: center;

  z-index: 1;
  font-weight: 500;

  opacity: 0.9;

  user-select: none;
`;
