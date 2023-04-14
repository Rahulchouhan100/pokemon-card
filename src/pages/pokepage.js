import Navbar from "@/components/Navbar";

const pokepage = ({ pokemon }) => {
  return (
    <>
      <Navbar />
      <div className="selected-pokemon">
        <button>Close</button>
        <h2>{pokemon?.name}</h2>
        <p>Number: {pokemon?.number}</p>
      </div>
    </>
  );
};

export default pokepage;
