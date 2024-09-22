const MainItemHeader = (props) => {
  return (
    <span>
      {props.uncoloredText}
      <span style={{ color: 'rgb(251, 107, 42)' }}>{props.coloredText}</span>
    </span>
  );
};

export default MainItemHeader;
