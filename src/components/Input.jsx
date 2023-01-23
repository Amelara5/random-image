import PropType from "prop-types";

// eslint-disable-next-line react/prop-types
function Input({ referenceName }) {
  return (
    <>
      <label htmlFor="search">
        Search (separate terms with commas - no spaces)
      </label>
      <input
        type="search"
        id="search"
        className="rounded-sm border px-1"
        placeholder="🔍"
        ref={referenceName}
      />
    </>
  );
}

Input.propType = {
  referenceName: PropType.func.isRequired,
};

export default Input;
