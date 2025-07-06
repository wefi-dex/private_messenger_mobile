import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
  msgVisible: boolean;
  setMsgVisible: (visible: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [msgVisible, setMsgVisible] = useState(false);

  return (
    <ModalContext.Provider value={{ msgVisible, setMsgVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};