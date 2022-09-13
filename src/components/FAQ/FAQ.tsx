import React, { useState } from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
const FAQ = (props: any) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      paddingTop={["3em", "3em", "3em", "5em"]}
      paddingBottom={["3em", "3em", "3em", "5em"]}
      bg="#161616"
      {...props}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        maxWidth={["none", "92vw", "92vw", "1200px"]}
      >
        <Text
          fontFamily="'Clash Display', sans-serif"
          color="white"
          fontSize={["35px", "35px", "45px", "45px"]}
          lineHeight="120%"
          fontWeight="900"
          textAlign="center"
        >
          FREQUENTLY ASKED
          <br />
          QUESTIONS
        </Text>
      </Flex>
      <Flex width="90vw" justifyContent="center">
        <Flex maxWidth="1200px" width="100%" mt={6} flexDirection="column">
          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      WHAT IS META APES UNIVERSE CLUB?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                Meta Apes Universe Club is High tech NFT project, that aims to
                create new online opportunities for all our users.
                <br />
                <br />
                A unique high-tech collection of 10k NFT’S
                <br />
                <br />
                Creating a new online virtual reality world full of new
                opportunities for everyone - MAUVERSE
                <br />
                <br />
                New MOVE 2 EARN game MAUGO
                <br />
                <br />
                The first jobs in the online world MAUVERSE!
                <br />
                <br />
                And much more!
                <br />
                <br />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      WHAT OPPORTUNITIES WILL YOU GET WITH MAU NFT’S?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                By purchasing MAU NFT, you will be able to play MAUGO and earn
                daily.
                <br />
                <br />
                By purchasing MAU NFT you will automatically get 1 property in
                MAUVERSE for free.
                <br />
                <br />
                Earn money trading MAU NFT’S on OPENSEA.
                <br />
                <br />
                Access to the privileged MAU CLUB.
                <br />
                <br />
                By purchasing MAU NFT, you automatically get an online residence
                in MAUVERSE.
                <br />
                <br />
                And much more is coming soon!
                <br />
                <br />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      HOW TO GET WHITELISTED FOR MINT?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                There will be 3k WHITELIST spots available.
                <br />
                <br />
                You can get a whitelist spot by:
                <br />
                <br />
                Wining a GIVEAWAYS,
                <br />
                <br />
                Participating in community activities,
                <br />
                <br />
                Helping and be active with other users in our communities,
                <br />
                <br />
                And more info is coming soon!
                <br />
                <br />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      WHAT WILL THE STARTING MINT PRICE BE?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                115$ = ETH
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      WHAT IS MAUVERSE?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                MAUVERSE is a software and online world running on ETH
                Blockchain.
                <br />
                <br />A global network of users living in an online virtual
                reality world, where you can work, play, study, find new friends
                from all over the world, buy and rent real estate, build your
                own business, buy and sell DEFI items and much more!
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      IS THERE ARE ANY AGE LIMITS?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                Absolutely NOT! The project is aimed at any age category.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem
              bg="black"
              color="white"
              borderColor="#161616"
              borderWidth="10px"
            >
              <h2>
                <AccordionButton>
                  <Box flex="1">
                    <Text
                      textAlign="left"
                      textTransform="uppercase"
                      p="10px"
                      _hover={{ color: "yellow" }}
                      fontSize={["14px", "16px", "18px", "20px"]}
                      fontWeight="900"
                      textShadow="2px 2px 8px rgba(0, 255, 40, 0.8), -2px -2px 8px rgba(0, 255, 40, 0.8), 5px 5px 20px rgba(0, 255, 40, 0.8), -5px -5px 20px rgba(0, 255, 40, 0.8)"
                      lineHeight="96%"
                    >
                      WHAT IF I DON’T KNOW ANYTHING CRYPTO?
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pt={5}>
                It's not a problem! META APES UNIVERSE CLUB is very easy to use!
                <br />
                <br />
                You can find all the detailed videos about our project using
                tutorials and working with it in our social medias.
                <br />
                <br />
                Our project is suitable even for those people who have never
                been interconnected with crypto and NFT world!
                <br />
                <br />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FAQ;
