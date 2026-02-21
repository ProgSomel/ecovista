import { getResolvedLatLong } from "@/lib/location-info";
import LocationInfo from "../components/LocationInfo";
import NoLocationInfo from "../components/NoLocationInfo";

export default async function Home({params, searchParams}) {
    const { location } = await params;
    const { latitude, longitude } = await searchParams;

    const resolved = await getResolvedLatLong(location, latitude, longitude);
    if (resolved?.lat && resolved?.lon) {
        return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo location={location} />;
    }
}
