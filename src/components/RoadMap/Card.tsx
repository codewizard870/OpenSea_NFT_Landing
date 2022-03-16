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
                >
                    WORLDWIDE META<br />APES UNIVERSE<br/>LAUNCHING
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    We are getting to know the world and creating our own incredible Discord community!
                    <br/><br/>
                    <span style={{fontFamily:"'Clash Display', sans-serif"}}>
                    As well as INSTAGRAM and TWITTER
                    </span>
                    <br /><br/>
                    Join our Discord community to get access to FIRST MINT, sweepstakes, consultations and much more.
                    <br />
                    10,000 NFT are coming and more then 100,000 Online billboards 
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
                >
                    GOING ON<br/> SALE
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    Having overcome 150,000 people in our MAU community in DISCORD, we will thank our community by giving 15 LEGENDARY NFTs, after which we will open our WHITELIST for PRE-SALE MINT, which would give our participants a chance to buy our NFT’s at a starting and lower price.
                    <br/><br/>
                    After that, a limited MINT will be released at the starting price on our website, and then there will be drops for PUBLIC SALE on OPENSEA
                    <br/><br/>
                    We will tell you our four-stage system of selling and putting our NFT’S on sale.
                    And you will learn the classifications of our NFT by rarity.
                    <br/><br/>
                    Follow our discord to be in the center of events!

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
                >
                    META APES<br />UNIVERSE REVEAL
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                Each META APES UNIVERSE NFT is a uniquely developed technology and a number of new opportunities for our customers.
                <br/><br/>
                Our Legendary NFTs will become THE MOST PROFITABLE AND LARGEST places on our online billboards.
                <br/><br/>
                Revealing our incredibly creative collection. You will finally be able to see what kind of NFT has fallen to you and how profitable and rare it is!
                <br/><br/>
                Your NFT will determine which place on the advertising billboard has fallen to you, and soon you will be able to build your business on the MAU P2P platform!
                <br/><br/>
                All owners of our NFTs will be able to get an advertising space on the billboard for free and start earning from the ability to sell it or give for rent as early as possible!
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
                >
                    MAU CLUB!
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    MAU CLUB is a privileged club for the holders of our NFT.
                    The club will open immediately after SOLD OUT.
                    <br/><br/>
                    You will be able to receive any advice, consultations and directions from our team in person at online conferences.
                    <br/><br/>
                    All members of the club will be the first in the lists to receive online vacancies as brokers in online worlds.
                    Free use of our MAU P2P platform for earning, no commissions for buying or selling!
                    <br/><br/>
                    Our team will launch free training on how to start earning from our developments and improve the marketing of your business with the help of our MAU BANNERS.
                    <br/><br/>
                    You will also take part in sweepstakes and receive prizes from our team!
                    <br/><br/>
                    And much more! Follow all the news in our DISCORD community!
                </Text>
            </>
        )
    }else if (no===5){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >
                    BUILDING THE META APES UNIVERSE ONLINE WORLDS PROPERTY
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    Having gathered all the forces, we will continue the global development and purchase of land in the territories of the three largest online worlds like DECENTRALAND, SANDBOX and METAWERSE. 
                    <br/><br/>
                    Where we will locate our avenues and districts where our ONLINE BILLBOARDS and advertisements will be placed.
                    <br/><br/>
                    Our 3D graphic designers will create incredible skyscrapers and buildings in the FUTURISTIC style, for maximum enjoyment in the future!
                </Text>
            </>
        )
    }else if (no===6){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >
                    MAU P2P EARNING PLATFORM
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    As soon as the first 5000 Buildings with billboards are ready, we will launch our MAU P2P platform for earning and working with our NFT, advertising spaces and billboards.
                    <br/><br/>
                    On MAU 2P2 you will be able to buy, sell, or rent an advertising space and a billboard that suits your requirements.
                    <br/><br/>
                    The platform will function as a special marketplace with P2P opportunities. 
                    Our team will provide you with a high-tech platform for comfortable work and stable online earnings.
                </Text>
            </>
        )
    }else if (no===7){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >
                   META APES UNIVERSE ONLINE JOBS
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    When our universe will be half developed, we will start launching hundreds of thousands of online vacancies for online earnings for everyone.
                    <br/><br/>
                    We will open 3 large online offices in the online worlds like DECENTRALAND, SANDBOX and METAVERSE, which will work 24/7.
                    <br/><br/>
                    MAU TEAM will open vacancies for brokers selling, renting, or searching for billboards for clients who want to purchase a place on any billboard for their realms.
                    <br/><br/>
                    We will create a salary system that will depend on the number of hours worked and the percentage of sales of the advertising space or its delivery.
                    <br/><br/>
                    Payments to employees will mainly be received in ETH after each hour worked.
                    <br/><br/>
                    There will also be dozens of other vacancies such as sales manager, marketing manager, business communications, consulting, and graphic designers and much more
                </Text>
            </>
        )
    }else if (no===8){
        return (
            <>
                <Text
                    fontFamily="'Clash Display', sans-serif"
                    color="white" fontSize={["20px","25px","30px","35px"]}
                    lineHeight="120%" fontWeight="800" pt={4} textAlign="center"
                >
                    FIRST SPECIALIZED NFT WALLET<br/>(MAU WALLET)
                </Text>
                <Text color="#fff" p={3} textAlign="center" fontSize={["13px","15px","16px","18px"]} lineHeight="120%" mb="10px" mt="20px">
                    The MAU team is creating a new kind of crypto wallet for storing both coins and NFT tokens.
                    MAU WALLET is specialized in the most comfortable storage of NFT tokens as well as their sending.
                    <br/><br/>
                    Our development is created using Advanced Encryption Standard (AES), which allows our wallet to be as secure and invulnerable as possible. 
                    And with the Keccak256 cryptographic hash function, which is used in the ETH coin.
                    <br/><br/>
                    Our goal is to create the most convenient and reliable storage of NFT assets for everyone.
                    <br/><br/>
                    Our wallet will be able to hold thousands of NFT.
                    <br/><br/>
                    And also, with the help of the P2P function, we will open the opportunity to exchange and sell NFT without any intermediaries and commissions!
                </Text>
            </>
        )
    }
    return (<></>)
}

export default Card