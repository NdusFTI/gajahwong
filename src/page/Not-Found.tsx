import { useRouteError } from "react-router-dom";

export const NotFound = () => {
    const error: any = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div id="error-page" className="text-center">
                <h1 className="text-2xl font-bold mb-7">Oops!</h1>
                <p className="text-base font-semibold">Sorry, an unexpected error has occurred.</p>
                <p className="mt-7 text-base text-red-600">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};