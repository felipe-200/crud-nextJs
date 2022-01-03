interface inputProps {
  label: string,
  id: string,
  type: 'text' | 'number',
  value: any,
  readonly?: boolean,
  className?: string,
  onChange?: (valor: any) => any
}
const Input = (props: inputProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label htmlFor={props.id} className="mb-2"> {props.label} </label>
      <input
        type={props.type ?? 'text'}
        id={props.id}
        value={props.value}
        readOnly={props.readonly}
        onChange={e => props.onChange?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outiline-none bg-gray-50 px-4 py-2
          ${props.readonly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}
export default Input