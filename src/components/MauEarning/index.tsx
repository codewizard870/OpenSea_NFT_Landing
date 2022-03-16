import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from '../ButtonPrimary'
const MauEarning = (props:any) => {
    return (
        <Flex
            position="relative"
            paddingTop={["4em","6em","7em","8em"]}
            bg="#000"
        >
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","25%"]}
                display={["none","none","block","block","block"]}
                left="0px"
                bottom="0px"
                right="auto"
                src="/festival/1.png"
            />
            <Image
                position="absolute"
                width={["0%","30%","26%","30%","25%"]}
                display={["none","none","block","block","block"]}
                left="auto"
                bottom="0px"
                right="0px"
                src="/festival/2.png"
            />
            <Flex                                                       
                maxWidth="1200px"
                marginLeft="auto"
                marginRight="auto"
                {...props}
            >
                <Flex justifyContent="center" zIndex="1">
                    <Flex 
                        flexDirection="column" 
                        alignItems="center" 
                        textAlign="center" 
                        width={["90%","86%","60%","50%","60%"]}
                        fontSize={["15px","15px","17px","19px"]} 
                    >
                        <Text fontFamily="'Clash Display', sans-serif"
                            color="white" fontSize={["30px","35px","40px","50px","60px"]}
                            lineHeight="120%" fontWeight="900" letterSpacing="-3px"                
                        >
                            <span style={{color:"yellow"}}>MAU EARNINGS</span>
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            The META APES UNIVERSE project will create dozens of new types of online earnings in the largest online worlds like DECENTRALAND, SANDBOX and METAWERSE for everyone.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            We will create a special system of four drops for the purchase of our NFT tokens, so that as many people as possible get a chance to buy our NFT. We will inform everyone about each drop in our Discord community.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            Each of our NFT tokens is a certain place on the online billboard where you can earn by selling it or renting it out for a week or a month. All work will be carried out on our P2P MAU platform, which will be a whole marketplace on the ETH blockchain with a P2P function, where you can buy a place on a billboard, buy a whole billboard, sell it, or rent it out. We will add dozens of new features to fully provide work for our users.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            Owners of our NFTs will be able to use the MAU platform free of charge, without paying a commission for sale or purchase.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            We will open more than 10,000 vacancies to work as brokers for the sale or search of billboards for people who want to find, buy or rent a billboard for their advertising. 
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            We will create three online offices in these worlds, which will be available 24/7 for everyone who wants to become part of our team and work with us!
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            Each of our brokers will have 3 types of salaries, weekly, monthly and also interest on the sale of advertising space.
                        </Text>
                        <Text color="#fff" lineHeight="120%" marginBottom="5px" marginTop="10px">
                            It doesn't matter to us how old you are or who you are by education, we want to give opportunities to everyone and give a chance to prove yourself with the help of META APES UNIVERSE!
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default MauEarning