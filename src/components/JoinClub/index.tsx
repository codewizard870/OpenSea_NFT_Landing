import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from "./../ButtonPrimary";
const JoinClub = (props: any) => {
  return (
    <Flex
      position="relative"
      paddingTop={["4em", "6em", "8em", "10em"]}
      paddingBottom={["3em", "4em", "4em", "4em"]}
      bg="#000"
      id="club"
      minH={{ base: "auto", lg: "700px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Image
        position={{ base: "relative", md: "absolute" }}
        height={{ base: "auto", md: "700px" }}
        left="0px"
        bottom="0px"
        right="auto"
        top="auto"
        src="/joinclub/hero.png"
      />
      <Flex
        maxWidth="1200px"
        marginLeft="auto"
        marginRight="auto"
        {...props}
        width="100%"
      >
        <Flex
          justifyContent={["center", "center", "flex-end", "flex-end"]}
          width="100%"
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            paddingRight="10px"
            width={["95%", "90%", "50%", "50%"]}
          >
            <Text
              fontFamily="'Clash Display', sans-serif"
              color="white"
              fontSize={["35px", "40px", "45px", "50px"]}
              lineHeight="120%"
              fontWeight="900"
            >
              JOIN THE MAU CLUB
            </Text>
            <Text
              color="#fff"
              fontSize={["13px", "15px", "16px", "18px"]}
              lineHeight="120%"
              marginBottom="10px"
              marginTop="20px"
            >
              Join our communities to be at the center of all events, news,
              sweepstakes and prizes!
              <br />
              <br />
              Follow the development and further plans of our team and our
              project 24/7!
              <br />
              <br />
              Chat and learn new things with other users!
              <br />
              <br />
              Interact with our team 24/7
              <br />
              <br />
              Be in the center of all events and become a part of the MAU CLUB!
              <br />
              <br />
            </Text>
            <Flex flexWrap="wrap" gap="10px">
              <ButtonPrimary
                to="https://discord.gg/5rSYcPXKtm"
                name="Join Discord"
                width="270px"
              />
              <ButtonPrimary
                to="https://twitter.com/universeapes?s=21&t=zpIpgo4sqPOAab6sz3-o7w"
                name="Join Twitter"
                width="270px"
              />
              <ButtonPrimary
                to="https://instagram.com/meta_apes_universe_club?igshid=MDE2OWE1N2Q="
                name="Join Instagram"
                width="270px"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JoinClub;
