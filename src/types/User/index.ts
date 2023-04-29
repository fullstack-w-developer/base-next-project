export type User = {
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    student_number: string;
    profile: {
        url: string
    };
    status: "waiting" | "success" | "failed";
    role: "ADMIN" | "USER" | "MASTER"
}