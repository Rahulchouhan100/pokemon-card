import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Footer from "@/components/Footer";
import client from "@/lib/graphql";
client;

const GET_POKEMON_DETAILS = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;
const pokepage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <>
      <Navbar />
      <div className="selected-pokemon">
        <button onClick={() => router.back()}>Close</button>
        <h2>{data.pokemon?.name}</h2>
        <p>Number: {data.pokemon?.number}</p>
      </div>
      <Footer />
    </>
  );
};

export default pokepage;
