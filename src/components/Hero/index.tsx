import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import ButtonPrimary from "../ButtonPrimary";
const Hero = (props: any) => {
  return (
    <HeroContainer {...props}>
      <WelcomeContainer>
        <WelcomeImg />
        <Flex
          direction={{ base: "column", lg: "column" }}
          width={{ base: "100%", lg: "50%" }}
          align="center"
          justify="center"
          columnGap="50px"
          h="100%"
        >
          <Text
            color="white"
            fontSize={["16px", "16px", "18px", "18px"]}
            lineHeight="160%"
            marginBottom="30px"
            textAlign="center"
          >
            <b>META APES UNIVERSE CLUB</b> - An Innovative crypto project built
            on ETH blockchain. <br />
            <br />
            We are limited <b>HIGH-TECH NFT</b> collection of 10k unique&nbsp;
            <b>NFT MAU</b>
            tokens. Our team want to provide people with new opportunities that
            can improve their lives. <br />
            <br />
            MAU team developing <b>MAUVERSE</b> - a new online world full of new
            opportunities for everyone!&nbsp;
            <b>DEVELOP, EARN, COMMUNICATE, ENTERTAIN</b>
            &nbsp;and&nbsp;<b>LIVE</b> with <b>MAU</b>.
          </Text>
          <Flex justify="center">
            <ButtonPrimary
              to="https://opensea.io/collection/alphakongsclub"
              name="Mint Soon"
              width="300px"
            />
          </Flex>
        </Flex>
        <HeroImg />
      </WelcomeContainer>
    </HeroContainer>
  );
};

const WelcomeImg = (props: any) => {
  const blink = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  `;
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${blink} 2s infinite`;

  return (
    // <Image
    //     src="/welcometext.png"
    //     w="100%"
    // />
    <Text
      animation={animation}
      fontSize={["30px", "35px", "38px", "42px", "45px"]}
      fontWeight="900"
      fontFamily="'Clash Display', sans-serif"
      color="rgb(255,255,235)"
      textShadow="2px 2px 8px rgba(100, 210, 30, 0.8), -2px -2px 8px rgba(100, 210, 30, 0.8), 5px 5px 20px rgba(80, 200, 20, 0.8), -5px -5px 20px rgba(100, 200, 40, 0.8)"
      textTransform="uppercase"
      textAlign="center"
      lineHeight="96%"
      mb={6}
    >
      Welcome to <br />
      The Meta APES Universe Club
    </Text>
  );
};

const WelcomeContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Flex
      flexDirection="column"
      w={"100%"}
      padding={["30px", "30px", "40px", "60px"]}
      // marginTop={["50px", "50px", "60px", "50px"]}
    >
      {children}
    </Flex>
  );
};

const HeroImg = (props: any) => {
  return (
    <Image
      src="/hero.png"
      position={{ base: "static", lg: "absolute" }}
      left="auto"
      top="auto"
      right="0%"
      bottom="0%"
      // maxWidth="479px"
      w={{ base: "100%", lg: "35vw" }}
      display={["block", "block", "block", "block"]}
    />
  );
};

const HeroContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Flex
      position="relative"
      // alignItems="center"
      backgroundImage="/hero-bg.png"
      backgroundPosition="50% 50%"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      pt="100px"
      h={{ base: "100%", lg: "100vh" }}
      id="about"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Hero;
