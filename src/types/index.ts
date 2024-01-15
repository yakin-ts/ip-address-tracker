interface GeoData {
    ip: string;
    location: string;
    time_zone: string;
    isp: string;
}

interface Position {
    latitude: number;
    longitude: number;
}

interface AppState {
    geoData: GeoData;
    position: Position;
    zoom: number;
    loading: boolean;
    error: string;
    ipAddress: string;
}

interface HeaderProps {
    ipAddress: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    error: string;
}

interface LocationMapProps {
    position: Position;
    zoom: number;
}
interface ChangeViewProps {
    center: [number, number];
    zoom: number;
}

interface DetailsCardProps {
    geoData: GeoData;
}


export type {
    GeoData,
    Position,
    AppState,
    HeaderProps,
    LocationMapProps,
    DetailsCardProps,
    ChangeViewProps
}