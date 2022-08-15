import React from "react"
import { Box, Text, Flex } from "@chakra-ui/react"
import { ReactComponent as LogoSvg } from './../../assets/Logo.svg'
export default function Logo(props: any) {
  return (
    <Box {...props}>
      {/* <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text> */}
      <Box>
        <LogoSvg width="60px" height="60px" />
      </Box>      
    </Box>
  )
}