import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import Logo from "../../assets/Logo.svg";

const About = (props: any) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      paddingTop={["3em", "3em", "3em", "5em"]}
      paddingBottom={["3em", "3em", "3em", "5em"]}
      bg="#161616"
      position="relative"
      {...props}
    >
      <Image
        position="absolute"
        width={["0%", "30%", "26%", "30%", "25%"]}
        display={["none", "none", "block", "block", "block"]}
        // left="auto"
        top="0px"
        right="0px"
        src="/about/neon.png"
      />
      <Image
        position="absolute"
        width={["0%", "30%", "26%", "30%", "200px"]}
        display={["none", "none", "block", "block", "block"]}
        // left="auto"
        top="30px"
        left="0px"
        src={Logo}
      />
      <Box
        maxWidth={["88vw", "86vw", "66vw", "66vw"]}
        textAlign="left"
        fontSize="15px"
        zIndex="2"
      >
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["30px", "30px", "40px", "40px"]}
          lineHeight="120%"
          fontWeight="900"
          textAlign="center"
        >
          <span style={{ color: "green" }}>
            META APES UNIVERSE
            <br />
          </span>
          READY FOR NEW OPPERTUNITIES?
        </Text>
        <Text
          color="#fff"
          lineHeight="120%"
          marginBottom="10px"
          marginTop="20px"
          fontSize="18px"
        >
          <b>META APES UNIVERSE CLUB</b> is a project that will change the
          industry of NFT projects, with its new, stable, interesting and
          profitable opportunities for our users.
          <br />
          <br />
          <b>MAU team</b> creates its own online world, <b>MAUVERSE!</b>
          <br />
          <br />
          <b>In MAUVERSE</b> you will be able to live using your &nbsp;
          <b>NFT, study, work, play, communicate, create, earn daily</b>&nbsp;
          and much more!
          <br />
          <br />
          <b>MAU NFT'S</b> is not just digital art, it is primarily a high-tech
          gadget that will open up new opportunities for you in the&nbsp;
          <b>
            field of earnings, life, communications, education and
            entertainment.
          </b>
          <br />
          <br />
          We have also prepared MAU MOVE TO EARN opportunities for you!&nbsp;
          <b>META APES UNIVERSE</b> will be the first crypto project that will
          provide permanent online jobs in its online world MAUVERSE.
          <br />
          <br />
          Every <b>FIRST MAU NFT</b> owner will get a FREE&nbsp;
          <b>plot of land</b>&nbsp; in&nbsp;
          <b>MAUVERSE!</b>
          <br />
          <br />
          The sale of land plots will begin after the sold out of the&nbsp;
          <b>MAU NFT</b>&nbsp; collection.
          <br />
          <br />
          And much more is coming soon!
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
