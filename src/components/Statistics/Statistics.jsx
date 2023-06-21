import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import { List, Section, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {{ title } && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
