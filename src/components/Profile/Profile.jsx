import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Image,
  UserName,
  ProfileDescription,
  StatsList,
  StatsListItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <Image src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>

      <StatsList>
        <StatsListItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsListItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};