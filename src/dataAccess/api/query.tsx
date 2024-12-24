import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

export const useQuery = (path: string) => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(true)

    const {getAccessTokenSilently, isAuthenticated, isLoading: auth0Loading} = useAuth0();

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (auth0Loading || !isAuthenticated) {
                    throw `Auth failed ${auth0Loading} ${isAuthenticated}`
                }

                if (process.env.REACT_APP_WORKER_API_URL) {
                    const url =`${process.env.REACT_APP_WORKER_API_URL}${path}`

                    const token = await getAccessTokenSilently({
                        authorizationParams: {
                            audience: process.env.REACT_APP_WORKER_API_AUDIENCE,
                        }
                    })

                    const response = await fetch(url, {
                        cache: 'no-store',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const textData = await response.text();
                    setData(textData);
                }
            } catch (error) {
                console.error('Error:', error);
            }
            setLoading(false)
        };

        void fetchData();
    }, []); // Empty dependency array means it only runs once when the component mounts

    return {
        data,
        loading
    }
}