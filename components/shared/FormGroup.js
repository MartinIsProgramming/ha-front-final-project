import propTypes from 'prop-types';

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
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

FormGroup.propTypes = {
  labelText: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  onChange: propTypes.func.isRequired,
};

export default FormGroup;
