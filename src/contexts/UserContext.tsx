// import { User } from '@phosphor-icons/react';
// import { useState, createContext, ReactNode } from 'react'

// interface UserConstextType{
//     nome: string;
//     setNome: React.Dispatch<React.SetStateAction<string>>; // dispara uma acao especifica
// }

// export const UserContext = createContext<UserConstextType>({
//     nome:"",
//     setNome: () => {}
// })

// interface UserProvideProps{
//     children:ReactNode;
// }

// function UserProvider({children}: UserProvideProps){
//     const [nome,setNome] = useState("");

//     return(
//         <>
//         <UserContext.Provider value={({nome, setNome})}>
//             {children}
//         </UserContext.Provider>
//         </>
//     );
// }

// export default UserProvider;