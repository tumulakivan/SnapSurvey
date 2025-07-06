export type AuthContextTypes = {
  loginStatus: boolean;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};
