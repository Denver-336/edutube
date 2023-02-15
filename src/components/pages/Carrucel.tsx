import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../interface/interfaces"
import { getData } from "../../utils/fechData";

export const Carrucel = (): JSX.Element => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fech = getData();
    fech.then((value: any) => {
      setData(value);
    });
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.pinimg.com/originals/59/f0/5b/59f05b3f19ec3f46531d1addd8b7b85e.png" 
           className="d-block img-car" alt="cap" />
          <div className="carousel-caption d-none d-md-block">
            <h5>El Capitán América</h5>
            <p>El primer vengador.</p>
          </div>
        </div>
      {data.length > 0 && data?.map((value: Item) => (
        <div key={value.id} className="carousel-item">
          <img src={`${value.thumbnail.path}.${value.thumbnail.extension}`}
            className="d-block img-car" alt={value.name} />
          <div className="carousel-caption d-none d-md-block">
            <h5>{value.name}</h5>
            <Link type="button" to={`/informacion/:${value.id}`} className="btn btn-danger" >Ver detalles</Link>
          </div>
        </div>
      ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
