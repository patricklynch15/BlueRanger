import { Text, HStack } from "@chakra-ui/react";

interface props {
  menuItems: string[];
  id: string;
}

const NavBar = ({ menuItems, id }: props) => {
  return (
    <HStack id={id} opacity={"50"} justify={"space-evenly"}>
      {menuItems.map((item) => {
        return (
          <Text margin={"10px"} opacity={10} key={item}>
            {item}
          </Text>
        );
      })}
    </HStack>
  );
};

export default NavBar;
