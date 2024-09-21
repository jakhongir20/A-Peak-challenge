import { DarkModeProvider } from './context';
import { CartPage, HomePage } from './pages';

export default function App() {
  return (
    <DarkModeProvider>
      <HomePage />
      <CartPage />
    </DarkModeProvider>
  );
}
