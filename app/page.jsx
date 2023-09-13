import './pico-1.5.10'
import BotonCrearSala from './BotonCrearSala';

export default function Principal() {
  return (
  <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AxieIntercambio</title>
  <main className="container">
    <h1 id="title" data-section="en" data-value="titulo">
      AxieIntercambio
    </h1>
    <div id="flags" className="flags">
      <div className="flags_item" data-language="en">
      </div>
    </div>
    <h2 id="description" data-section="en" data-value="descripcion">
      ¡Bienvenido a AxieIntercambio! Este es un lugar especialmente diseñado
      para el intercambio seguro y rápido de activos dentro del ecosistema de
      Axie.
    </h2>
    <button type="button"  onClick={BotonCrearSala} data-section="en"data-value="botom_Sala">Crear Sala</button>
    <h3 id="enter-room-button" data-section="en" data-value="Entrar">Entrar en Sala</h3>
    {/* Formulario para unirse a una sala */}
    <form id="join-room-form">
      <label htmlFor="room-code">Código de la sala:</label>
      <input type="text" id="room-code" name="room-code" required="" />
      <input type="submit" defaultValue="Unirse a la sala" />
    </form>
  </main>
</>
  );
}
