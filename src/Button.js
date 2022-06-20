import './Button.css';

function Button( { children, onClick, color = 'blue' } ) {
  const classNames = `Button ${color}`;
  return (
  <button classNames={classNames} onClick={onClick}>
    {children}
    </button>
  );
};


export default Button;