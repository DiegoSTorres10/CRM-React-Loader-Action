//este es apra crear una pantalla personalizada para cuando halla un error ocupando useRouteError

import { useRouteError } from "react-router-dom";

export default function ErrorPage(){

    const error = useRouteError()

    return (
        <div className="space-y-8">
            <h1 className="text-center text-4xl mt-20 text-blue-900 font-extrabold"> CRM-Clientes
    
            </h1>
            <p className="text-center"> Hubo un error
            </p>
            <p className="text-center">
                {error.statusText ||  error.message}
            </p>
        </div>
    )
}

