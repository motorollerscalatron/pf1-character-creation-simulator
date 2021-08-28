import clsx from 'clsx';
export type InputCardProps = {
  label: string;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  checked?: boolean;
  onSelect: (checked: boolean, value: unknown) => void;
  renderLabel?: () => React.ReactElement;
};

export default function InputCard(props: InputCardProps) {
  const {
    className,
    label,
    checked,
    onSelect,
    renderLabel,
    inputProps = {},
    labelProps = {},
  } = props;
  const { value, disabled } = inputProps;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.checked, value);
  };

  return (
    <button
      className={clsx(
        `border border-red-900 rounded-lg p-4 hover:bg-yellow-100 hover:text-red-900 disabled:text-gray-500 disabled:bg-gray-100 disabled:border-gray-500 disabled:cursor-not-allowed`,
        className,
        checked && 'bg-red-900 text-red-100'
      )}
      disabled={disabled}
      onClick={() => onSelect(true, value)}
    >
      <input {...inputProps} onChange={onChange} className="hidden" />
      <label {...labelProps}>
        {typeof renderLabel === 'function' ? renderLabel() : label}
      </label>
    </button>
  );
}
