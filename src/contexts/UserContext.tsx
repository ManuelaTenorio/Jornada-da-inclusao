// // import { User } from '@phosphor-icons/react'; // Importa o ícone de usuário da biblioteca @phosphor-icons
// import { useState, createContext, ReactNode } from 'react'; // Importa hooks e tipos do React

// // Define a interface para o contexto de usuário, incluindo o estado do nome e uma função para atualizá-lo.
// interface UserConstextType {
//     nome: string; // Nome do usuário
//     setNome: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar o nome do usuário
// }

// // Cria o contexto de usuário com um valor padrão.
// export const UserContext = createContext<UserConstextType>({
//     nome: "", // Inicializa o nome como uma string vazia
//     setNome: () => {} // Inicializa setNome como uma função vazia
// });

// // Define a interface para as propriedades do provedor de usuário.
// interface UserProvideProps {
//     children: ReactNode; // Elementos filhos que serão envoltos pelo provedor
// }

// // Define o provedor de usuário, que gerencia o estado do nome do usuário.
// function UserProvider({ children }: UserProvideProps) {
//     // Estado que armazena o nome do usuário, inicializado como uma string vazia.
//     const [nome, setNome] = useState("");

//     return (
//         <>
//             <UserContext.Provider value={{ nome, setNome }}> {/* Fornece o estado e a função ao contexto */}
//                 {children} {/* Renderiza os filhos do provedor */}
//             </UserContext.Provider>
//         </>
//     );
// }

// export default UserProvider; // Exporta o provedor para uso em outros componentes
