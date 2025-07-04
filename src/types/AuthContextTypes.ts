export type AuthContextTypes = {
  loginStatus: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};
