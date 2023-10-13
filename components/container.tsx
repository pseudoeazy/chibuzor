interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<Props> = ({ children, className }) => {
  let containerClassName = "w-[90rem] mx-auto ";

  if (className) {
    containerClassName += `${className}`;
  }

  return <div className={containerClassName}>{children}</div>;
};

export default Container;
