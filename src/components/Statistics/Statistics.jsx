import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {/* <h2>Statistics</h2> */}
      <ul>
        <li>
          <p>
            Good: <span>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad: <span>{bad}</span>
          </p>
        </li>
        <li>
          <p>
            Total: <span>{total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback: <span>{positivePercentage}%</span>
          </p>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
