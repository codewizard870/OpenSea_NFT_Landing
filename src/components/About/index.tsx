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
            <Box maxWidth={["88vw","86vw","66vw","66vw"]} textAlign="left" fontSize='15px' >
                <Text fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["30px","30px","40px","40px"]}
                    lineHeight="120%" fontWeight="900"  
                    textAlign= "center"            
                >
                    <span style={{color:"#fffc00"}}>META APES UNIVERSE<br/></span>
                    READY FOR NEW OPPERTUNITIES? 
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    META APES UNIVERSE is a project that will completely change the NFT industry with its developments and privileges for our customers and users of online worlds.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Our project will create online earnings opportunities in the three largest online worlds for everyone and completely change the industry of online marketing and online earnings in worlds like METAWERSE, DECENTRALAND and SANDBOX.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    The mission of META APES UNIVERSE is to purchase a large amount of space and land in the online worlds of DECENTRALAND, SANDBOX and METAWERSE and to build avenues and blocks there like in TIMES SQUARE in NEW YORK city, where we plan to place thousands of advertising spaces and 3D billboards for advertising on our real estate.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    META APES UNIVERSE will create new types of online earnings and opportunities for our customers and all users of the ONLINE WORLDS.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Our customers will be able to trade our NFT on OPENSEA.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Each of our NFT tokens is a place for a specific advertising space on our buildings in online worlds like DECENTRALAND, SANDBOX and METAWERSE, where you can put your ads on our billboards and develop marketing of your business!
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    You will be able to rent, sell or simply donate each of your advertising space with the help of our P2P META APES UNIVERSE platform.
                </Text>
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    Holders of our NFT will be able to work as brokers for the sale, rent or search of advertising spaces for all willing customers who want to place their ads on our billboards. With the help of our online agencies and online offices in DECENTRALAND, SANDBOX and METAWERSE.
                </Text>            
                <Text color="#fff" lineHeight="120%" marginBottom="10px" marginTop="20px">
                    All holders of our NFT will join  MAU Club! Where you will always find out news about our plans and developments before anyone else, participate in special sweepstakes and receive any consultations with our team at online conferences and forums.
                </Text>      
            </Box>            
        </Flex>
    );
};

export default About