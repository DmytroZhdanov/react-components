import { Container } from 'components/App/App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from '../../user.json';
import data from '../../data.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};
