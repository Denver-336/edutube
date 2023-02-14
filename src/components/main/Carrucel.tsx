import { useEffect, useState } from "react";
import { Movie, Item } from "../../interfaces/interfaces";
import { Avatar, AvatarContainer, Container, Degrade } from "../styled.components";

export const Carrucel = (): JSX.Element => {
  const [data, setData] = useState<Movie[]>([]);

  const getData = async (): Promise<void> => {
    const url = import.meta.env.VITE_BASE_URL;
    const items = await fetch(url);
    const response: any = await items.json();
    const aItems = response.data.results.map((item: Item) => {
      const obj: Movie = {
        name: item.name,
        description: item.description,
        thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      };
      return obj;
    });
    setData(aItems);
    console.log(response)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          <Container height={50} src={data[1].thumbnail} />
          <AvatarContainer height={50}>
            <Avatar height={50} src={"../../assets/black-widow.png"} />
          </AvatarContainer>
          <Degrade height={50} />
        </>
      ) : (
        <section className="loading">Cargando...</section>
      )}
    </>
  );
};
