import { ReactNode } from 'react';
import { UserProviderContext } from './context';


interface IAppContextProvider {
  children: ReactNode;
}

const AppContextProvider = ({ children }: IAppContextProvider) => {
  return (
    <UserProviderContext>
          {children}
    </UserProviderContext>
  );
};

export { AppContextProvider };
