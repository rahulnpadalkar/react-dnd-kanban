import { ChakraProvider, theme, Text } from "@chakra-ui/react";
import KanbanBoard from "./KanbanBoard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Text fontSize="2xl" padding="5" fontWeight="bold" fontStyle="italic">
      Simple Kanban
    </Text>
    <KanbanBoard />
  </ChakraProvider>
);
