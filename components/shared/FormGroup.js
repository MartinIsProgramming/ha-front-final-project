const FormGroup = ({ labelText, options, onChange }) => {
  return (
    <>
      <label
        htmlFor={labelText}
        className="block text-sm font-medium text-primary-brand-light"
      >
        {labelText}
      </label>
      <select
        type="text"
        name={labelText}
        id={labelText}
        placeholder={`${labelText}...`}
        className="w-full rounded-md text-primary-brand-light border-secondary-brand-light focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
        onChange={onChange}
      >
        {options.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default FormGroup;
