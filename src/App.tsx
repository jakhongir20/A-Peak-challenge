import { DarkModeProvider } from './context';
import Home from './pages/Home';

export default function App() {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
}
