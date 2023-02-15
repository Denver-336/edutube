import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Item } from "../../interface/interfaces";
import { getData } from "../../utils/fechData";

export const Info = () => {
  const [data, setData] = useState<Item>();
  const parametro = useParams();

  useEffect(() => {
    const fech = getData();
    fech.then((value: any) => {
      let info = value.filter(
        (hero: Item) => hero.id.toString() === parametro.id
      );
      setData(info[0]);
    });
  }, []);

  return (
    <>
      {data ? (
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne" >
                {data.name}
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample" >
              <div className="accordion-body">{data.description}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >Comics</button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample" >
              <div className="accordion-body">{data?.comics?.items && data.comics.items.map((c)=>(<h4>{c.name}</h4>))}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >Historias</button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample" >
              <div className="accordion-body">{data?.stories?.items && data.stories.items.map((c)=>(<h4>{c.name}</h4>))}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" >Series</button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample" >
              <div className="accordion-body">{data?.series?.items && data.series.items.map((c)=>(<h4>{c.name}</h4>))}</div>
            </div>
          </div>
        </div>
      ) : (<div className="text-center">
            <div className="spinner-border text-danger" role="status"><span className="visually-hidden">Loading...</span></div>
          </div>)}
      <Link type="button" to='/informacion' className="btn btn-danger" >Volver</Link>
    </>
  );
};
