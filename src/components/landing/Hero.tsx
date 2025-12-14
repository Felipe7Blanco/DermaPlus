"use client";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Flex,
  Link,
  Card,
} from "@chakra-ui/react";
import {
  Droplet,
  Sparkles,
  Zap,
  Activity,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import NextLink from "next/link";

export default function Hero() {
  const services = [
    {
      icon: Sparkles,
      title: "Limpieza Facial",
      description: "Elimina impurezas y revitaliza tu piel",
    },
    {
      icon: Droplet,
      title: "Botox",
      description: "Reduce líneas de expresión de forma segura",
    },
    {
      icon: Zap,
      title: "Depilación Láser",
      description: "Resultados duraderos con tecnología avanzada",
    },
    {
      icon: Activity,
      title: "Tratamientos Corporales",
      description: "Moldea y tonifica tu cuerpo",
    },
  ];

  const benefits = [
    "Equipo médico certificado",
    "Tecnología de última generación",
    "Atención personalizada",
  ];

  return (
    <Card.Root
      position="sticky"
      overflow="hidden"
      bg="linear-gradient(135deg, #E6FFFA 0%, #FFFFFF 50%, #E0F2FE 100%)"
      justifyContent="flex-end"
      alignContent="end"
    >
      <Box
        position="absolute"
        top="-10%"
        left="20%"
        w="400px"
        h="400px"
        bg="teal.100"
        opacity={0.2}
        borderRadius="full"
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="5%"
        w="350px"
        h="350px"
        bg="cyan.100"
        opacity={0.2}
        borderRadius="full"
        filter="blur(60px)"
      />

      <Container maxW="1200px" position="relative" py={20}>
        <Stack gap={8} textAlign="center" alignItems="center">
          <Box
            px={4}
            py={2}
            bg="white"
            borderRadius="full"
            boxShadow="sm"
            border="1px solid"
            borderColor="teal.100"
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="teal.600"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Sparkles size={16} />
              Clínica dermatológica especializada
            </Text>
          </Box>

          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="extrabold"
            color="gray.800"
            lineHeight="shorter"
            maxW="900px"
          >
            Realza tu belleza con{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, teal.500, cyan.500)"
              bgClip="text"
              color="teal.500"
            >
              DermaPlus
            </Box>
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="700px"
            lineHeight="tall"
          >
            Transforma tu piel con los tratamientos más avanzados y el equipo
            médico más calificado. Experimenta la diferencia de atención
            personalizada.
          </Text>

          <Flex gap={6} flexWrap="wrap" justify="center" align="center">
            {benefits.map((benefit, index) => (
              <Flex key={index} align="center" gap={2}>
                <CheckCircle size={18} color="#319795" />
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  {benefit}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex gap={4} flexWrap="wrap" justify="center">
            <Link
              as={NextLink}
              href="/contact"
              colorScheme="teal"
              boxShadow="lg"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s"
              px={8}
            >
              Agenda tu valoración
            </Link>

            <Link
              as={NextLink}
              href="#servicios"
              colorScheme="teal"
              _hover={{
                bg: "teal.50",
              }}
              transition="all 0.3s"
              px={8}
            >
              Ver servicios
            </Link>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            gap={6}
            w="full"
            mt={12}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Box
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                    borderColor: "teal.200",
                  }}
                  transition="all 0.3s"
                  cursor="pointer"
                >
                  <Flex
                    direction="column"
                    align="center"
                    gap={3}
                    textAlign="center"
                  >
                    <Box p={3} bg="teal.50" borderRadius="lg" color="teal.600">
                      <Icon size={24} />
                    </Box>
                    <Text fontWeight="bold" fontSize="md" color="gray.800">
                      {service.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600" lineHeight="short">
                      {service.description}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Card.Root>
  );
}
