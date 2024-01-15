
const API_KEY = import.meta.env.VITE_APP_API_KEY; 

export async function getGeolocation(ip?: string, lang: string = 'en') {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}&lang=${lang}`);
    if (!response.ok) {
        throw new Error('Failed to get geolocation');
    }
    const data = await response.json();
    return data;
}

