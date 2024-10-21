import { useDraggable } from "@dnd-kit/core"; // Importa o hook useDraggable da biblioteca @dnd-kit
import { CSS } from "@dnd-kit/utilities"; // Importa utilidades da biblioteca @dnd-kit
import './letters.css'; // Importa o estilo do componente

// Define o componente Letters, que representa uma letra que pode ser arrastada.
function Letters({ id, value }) {
  // Usa o hook useDraggable para tornar o componente arrastável.
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });

  // Define estilos estáticos para o componente.
  const staticStyles = {
    width: '50px', // Largura do componente
    height: '50px', // Altura do componente
    display: 'flex', // Usado para alinhar o conteúdo
    justifyContent: 'center', // Centraliza horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    fontSize: 'var(--fs-600)', // Tamanho da fonte
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra do componente
    willChange: 'transform', // Indica que o componente mudará de posição
  };

  // Define estilos dinâmicos que mudam com a transformação.
  const dynamicStyles = {
    transform: CSS.Translate.toString(transform), // Aplica a transformação de posição
    transition, // Aplica a transição
  };

  return (
    <div
      className="letter"
      ref={setNodeRef} // Referência para o elemento arrastável
      style={{ ...staticStyles, ...dynamicStyles }} // Aplica estilos estáticos e dinâmicos
      {...attributes} // Adiciona atributos de acessibilidade
      {...listeners} // Adiciona listeners para eventos de arrasto
    >
      {String.fromCharCode(64 + value)} {/* Converte o valor numérico em uma letra */}
    </div>
  );
}

export default Letters
