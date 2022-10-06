import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { ReactComponent as InstagramIcon } from "./../../assets/Instagram_Icon.svg";
import { ReactComponent as TwitterIcon } from "./../../assets/Twitter_Icon.svg";
import { ReactComponent as DiscordIcon } from "./../../assets/Discord_Icon.svg";
import Logo from "./../Nav/Logo";
import ButtonPrimary from "../ButtonPrimary";

const Footer = () => {
  return (
    <Flex
      paddingTop="3em"
      paddingBottom="3em"
      bg="#000"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Logo w="50px" color={["white", "white", "primary.500", "primary.500"]} />
      <SocialLinks />
      <Text pt={6} color="white">
        © 2022 META APES UNIVERSE | All Rights Reserved
      </Text>
    </Flex>
  );
};

const SocialItem = ({
  children,
  to = "/",
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link href={to} isExternal>
      {children}
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <Box>
      <Stack spacing={8} align="center" direction="row" pt={6}>
        <SocialItem to="https://instagram.com/meta_apes_universe_club?igshid=MDE2OWE1N2Q=">
          <InstagramIcon width="25px" height="25px" />
        </SocialItem>
        <SocialItem to="https://twitter.com/universeapes?s=21&t=zpIpgo4sqPOAab6sz3-o7w">
          <TwitterIcon width="25px" height="25px" />
        </SocialItem>
        <SocialItem to="https://discord.gg/5rSYcPXKtm">
          <DiscordIcon width="25px" height="25px" />
        </SocialItem>
      </Stack>
    </Box>
  );
};

export default Footer;
