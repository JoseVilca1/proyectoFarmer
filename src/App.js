import React, { useState } from 'react';
import imagen1 from './imagenes/images.jpg';
import imagen2 from './imagenes/images2.jpg';
import imagen3 from './imagenes/images3.jpg';
import imagen4 from './imagenes/images4.jpg';
import imagen5 from './imagenes/images5.jpg';
import imagen6 from './imagenes/images6.jpg';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para saber si el usuario está logueado
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mostrar un mensaje de error si es necesario
  const [activeSection, setActiveSection] = useState(''); // Estado para la sección activa

  // URLs de los dashboards
  const dashboardUrls = {
    producción: "https://app.powerbi.com/view?r=eyJrIjoiMzg5MzIzZjItN2U3YS00ZGRhLTgxY2EtODJmZTAzNTFiMzViIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9",
    inventario: "https://app.powerbi.com/view?r=eyJrIjoiOGQ5Mzc3M2UtOTk1My00OTMyLWIwNzEtNzk0MDQ2N2Y5YTcxIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9",
  };

  // Función para manejar el login
  const handleLogin = () => {
    if (username === "jose" && password === "1234") {
      setIsLoggedIn(true); // Si las credenciales son correctas, el usuario se loguea
    } else {
      setErrorMessage("Credenciales incorrectas"); // Si no, mostrar error
    }
    if (username === "jharod" && password === "1234") {
      setIsLoggedIn(true); // Si las credenciales son correctas, el usuario se loguea
    } else {
      setErrorMessage("Credenciales incorrectas"); // Si no, mostrar error
    }
    if (username === "Anita" && password === "1234") {
      setIsLoggedIn(true); // Si las credenciales son correctas, el usuario se loguea
    } else {
      setErrorMessage("Credenciales incorrectas"); // Si no, mostrar error
    }
        if (username === "Deyvid" && password === "1234") {
      setIsLoggedIn(true); // Si las credenciales son correctas, el usuario se loguea
    } else {
      setErrorMessage("Credenciales incorrectas"); // Si no, mostrar error
    }
  };

  // Función para manejar el logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  // Función para renderizar los iframes de los dashboards según la sección activa
  const renderIframe = (url) => {
    return <iframe src={url} width="100%" height="600" title="Dashboard"></iframe>;
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <span>Grima Construcciones y Metales S.A.C.</span>
        </header>

        <div className="login-form">
          <h2>Iniciar sesión</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div>
            <label>Usuario: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>Grima Construcciones y Metales S.A.C.</span>
      </header>

      <div className="main-content">
        <h1>Bienvenido, {username}</h1>

        {/* Botones de selección de sección */}
        <div>
          <button onClick={() => setActiveSection('producción')}>producción</button>
          <button onClick={() => setActiveSection('inventario')}>Inventario/Logística</button>
        </div>

        {/* Mostrar iframe del dashboard según la sección activa */}
        {activeSection === 'producción' && renderIframe(dashboardUrls.producción)}
        {activeSection === 'inventario' && renderIframe(dashboardUrls.inventario)}

        {/* Botón de cerrar sesión */}
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>

      {/* Imágenes */}
      <div className="images">
        <div className="imagen-2">
          <img src={imagen2} alt="Imagen 2" className="imagen-mediana" />
        </div>

        <div className="imagen-1">
          <img src={imagen1} alt="Imagen Principal" className="imagen-grande" />
        </div>

        <div className="imagenes-fila">
        <div className="card">
          <img src={imagen3} alt="Imagen 3" />
          <div className="card-title">"Fabricación y diseño de escaleras metálicas personalizadas, resistentes y estéticamente funcionales para todo tipo de espacios y necesidades."</div>
        </div>

        <div className="card">
          <img src={imagen4} alt="Imagen 4" />
          <div className="card-title">"Botelleros metálicos robustos y elegantes, ideales para organizar y exhibir botellas de manera segura y eficiente en hogares, restaurantes y comercios."
        </div>
        </div>

        <div className="card">
          <img src={imagen5} alt="Imagen 5" />
          <div className="card-title">"En nuestra empresa nos especializamos en la producción de metales de alta calidad, mediante procesos innovadores y eficientes, que garantizan productos resistentes, duraderos y de alto rendimiento, adaptados a las necesidades específicas de nuestros clientes en diversas industrias."
        </div>
        </div>

        <div className="card">
          <img src={imagen6} alt="Imagen 6" />
          <div className="card-title">"Nos dedicamos a la fabricación de productos metálicos de precisión, utilizando tecnología avanzada para transformar materias primas en soluciones personalizadas, que cumplen con los más altos estándares de resistencia, durabilidad y diseño para una amplia variedad de aplicaciones industriales."
        </div>
        </div>

        </div>
      </div>
    </div>
  );
}


export default App;