
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b122b] to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-4">¡Bienvenido a IntelliVerseOne!</h1>
      <p className="text-center mb-8">Una sola pregunta. Más de 120 inteligencias artificiales trabajando para ti.</p>
      <input type="text" placeholder="Haz cualquier pregunta..." className="px-4 py-2 rounded text-black w-96 mb-4" />
      <div className="flex flex-wrap gap-2 justify-center">
        <button className="btn">💡 Déjame dirigir tu vida</button>
        <button className="btn">🧠 Déjame ser tu tutor estudiantil</button>
        <button className="btn">💻 Crea tu proyecto de programación hasta el final</button>
        <button className="btn">🕸️ DeepWeb</button>
        <button className="btn">🤝 Conecta con personas con tus mismas búsquedas</button>
        <button className="btn">📦 ¿Quieres proponer ideas o proyectos?</button>
        <button className="btn">🗺️ Control positivo de las masas</button>
      </div>
    </div>
  );
}

export default App;
