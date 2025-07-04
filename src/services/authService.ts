// mock auth only

export const authService = {
  login: (username: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "user" && password === "123") {
          localStorage.setItem("mock-auth", "true");
          resolve();
        } else {
          reject("Invalid credentials.");
        }
      }, 500);
    });
  },

  logout(): void {
    localStorage.removeItem("mock-auth");
  },

  checkAuth(): boolean {
    return localStorage.getItem("mock-auth") === "true";
  },
};
