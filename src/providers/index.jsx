import { ErrorProvider } from "./ErrorClass"




const Providers = ({ children }) => {
    return (
        <ErrorProvider>{children}</ErrorProvider>
    )
}

export default Providers