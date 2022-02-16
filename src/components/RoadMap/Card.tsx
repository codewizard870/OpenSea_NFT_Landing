import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";

const Card = ({no}:{no:number}) => {
    return (
        <Flex
        pt={[2,2,3,4]}
        pb={[2,2,3,4]}
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
            color="yellow" fontSize={["18px","20px","25px","30px"]}
            lineHeight="120%" fontWeight="800" textAlign="center"
        >{no+1}</Text>
        <CardContent no={no} />
    </Flex> 
    );
};

const CardContent = ({no}:{no:number}) =>{
    if (no===0){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >THE GRAND<br />
                OPENING</Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    As soon as our artists finish their magnum opus, paying careful attention to every last detail… The Alpha Kongs Club opens its gates to an exclusive guest list of 8,888 visionaries. Each member carries <span style={{fontFamily:"'Clash Display', sans-serif"}}>THEIR OWN UNIQUE BLUE CHIP NFT</span>.
                    <br /><br />
                    The quality of these digital membership cards will be up to par with modern art collections. As you’ll see, our artists’ eye for detail is unmatched by anyone in the NFT space. Because of the artistic value of their work, you’ll be happy to collect artwork that appreciates in value.
                </Text>
            </>
        )
    }else if (no===1){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >GIVING BACK TO<br />
                THE OG KONGS</Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    Gorillas have been misrepresented for decades as fearsome animals. But it’s time to change the narrative. Mountain Gorillas share 98% of the human DNA. They’re practically family. And yet, there’s only 1,000 of them left.
                    <br /><br />
                    We need to save them.
                    <br /><br />
                    And that’s what the AKC community is going to do. We partnered with award-winning musician, <span style={{fontFamily:"'Clash Display', sans-serif"}}>KIESZA AND THE DIAN FOSSEY GORILLA FUND</span> to leverage the power of NFTs and save the real Kongs. With your help, we can make a difference in the world.
                </Text>
            </>
        )
    }else if (no===2){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >REVEAL THE<br />
                LEGENDARIES</Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    Each Alpha Kong is an awe-inspiring work of art. However, a special few Legendary Alpha Kongs will stand out even in this collection. Some lucky members that are among us right now will get their hands on them.
                    <br /><br />
                    Their goal is to go viral, represent the project in the best possible light and quickly draw more investors and fans into the community. This will be achieved by showcasing unique designs worthy of mainstream recognition.
                </Text>
            </>
        )
    }else if (no===3){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >THE ALPHA KONGS<br />
                ECOSYSTEM</Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    The Club has <span style={{fontFamily:"'Clash Display', sans-serif"}}>GRAND PLANS FOR THE FUTURE</span>. Early supporters won’t believe what we have in store for them. They just need to keep their blue chip digital art safe.That’s all you need to thrive in the world of NFTs.
                    <br /><br />
                    You’ll meet like minded friends, build real connections, and feel home in an Ecosystem that’s built for you. Our goal is to take this exclusive club of international investors and crypto visionaries and take over the Metaverse with them. Our focus on community-building was only a taste of what this is going to look like.
                </Text>
            </>
        )
    }else if (no===4){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >UNLEASH THE BLUE<br />
                BANANA SERUM</Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    In the deepest part of the jungle, Alpha Kong scouts found a strange relic. When they brought it back to the tribe, Alpha Kong sages grasped. <span style={{fontFamily:"'Clash Display', sans-serif"}}>“JUST AS THE LEGENDS FORETOLD.”</span> This strange, <span style={{fontFamily:"'Clash Display', sans-serif"}}>FUTURISTIC BLUE BANANA</span> will save the entire species.
                    <br /><br />
                    Why, we don’t know yet. But this relic from the future carries great strength in itself. It’s so powerful in fact, that it shatters any other primates who try to touch it. Not the Alpha Kongs though. Slowly, it transforms them into something never seen before.
                    <br /><br />
                    They feel a great sense of power when they hold the relic. If the legends are true, those strong enough to hold their Alpha Kongs for 2 months will be getting the Blue Banana Serum. Consuming this will clone them, and transform their old selves into something never seen before... Their final form:
                    <br /><br />
                    <span style={{fontFamily:"'Clash Display', sans-serif"}}>THE OMEGA KONG</span>.
                </Text>
            </>
        )
    }
    return (<></>)
}

export default Card