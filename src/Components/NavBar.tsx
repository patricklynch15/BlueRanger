import { Text, HStack } from "@chakra-ui/react";

interface props {
  menuItems: string[];
  id: string;
}

const NavBar = ({ menuItems, id }: props) => {
  return (
    <HStack id={id}>
      {menuItems.map((item) => {
        return <Text key={item}>{item}</Text>;
      })}
    </HStack>
  );
};

export default NavBar;
