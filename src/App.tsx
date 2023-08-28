import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/global';


function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
