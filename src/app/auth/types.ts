export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  password: string;
  email: string;
  fullname: string;
}

export interface SignInResponse {
  access_token: string;
  expires_in: string;
  message: string;
  status: boolean;
}

export interface User {
  userId: string;
  username: string;
}

export interface Auth {
  isAuthenticated: boolean;
  access_token: string;
  user: User | null;
}
