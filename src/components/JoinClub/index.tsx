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
                        >JOIN THE MAU CLUB
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            META APES UNIVERSE CLUB is a privileged club for our customers and all users of our developments.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Holders of our NFT will become part of our club, where dozens of privileges and opportunities are waiting for them, such as participation in sweepstakes, full consultations on our developments personally with our team at online conferences.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Free use and access to our MAU P2P platform for work!
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Our club members will find out all the news about our developments and plans before anyone else.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            In our club we will open special online courses aimed at teaching earnings in the online worlds on our developments and vacancies.
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            An incredibly unique collection of 10k NFT, which will change the industry of online earnings and marketing!
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="10px" marginTop="20px">
                            Become a part of our club and community and we will change online opportunities together!
                        </Text>
                        <Text color="#fff" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" marginBottom="30px" marginTop="20px">
                            “It's never too late to change everything and dive into the future.“-CEO of META APES UNIVERSE
                        </Text>
                        <ButtonPrimary to="#" name="Join Discord" width="270px" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default JoinClub