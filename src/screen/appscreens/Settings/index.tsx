import { View, Button, Alert, Text, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { SettingsProps } from "../../../routes/types/approutes/appscreen";
import { useState } from 'react';
import { backupDatabaseApi } from '../../../api/POST/envioBackup';
import Share from 'react-native-share';
import { backupDatabaseEnvio } from '../../../utils/backup/backupDatabaseEnvio';
import { backupDatabase } from '../../../utils/backup/backupDatabase';
export const Settings = ({navigation, route}:SettingsProps) => {
 
  const [backupStatus, setBackupStatus] = useState<string>('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Fazer Backup do Banco de Dados" onPress={() => backupDatabase({setBackupStatus})} />
      <Text>{backupStatus}</Text>
    </View>
  );
};



