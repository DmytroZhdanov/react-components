import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  margin: 0 auto 20px;
`;

export const ProfileDescription = styled.div`
  text-align: center;
  color: #aaaaaa;
  padding: 10px;
`;

export const Image = styled.img`
  width: 200px;
`;

export const UserName = styled.p`
  font-size: 24px;
  color: #0f0f0f;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;

export const StatsListItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #f0f0f0;
  border: 1px solid #dedede;
`;

export const StatsLabel = styled.span`
  color: #aaaaaa;
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
`;
