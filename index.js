import { NativeEventEmitter, NativeModules, EmitterSubscription } from 'react-native';

export type VerifoneNativeModuleType = {
  initVerifone: (deviceIpAddress: string) => Promise<void>;
};

const VerifoneNativeModule = NativeModules.VerifoneNativeModule;

const VerifoneComm: VerifoneNativeModuleType = {
  initVerifone: (deviceIpAddress: string) => {}
}

export default VerifoneComm;