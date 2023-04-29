let inDevEnvironment = false;

if (process) {
    if (process.env.NODE_ENV === "development") {
        inDevEnvironment = true;
    }
}

const MONGODB_URI = process.env.MONGODB_URI!
const JWT_KEY = process.env.JWT_KEY!
const mainUrl = process.env.NEXT_PUBLIC_BASE_SERVER_API_URL as string;


export {
    inDevEnvironment,
    mainUrl,
    JWT_KEY,
    MONGODB_URI
};