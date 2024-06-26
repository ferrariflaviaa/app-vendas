import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { executeCreateSqliteTables } from './database';
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from 'styled-components';
import theme from './themes';
import { Routes } from './routes';
import { AppContextProvider } from './context';
import 'react-native-reanimated';
export default function App() {
  
  useEffect(() => {
    executeCreateSqliteTables();
  });

  return (
    <NavigationContainer>
      <AppContextProvider>
      <ThemeProvider theme={theme}>
          <StatusBar backgroundColor={theme.COLORS.PRIMARY} />
          <Routes></Routes>
        </ThemeProvider>
      </AppContextProvider>
    </NavigationContainer>
  );
}

