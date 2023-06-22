import PropTypes from 'prop-types';
import { Row } from './Transaction.styled';

export const Transaction = ({type, amount, currency}) => {
  return (
    <Row>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Row>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};