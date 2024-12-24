import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="dark-blue  text-white py-3">
        <div className="container d-flex justify-content-around">
          <div>
            <h2>PORTAL DA TRANSPARÊNCIA DOS MUNICÍPIOS</h2>
          </div>
          <div>
          <img
            src="logo.png" 
            alt="Tribunal de Contas do Estado do Ceará"
            className="img-fluid mt-3"
            style={{ maxWidth: "150px" }}
          />  
          </div>
        </div>
      </header>

      <main className="container dark-blue my-5 p-4">
        <h2 className="text-center text-white mb-4">ACESSE OS NOSSOS SERVIÇOS</h2>
        <div className="row  text-center">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">MUNICÍPIO</h3>
                <select className="form-select mb-3">
                <option value="">Selecione Município</option>
                  {['Arneiroz', 'Buié', 'Dom Lustosa', 'Fortaleza', 'Quixadá'].map((municipio) => (
                  <option key={municipio} value={municipio}>
                  {municipio}
                  </option>
                ))}
                </select>
                <button className="btn btn-primary">INICIAR</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">TCE</h3>
                <img
                  src="logogrande.png" // Substituir "tce-logo-url" pela URL ou import do logo
                  alt="TCE Logo"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "100px" }}
                />
                <button className="btn btn-primary">INICIAR</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">FORNECEDORES</h3>
                <img
                  src="fornecedor.png" // Substituir "fornecedor-logo-url" pela URL ou import do logo
                  alt="Fornecedores Logo"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "100px" }}
                />
                <button className="btn btn-primary">INICIAR</button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-secondary me-2">DE ONDE VÊM OS DADOS?</button>
      

        
          <button className="btn btn-secondary">PESQUISE OUTROS SERVIÇOS</button>
        </div>
      </main>
    </div>
  );
}

export default App;
