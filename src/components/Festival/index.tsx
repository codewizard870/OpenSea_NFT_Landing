import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from './../ButtonPrimary'
const Festival = (props:any) => {
    return (
        <Flex
            position="relative"
            paddingTop={["4em","6em","7em","8em"]}
            paddingBottom={["3em","4em","6em","7em"]}
            bg="#000"
        >
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","25%"]}
                display={["none","none","block","block","block"]}
                left="0px"
                bottom="0px"
                right="auto"
                top="auto"
                src="/festival/1.png"
            />
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","25%"]}
                display={["none","none","block","block","block"]}
                left="auto"
                bottom="0px"
                right="0px"
                top="auto"
                src="/festival/2.png"
            />
            <Flex                                                       
                maxWidth="1200px"
                marginLeft="auto"
                marginRight="auto"
            {...props}>
                <Flex justifyContent="center" zIndex="1">
                    <Flex flexDirection="column" alignItems="center" textAlign="center" width={["90%","86%","60%","50%","60%"]}>
                        <Text fontFamily="'Clash Display', sans-serif"
                            color="white" fontSize={["30px","35px","40px","50px","60px"]}
                            lineHeight="120%" fontWeight="900" letterSpacing="-3px"                
                        ><span style={{color:"yellow"}}>THE FIRST</span> NFT<br />FESTIVAL IN HISTORY
                        </Text>
                        <Text color="#fff" fontSize={["15px","17px","19px","21px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            While <span style={{fontFamily:"'Clash Display', sans-serif"}}>ALPHA KONGS CLUB</span> members are obsessed with the latest and greatest tech and how they can utilize it to change the world…
                        </Text>
                        <Text color="#fff" fontSize={["15px","17px","19px","21px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            … They also LOVE to party!
                        </Text>
                        <Text color="#fff" fontSize={["15px","17px","19px","21px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            As an early supporter you can join them as they unleash their wild side.You’ll be invited to regular parties both online and in the Metaverse.
                        </Text>
                        <Text color="#fff" fontSize={["15px","17px","19px","21px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            These special events are guaranteed to be a blast. You’ll get to enjoy live music sessions by famous DJs, play exciting <span style={{fontFamily:"'Clash Display', sans-serif"}}>KONG GAMES</span>, and experience what it’s like to party with great people from all over the world from the comfort of your home.
                        </Text>
                        <Text color="#fff" fontSize={["15px","17px","19px","21px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Entrance is free, but our holders enjoy priority.
                        </Text>                        
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Festival