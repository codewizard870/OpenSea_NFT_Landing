import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack, Accordion, AccordionIcon, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
const FAQ = (props:any) => {    
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            paddingTop={["3em","3em","3em","5em"]}
            paddingBottom={["3em","3em","3em","5em"]}
            bg="#161616"
        {...props}>
            <Flex alignItems="center" flexDirection="column" justifyContent="center" maxWidth={["none", "92vw", "92vw", "1200px"]}>                
                <Text fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["35px","35px","45px","45px"]}
                    lineHeight="120%" fontWeight="900"  textAlign="center"              
                >FREQUENTLY ASKED<br />
                QUESTIONS
                </Text>                                   
            </Flex>            
            <Flex width="90vw" justifyContent="center">
            <Flex maxWidth="1200px" width="100%" mt={6} flexDirection="column">                
                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' textTransform="uppercase" p="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900">
                                When will Alpha Kong Club  officially launch?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            According to the plan, the Club officially kicks off on 31 January. The exact time for the Raffle is 20.00 CET / 14.00 EST, only on this website. Join our discord for more information.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' textTransform="uppercase" padding="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900">
                                How can I join?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            Due to the ambitious scope of the project, hundreds of thousands compete to get an exclusive Alpha Kongs Club Mint Pass. The most dedicated supporters will get first-dibs on this unique piece of 3D art.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' textTransform="uppercase" padding="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900">
                                Is the Alpha Kongs Club a good investment?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            Over two hundred thousand members from all over the world seem to think so. They're lining up to get their hands on their own Alpha Kongs. And for good reasons… 
                            <br /><br />
                            We've got the best art from a proven team of artists who have each left their marks on the mainstream. We've pulled off the first ever NFT Festival, unprecedented in the industry with top DJs playing for you live. We've got plenty of celebrities, entrepreneurs and marketing geniuses to support us. And we're just getting started…
                            <br /><br />
                            With the help of our members, we've created a real movement and step by step, we're becoming a blue chip project on the market. So let us ask the question to you: Is it? ;)
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                
                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' textTransform="uppercase" padding="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900">
                                What  will the  mint price  be?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                            It’s to be announced on Discord, very soon!
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple>
                    <AccordionItem bg="black" color="white" borderColor="#161616" borderWidth="10px">
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' textTransform="uppercase" padding="10px" _hover={{color:"yellow"}} fontSize={["14px","16px","18px","20px"]} fontWeight="900">
                                Can I view my Alpha Kongs now?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt={5}>
                        To view the entire collection, you’ll have to wait. If you can’t wait, we will occasionally publish sneak peaks of some of our handsome Alpha Kongs on Discord.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>       
            </Flex>     
        </Flex>
    );
};

export default FAQ