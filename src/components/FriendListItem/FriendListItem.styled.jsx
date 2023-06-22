import styled from '@emotion/styled';

const setBgColor = props => {
  return props.isOnline ? 'green' : 'red';
};

export const Friend = styled.li`
  width: 300px;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  font-size: 24px;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;
