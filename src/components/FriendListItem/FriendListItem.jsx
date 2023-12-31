import PropTypes from 'prop-types';
import { Avatar, Friend, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Friend>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};