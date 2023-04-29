type LoginUser = {
    student_number: string,
    password: string
}


type RegisterUser = {
    email: string;
    first_name: string;
    last_name: string;
    student_number: string;
    password: string
}

export type SignUpFormData = RegisterUser;

export type SignInFormData = LoginUser;
