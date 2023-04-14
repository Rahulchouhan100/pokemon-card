import { ApolloProvider, gql, useQuery } from "@apollo/client";
import client from "@/lib/graphql";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
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

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  // Other code...

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {data.pokemons.map((pokemon) => (
          <Link href={`/pokepage?id=${pokemon.id}`} key={pokemon.id}>
            <div
              className="card"
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => handleCardClick(pokemon)}
            >
              <div className="img-container">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="pokemon-img"
                />
              </div>
              <p># {pokemon.number}</p>
              <h2>{pokemon.name}</h2>
              <p> {pokemon.types.join(", ")}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
