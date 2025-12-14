"use client";
import NextLink from "next/link";
import { Box, Flex, HStack, Text, Link, Button, Container } from "@chakra-ui/react";
import { LayoutDashboard, Phone, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg="white"
      boxShadow="sm"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="1200px">
        <Flex align="center" justify="space-between" py={4}>
          {/* Logo mejorado - Izquierda */}
          <NextLink href="/" passHref legacyBehavior>
            <Box
              as="a"
              _hover={{ textDecoration: "none" }}
              cursor="pointer"
            >
              <Flex align="center" gap={2}>
                <Box
                  w={10}
                  h={10}
                  bg="linear-gradient(135deg, #319795 0%, #2C7A7B 100%)"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="md"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    letterSpacing="tight"
                  >
                    D+
                  </Text>
                </Box>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, teal.600, teal.500)"
                  bgClip="text"
                  letterSpacing="tight"
                  color="teal.600"
                >
                  DermaPlus
                </Text>
              </Flex>
            </Box>
          </NextLink>

          {/* Links de navegación - Derecha */}
          <HStack gap={2}>
            <NextLink href="/" passHref legacyBehavior>
              <Box
                as="a"
                px={4}
                py={2}
                borderRadius="md"
                fontWeight="semibold"
                color={isActive("/") ? "teal.600" : "gray.700"}
                bg={isActive("/") ? "teal.50" : "transparent"}
                _hover={{
                  bg: isActive("/") ? "teal.50" : "gray.50",
                  color: "teal.600",
                  textDecoration: "none",
                }}
                transition="all 0.2s"
                display="flex"
                alignItems="center"
                gap={2}
                cursor="pointer"
              >
                <Home size={18} />
                Inicio
              </Box>
            </NextLink>

            <NextLink href="/contact" passHref legacyBehavior>
              <Box
                as="a"
                px={4}
                py={2}
                borderRadius="md"
                fontWeight="semibold"
                color={isActive("/contact") ? "teal.600" : "gray.700"}
                bg={isActive("/contact") ? "teal.50" : "transparent"}
                _hover={{
                  bg: isActive("/contact") ? "teal.50" : "gray.50",
                  color: "teal.600",
                  textDecoration: "none",
                }}
                transition="all 0.2s"
                display="flex"
                alignItems="center"
                gap={2}
                cursor="pointer"
              >
                <Phone size={18} />
                Contacto
              </Box>
            </NextLink>

            <NextLink href="/dashboard" passHref legacyBehavior>
              <Button
                as="a"
                colorScheme="teal"
                size="md"
                boxShadow="sm"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                transition="all 0.2s"
                display="inline-flex"
                alignItems="center"
                gap={2}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Button>
            </NextLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}