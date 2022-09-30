import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from "../ButtonPrimary";
const MauEarning = (props: any) => {
  return (
    <Flex
      paddingTop={["4em", "6em", "7em", "8em"]}
      bg="#000"
      id="earning"
      w="100%"
    >
      <Flex direction="column" align="center" zIndex="1" w="100%">
        <Flex maxWidth="1200px" width="100%" justify="center">
          <Text
            fontFamily="'Clash Display', sans-serif"
            color="white"
            fontSize={["30px", "35px", "40px", "50px", "50px"]}
            lineHeight="120%"
            fontWeight="900"
            letterSpacing="-3px"
            textAlign="center"
            textShadow="2px 2px 8px rgba(100, 210, 30, 0.8), -2px -2px 8px rgba(100, 210, 30, 0.8), 5px 5px 20px rgba(80, 200, 20, 0.8), -5px -5px 20px rgba(100, 200, 40, 0.8)"
          >
            MAU
            <br />
            EARNINGS & DEVELOPMENTS
          </Text>
        </Flex>
        <Flex position="relative" width="100%" justify="center">
          <Flex
            maxWidth="1200px"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width={["90%", "86%", "60%", "50%", "60%"]}
            fontSize={["15px", "15px", "17px", "19px"]}
            mt="50px"
          >
            <Text
              color="#fff"
              lineHeight="120%"
              marginBottom="5px"
              marginTop="10px"
            >
              <b>TRADE AND FLIP MAU NFT’s</b>
              <br />
              ( Trade and flip MAU NFT’S on OPENSEA)
              <br />
              <br />
              <b>MAU MOVE TO EARN PROGRAM</b>
              <br />
              ( Move and earn both in the real world and in MAUVERS)
              <br />
              <br />
              <b>Trade the MAU LAND plots</b>
              <br />
              (Trade or rent MAU real estate and get passive income!)
              <br />
              <br />
              <b>Work on MAU jobs in MAUVERSE</b>
              <br />
              (More than 15,000 available job vacancies for every taste)
              <br />
              <br />
              <b>OPEN BUSINEES IN MAUVERSE</b>
              <br />
              (Open a personal Business and earn in MAUVERSE!)
              <br />
              <br />
              <b>PLAY AND EARN</b>
              <br />
              ( Play games, quests and complete different tasks in MAUVERSE and
              earn daily)
              <br />
              <br />
              <b>AND MUCH MORE IS COMING SOON.</b>
            </Text>
          </Flex>
          <Flex
            position="absolute"
            justify="space-between"
            h="100%"
            direction="column"
            top="auto"
            left="0"
            bottom="0"
          >
            <Image
              width="30%"
              src="/festival/1.png"
            />
            <Image
              width="30%"
              src="/festival/2.png"
            />

            <Image
              width="30%"
              src="/festival/3.png"
            />
          </Flex>
          <Image
            position="absolute"
            width="30%"
            left="auto"
            top="0px"
            right="0px"
            src="/festival/4.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MauEarning;
