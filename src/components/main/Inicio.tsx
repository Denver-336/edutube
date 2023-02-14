import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <section className="d-flex justify-content-center align-items-center h-75 row">
        <div className="col-10 text-center">
          <h1 className="text-light">Bienvenido al mundo de Marvel</h1>
          <h3 className="text-secondary">conoce a nuestros héroes y se parte de una gran aventura.</h3>
          <Link type="button" to='/informacion' className="btn btn-danger mt-3">Comenzar</Link>
        </div>
      </section>
  )
}
