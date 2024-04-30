import { useRouteError } from "react-router-dom";

export const NotFound = () => {
    const error: any = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div id="error-page" className="text-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};