export interface Auth {
  session_key: string;
  signup: boolean;
  login: string;
  email: string;
  password: string;
  login_fetching: boolean;
  auth_error: string;
  valid_errors: object;
  user: string;
}
