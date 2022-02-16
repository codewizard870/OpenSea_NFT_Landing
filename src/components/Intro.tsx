import { Link, Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
const Intro = (props:any) => {
    return (
        <Flex 
            alignItems="center"
            justifyContent="center"
        {...props}>
            <video autoPlay loop  muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="/video.mp4" data-wf-ignore="true" />
            </video>         
        </Flex>
    );
};

export default Intro