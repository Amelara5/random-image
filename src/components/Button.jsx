import PropTypes from "prop-types";

function Button({ clickedButton }) {
  return (
    <button
      type="submit"
      className="rounded-full bg-green-500 p-4 text-white"
      onClick={() => {
        clickedButton();
      }}
    >
      Go!
    </button>
  );
}

Button.propTypes = {
  clickedButton: PropTypes.func.isRequired,
};

export default Button;
