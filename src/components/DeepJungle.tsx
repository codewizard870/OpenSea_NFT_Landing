import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const DeepJungle = (props:any) => {
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            paddingTop={["3em","3em","3em","5em"]}
            paddingBottom={["3em","3em","3em","5em"]}
        {...props}>
            <Box>
                <Text
                    fontSize="12px"
                    lineHeight="120%"
                    text-align="center"
                    color="#161616"
                    // textTransform="uppercase"
                    fontWeight="600"
                >                    
                    <span style={{fontFamily:"'Clash Display', sans-serif"}}>Meta APES Universe</span>, The first NFT project that will capture the entire marketing of decentra meta worlds with our incredible buildings and art advertising spaces!
                </Text>
            </Box>            
        </Flex>
    );
};

export default DeepJungle