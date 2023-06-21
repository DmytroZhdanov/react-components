import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: calc(300px / 5);
  background-color: #f0f0f0;
  border: 1px solid #dedede;
`;

export const Label = styled.span`
  color: #aaaaaa;
`;

export const Percentage = styled.span`
  color: #000000;
  font-size: 24px;
`;
