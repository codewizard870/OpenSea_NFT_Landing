import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import ButtonPrimary from "../ButtonPrimary";
const MauEarning = (props: any) => {
  return (
    <Flex
      position="relative"
      paddingTop={["4em", "6em", "7em", "8em"]}
      bg="#000"
      id="earning"
    >
      <Image
        position="absolute"
        width={["0%", "30%", "26%", "30%", "30%"]}
        display={["none", "none", "block", "block", "block"]}
        left="0px"
        bottom="0px"
        right="auto"
        src="/festival/1.png"
      />
      <Image
        position="absolute"
        width={["0%", "30%", "26%", "30%", "30%"]}
        display={["none", "none", "block", "block", "block"]}
        left="auto"
        bottom="0px"
        right="0px"
        src="/festival/2.png"
      />
      <Flex maxWidth="1200px" marginLeft="auto" marginRight="auto" {...props}>
        <Flex direction="column" align="center" zIndex="1">
          <Flex width="100%" justify="center">
            <Text
              fontFamily="'Clash Display', sans-serif"
              color="white"
              fontSize={["30px", "35px", "40px", "50px", "60px"]}
              lineHeight="120%"
              fontWeight="900"
              letterSpacing="-3px"
              textAlign="center"
            >
              <span style={{ color: "green" }}>
                MAU
                <br />
                EARNINGS & DEVELOPMENTS
              </span>
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width={["90%", "86%", "60%", "50%", "60%"]}
            fontSize={["15px", "15px", "17px", "19px"]}
          >
            <Text
              color="#fff"
              lineHeight="120%"
              marginBottom="5px"
              marginTop="10px"
            >
              <b>TRADE AND FLIP MAU NFT’s</b>
              <br />
              ( Trade and flip MAY NFT’S on OPENSEA)
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MauEarning;
