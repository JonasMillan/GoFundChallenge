import { useState, useEffect } from "react";
import Card from "./Card";

const BASE_URL = "https://swapi.dev/api/planets/";

export default function Main() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setPlanets(data.results);
    };
    getPlanets();
  }, []);

  return (
    <main className="content-size">
      {!!planets.length ? (
        planets.map((planet) => (
          <Card key={planet.name} name={planet.name} url={planet.url} />
        ))
      ) : (
        <>...loading</>
      )}
    </main>
  );
}
