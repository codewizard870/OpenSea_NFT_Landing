import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";

const Card = ({ no }: { no: number }) => {
  return (
    <Flex
      pt={[2, 2, 3, 4]}
      pb={[2, 2, 3, 4]}
      bg="#000"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // w={["270px","300px","350px","400px","450px"]}
      h="100%"
      w="100%"
      position="relative"
      display="inline-block"
      whiteSpace="normal"
      verticalAlign="top"
      mr="20px"
    >
      <Text
        fontFamily="'Clash Display', sans-serif"
        color="yellow"
        fontSize={["18px", "20px", "25px", "30px"]}
        lineHeight="120%"
        fontWeight="800"
        textAlign="center"
      >
        {no + 1}
      </Text>
      <CardContent no={no} />
    </Flex>
  );
};

const CardContent = ({ no }: { no: number }) => {
  if (no === 0) {
    return (
      <>
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["20px", "25px", "30px", "35px"]}
          lineHeight="120%"
          fontWeight="800"
          pt={4}
          textAlign="center"
        >
          WORLDWIDE META
          <br />
          APES UNIVERSE
          <br />
          LAUNCHING
        </Text>
        <Text
          color="#fff"
          p={3}
          textAlign="center"
          fontSize={["13px", "15px", "16px", "18px"]}
          lineHeight="120%"
          mb="10px"
          mt="20px"
        >
          Creating biggest online MAU communities,
          <br />
          <br />
          INSTAGRAM, TWITTER, DISCORD, TELEGRAM
          <br />
          <br />
          Join MAU communities to be in the centre of every new upcoming events,
          news, giveaways and new plans!
          <br />
          <br />
        </Text>
      </>
    );
  } else if (no === 1) {
    return (
      <>
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["20px", "25px", "30px", "35px"]}
          lineHeight="120%"
          fontWeight="800"
          pt={4}
          textAlign="center"
        >
          MINT AND <br/>SALE
        </Text>
        <Text
          color="#fff"
          p={3}
          textAlign="center"
          fontSize={["13px", "15px", "16px", "18px"]}
          lineHeight="120%"
          mb="10px"
          mt="20px"
        >
          Having created the MAU community, we will run 3k spots GIVEAWAY for
          WHITELIST SPOTS for MINTING on our website.
          <br />
          <br />
          3k NFT'S will be available for MINT.
          <br />
          <br />
          After the mint, we will open a public sale on OPENSEA.
          <br />
          <br />
          Where you will be able to buy the remaining 7K NFT'S.
          <br />
          <br />
        </Text>
      </>
    );
  } else if (no === 2) {
    return (
      <>
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["20px", "25px", "30px", "35px"]}
          lineHeight="120%"
          fontWeight="800"
          pt={4}
          textAlign="center"
        >
          META APES
          <br />
          UNIVERSE REVEAL
        </Text>
        <Text
          color="#fff"
          p={3}
          textAlign="center"
          fontSize={["13px", "15px", "16px", "18px"]}
          lineHeight="120%"
          mb="10px"
          mt="20px"
        >
          Each META APES UNIVERSE NFT is a uniquely developed technology and
          several new opportunities for our customers.
          <br />
          <br />
          After the SOLD OUT of the collection, we will conduct a REVEAL of our
          Collection.
          <br />
          <br />
          You will see which NFT has fallen to you.
          <br />
          <br />
          How RARE, PROFITABLE and UNIQUE is it.
          <br />
          <br />
          What opportunities it can bring you.
          <br />
          <br />
          And much more!
          <br />
          <br />
        </Text>
      </>
    );
  } else if (no === 3) {
    return (
      <>
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["20px", "25px", "30px", "35px"]}
          lineHeight="120%"
          fontWeight="800"
          pt={4}
          textAlign="center"
        >
          META APES UNIVERSE CLUB
        </Text>
        <Text
          color="#fff"
          p={3}
          textAlign="center"
          fontSize={["13px", "15px", "16px", "18px"]}
          lineHeight="120%"
          mb="10px"
          mt="20px"
        >
          MAU CLUB is a privileged club for the MAU NFT holder’s and all MAU
          users.
          <br />
          <br />
          Receive any advice, consultations, and directions from our team in
          person at online conferences.
          <br />
          <br />
          Join our online communities in
          <br />
          <br />
          INSTAGRAM, TWITTER, DISCORD, TELEGRAM
          <br />
          <br />
          Be in the center of all events!
          <br />
          <br />
          Participate in sweepstakes from our team and much more will be waiting
          for you in our communities!
          <br />
          <br />
        </Text>
      </>
    );
  } else if (no === 4) {
    return (
      <>
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["20px", "25px", "30px", "35px"]}
          lineHeight="120%"
          fontWeight="800"
          pt={4}
          textAlign="center"
        >
          MAUGO
        </Text>
        <Text
          color="#fff"
          p={3}
          textAlign="center"
          fontSize={["13px", "15px", "16px", "18px"]}
          lineHeight="120%"
          mb="10px"
          mt="20px"
        >
          MAUGO is a Move 2 Earn game. <br />
          <br />
          Use your city as a map and location to search for MAU APES.
          <br />
          <br /> Find and catch MAU APES and earn daily!
          <br />
          <br /> Play and earn anywhere in the world!
          <br />
          <br /> No time limits, no recharging, no extra fees.
          <br />
          <br /> Use your NFT as a pass card for playing.
        </Text>
      </>
    );
  } else if (no === 5) {
    return (
      <>
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["20px", "25px", "30px", "35px"]}
          lineHeight="120%"
          fontWeight="800"
          pt={4}
          textAlign="center"
        >
          BUILDING THE MAUVERSE
        </Text>
        <Text
          color="#fff"
          p={3}
          textAlign="center"
          fontSize={["13px", "15px", "16px", "18px"]}
          lineHeight="120%"
          mb="10px"
          mt="20px"
        >
          Our team is actively developing our online crypto world and system -
          MAUVERSE
          <br />
          <br />
          MAUVERSE will provide a huge number of new online opportunities for
          our users.
          <br />
          <br />
          Such as:
          <br />
          <br />
          Work and daily earnings,
          <br />
          <br />
          Studying and education opportunities,
          <br />
          <br />
          MAU Real estate business opportunities,
          <br />
          <br />
          Create your own business and build your own empire in MAUVERSE,
          <br />
          <br />
          Work with your friends in our online offices,
          <br />
          <br />
          Communicate and meet new friends,
          <br />
          <br />
          Play games and have fun,
          <br />
          <br />
          And much more is coming!
          <br />
          <br />
        </Text>
      </>
    );
  }

  return <></>;
};

export default Card;
