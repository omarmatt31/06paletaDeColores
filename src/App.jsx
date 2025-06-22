import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColores from "./components/FormularioColores";

function App() {

  return (
    <>
      <main className="container my-5 w-75">
        <FormularioColores></FormularioColores>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
