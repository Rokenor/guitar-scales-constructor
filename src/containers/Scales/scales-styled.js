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

export const ScalesTitle = styled.h5`
  margin: 0;
`;

export const ScalesTuning = styled.p`
  margin: 10px;
`;

export const ScalesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(25, 30px);
  grid-template-rows: repeat(6, 30px);
`;


export const ScalesGridItem = styled.div`
  display: flex;
  justify-content: center;

  font-size: 14px;
  line-height: 30px;

  border: 1px solid #f0f0f0;
  border-radius: 5px;
`;