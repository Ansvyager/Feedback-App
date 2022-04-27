import spinner from "../asssets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{
        width: "100x",
        margin: "auto",
        display: "block",
      }}
    />
  );
}

export default Spinner;
