import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const About = (props:any) => {
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            paddingTop={["3em","3em","3em","5em"]}
            paddingBottom={["3em","3em","3em","5em"]}
            bg="#161616"
        {...props}>
            <Box maxWidth={["88vw","86vw","66vw","66vw"]} textAlign="center">
                <Text fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["30px","30px","40px","40px"]}
                    lineHeight="120%" fontWeight="900"                
                >ARE YOU READY FOR<br />THE <span style={{color:"#fffc00"}}>ALPHA KONGS</span>
                    ?
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Long gone are the days of the crude gorilla, the brute. Shear strength no longer gets you a spot on the top. A new species of Alpha Kongs are now taking the lead.
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Their intelligence and technological prowess makes them the most advanced species in the Metaverse.
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    The Alpha Kongs reached the Digital Age 200 years before humans did. And they have been tracking our every move ever since. Their goal was not surveillance, nor was it vicious in nature.. They simply wanted to hide their civilization at a safe distance.
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Up until now.
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    The Alpha Kongs leaders have now decided to build a Metaverse Ecosystem we can all thrive in.While the Alpha Kongs are accepting hundreds of thousands of visitors…
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Only the chosen 8,888 get to ascend and stay with them. The rest of us will get left behind. Once the Alpha Kongs are ready to present themselves in their final 3D forms, their rise to the top is guaranteed.
                </Text>
                <Text color="#fff" fontSize="13px" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    The time Alpha Kong sages predicted long ago has now come.
                </Text>
            </Box>            
        </Flex>
    );
};

export default About