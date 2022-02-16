import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from './../ButtonPrimary'
const JoinClub = (props:any) => {
    return (
        <Flex
            position="relative"
            paddingTop={["4em","6em","8em","10em"]}
            paddingBottom={["3em","4em","6em","8em"]}
            bg="#000"
        >
            <Image
                position="absolute"
                width="44%"
                left="0px"
                bottom="0px"
                right="auto"
                top="auto"
                src="/joinclub/hero.png"
                display={["none","none","block","block"]}
            />
            <Flex                                                       
                maxWidth="1200px"
                marginLeft="auto"
                marginRight="auto"
            {...props}>
                <Flex justifyContent={["center","center","flex-end","flex-end"]}>
                    <Flex flexDirection="column" alignItems="flex-start" paddingRight="10px" width={["95%","90%","50%","50%"]}>
                        <Text fontFamily="'Clash Display', sans-serif"
                            color="white" fontSize={["35px","40px","45px","50px"]}
                            lineHeight="120%" fontWeight="900"                
                        >JOIN THE CLUB
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Alpha Kongs Club is brought to you by a team of artists who left a permanent mark on mainstream culture.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            They’re the artists behind the dragons of Game of Thrones… and worked on titles such as Star Wars, Star Trek, Pokémon, Jurassic World, and more.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            The Club is also home to hundreds of celebrities, top tier engineers, marketing experts and crypto visionaries.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Soon, you’ll be able to join them and take part in the <span style={{fontFamily:"'Clash Display', sans-serif"}}>Alpha Kongs Ecosystem</span> as it becomes a globally recognized project.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Mark 1 February 2022 on your calendar.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            The most determined early supporters will get their hands on one of the 8888 digital art pieces.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Once the <span style={{fontFamily:"'Clash Display', sans-serif"}}>Alpha Kongs</span> have chosen their 8,888 Metaverse Champions, many will get left behind.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="30px" marginTop="20px">
                            Today, you can still join the winning team and share in Their success.
                        </Text>
                        <ButtonPrimary to="#" name="Join Discord" width="270px" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default JoinClub