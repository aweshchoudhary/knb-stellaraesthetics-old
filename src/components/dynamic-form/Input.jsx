const Input = ({ input }) => {
  return !input.type === "textarea" ? (
    <input
      type={input.type}
      name={input.name}
      id={input.name}
      placeholder={input.placeholder}
    />
  ) : (
    <textarea
      name={input.name}
      id={input.name}
      placeholder={input.placeholder}
    />
  );
};

export default Input;
