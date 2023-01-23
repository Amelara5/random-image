import PropType from "prop-types";

const BASE_URL = "https://source.unsplash.com/1600x900/?";

// eslint-disable-next-line react/prop-types
function Image({ searchValue }) {
  if (searchValue) {
    return (
      <>
        <img src={BASE_URL + searchValue} alt={"Random " + searchValue}></img>
      </>
    );
  }
}

Image.propType = {
  searchValue: PropType.string.isRequired,
};

export default Image;
