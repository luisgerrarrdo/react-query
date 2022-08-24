import { QueryClientProvider } from "react-query";
import { Container, Stack, Title } from "@mantine/core";

import client from "./client";
import Login from "./Login";

function App() {
  return (
    <Container>
      <Stack>
        <Title>Login</Title>
        <Login />
      </Stack>
    </Container>
  );
}

function WrappedApp() {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
}

export default WrappedApp;
