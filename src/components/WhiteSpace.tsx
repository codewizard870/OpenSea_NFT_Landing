import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const WhiteSpace = (props: any) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      paddingTop={["3em", "3em", "3em", "5em"]}
      paddingBottom={["3em", "3em", "3em", "5em"]}
      {...props}
    >
      <Box>
        <Text
          fontSize="14px"
          lineHeight="120%"
          text-align="center"
          color="#161616"
          // textTransform="uppercase"
          fontWeight="600"
        >
          <b>
            META APES UNIVERSE CLUB
          </b>
          &nbsp;will change the <b>NFT INDIUSTRY</b> Very soon.
        </Text>
      </Box>
    </Flex>
  );
};

export default WhiteSpace;
