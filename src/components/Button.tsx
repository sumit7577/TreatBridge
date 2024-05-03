

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  outlined?: boolean,
  classname?: string,
}

const Button = (props: ButtonProps) => {
  const { outlined, classname } = props;
  return (
    <button
      className={`${outlined ? "bg-white border-primary border-2 text-primary font-bold" : "bg-primary text-white font-bold"} px-10 rounded-md py-2 ${classname}`}
      {...props} />
  )
}

export default Button;