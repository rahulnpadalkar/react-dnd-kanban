import { Flex, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import { Cards } from "./types";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface KanbanLaneProps {
  title: string;
  items: Cards[];
}

const KanbanItem = ({
  title,
  index,
  parent,
}: {
  title: string;
  index: number;
  parent: string;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });

  console.log(CSS.Translate.toString(transform));

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <Flex
      padding="3"
      backgroundColor="white"
      margin="2"
      borderRadius="8"
      border="2px solid gray.500"
      boxShadow="0px 0px 5px 2px #2121213b"
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <Text>{title}</Text>
    </Flex>
  );
};

export default function KanbanLane({ title, items }: KanbanLaneProps) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <Flex flex="3" padding="5" flexDirection="column" minH="10rem">
      <Text fontWeight="bold">{title}</Text>
      <Flex
        ref={setNodeRef}
        backgroundColor="gray.200"
        borderRadius="8"
        flex="1"
        padding="2"
        flexDirection="column"
      >
        {items.map(({ title: cardTitle }, key) => (
          <KanbanItem title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </Flex>
    </Flex>
  );
}
