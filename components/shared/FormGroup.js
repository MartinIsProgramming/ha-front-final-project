const FormGroup = ({ labelText }) => {
  return (
    <div>
      <label
        htmlFor="Brands"
        className="block mb-2 text-sm font-medium text-primary-brand-light"
      >
        {labelText}
      </label>
      <select
        type="text"
        name="brands"
        id="brands"
        placeholder="brands.."
        className="w-full rounded-md text-primary-brand-light border-secondary-brand-light focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
      >
        <option>Please select</option>
        <option>Please select</option>
        <option>Please select</option>
        <option>Please select</option>
      </select>
    </div>
  );
};

export default FormGroup;
