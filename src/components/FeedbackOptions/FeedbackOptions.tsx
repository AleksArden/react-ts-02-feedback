import css from './FeedbackOptions.module.css';
type FeedbackOptionsProps = {
  options: Array<string>,
  onLeaveFeedback: (evt: React.MouseEvent<HTMLButtonElement>) => void ,
}

export const FeedbackOptions = ({ options, onLeaveFeedback }: FeedbackOptionsProps): JSX.Element => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.button}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
