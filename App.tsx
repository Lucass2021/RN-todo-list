import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content" 
        // backgroundColor="transparent"
        // translucent={true}
      />
      <Home/>
    </>
  );
}
//https://docs.expo.dev/versions/latest/sdk/checkbox/
