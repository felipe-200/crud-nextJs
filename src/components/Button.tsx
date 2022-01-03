interface ButtonProps {
  color?: 'green' | 'blue' | 'gray',
  className?: string,
  children: any,
  onClick?: () => void
}
const Button = (props: ButtonProps) => {
  const color = props.color ?? 'blue'
  return (
    <button
      className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
      text-white px-5 py-2 rounded-md
      ${props.className}
    `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
export default Button