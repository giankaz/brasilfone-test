import { createContext, useContext, useEffect, useState } from "react";

export const ErrorContext = createContext()

export const ErrorProvider = ({children}) => {
    
    const [error, setError] = useState({
        email: false,
        name: false,
        pass: false,
        passCheck: false,
        number: false,
        agreed: false,
        notify: false
    })
    
    const handleChange = (key) => {
        let newError = {...error, ...key}

        console.log(`🤖 ~ handleChange ~ newError`, newError)
   
        setError(newError)

      }

    const clearErrors = () => {
        setError({
            email: false,
            name: false,
            pass: false,
            passCheck: false,
            number: false,
            agreed: false,
            notify: false
        })
    }
    return (
        <ErrorContext.Provider value={{error, handleChange, clearErrors}}>
            {children}
        </ErrorContext.Provider>
    )
}


export const useErrors = () => useContext(ErrorContext)