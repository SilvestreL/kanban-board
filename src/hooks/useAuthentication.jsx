import { db } from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth' // Importando funções de autenticação do Firebase

import { useState, useEffect } from 'react'; // Importando useState e useEffect do React

export const useAuthentication = () => {
    const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
    const [loading, setLoading] = useState(null); // Estado para controlar o indicador de carregamento

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false); // Estado para controlar se a operação foi cancelada

    const auth = getAuth(); // Obtém a instância de autenticação do Firebase (erro de digitação 'gethAuth' deve ser 'getAuth')

    function checkIfsCancelled() { // Função para verificar se a operação foi cancelada
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => { // Função assíncrona para criar um usuário
        checkIfsCancelled(); // Chama a função para verificar cancelamento
        setLoading(true); // Inicia o indicador de carregamento
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            ); // Cria um usuário com email e senha
            await updateProfile(user, {
                displayName: data.displayName
            }); // Atualiza o perfil do usuário com o nome de exibição

            setLoading(false); // Finaliza o indicador de carregamento

            return user; // Retorna o usuário criado

        } catch (error) {
            console.log(error.message); // Log do erro no console
            console.log(typeof error.message); // Log do tipo da mensagem de erro no console

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = " A senha precisa conter pelo menos 6 caracteres."
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setLoading(false); // Finaliza o indicador de carregamento
            setError(systemErrorMessage)
        }
    }


    return {
        auth, // Retorna a instância de autenticação
        createUser, // Retorna a função de criar usuário
        error, // Retorna o estado de erro
        loading, // Retorna o estado de carregamento
    }
}
