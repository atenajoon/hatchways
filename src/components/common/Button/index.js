const Button = ({ className, onClick, btnTag }) => {
  return (
    <button className={className} onClick={onClick}>
      {btnTag}
    </button>
  );
};

export default Button;
