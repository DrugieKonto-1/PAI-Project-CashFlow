import { createContext, useContext, useState } from "react";

interface UserData {
  name?: string;
  lastname?: string;
  // ...
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
}

const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);