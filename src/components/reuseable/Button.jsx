const Button = ({ title, textColor, borderColor, bgColor, iconTitle }) => {
  return (
    <button
      style={{
        color: `${textColor}`,
        border: `1px solid ${borderColor}`,
        backgroundColor: `${bgColor}`,
      }}
      className="  px-5 py-3 rounded-xl flex items-center w-max"
    >
      <span className=" mr-2">{iconTitle}</span>
      <span className=" font-medium">{title}</span>
    </button>
  );
};

export default Button;
