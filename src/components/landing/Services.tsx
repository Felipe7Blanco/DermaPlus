"use client";
import { Box, SimpleGrid, Heading, Text, Stack, Container, Flex } from "@chakra-ui/react";
import { Sparkles, Droplet, Zap, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Facial",
    description: "Elimina impurezas y revitaliza tu piel.",
    features: ["Extracción profunda", "Hidratación intensiva", "Piel renovada"],
    color: "teal",
  },
  {
    icon: Droplet,
    title: "Botox",
    description: "Reduce líneas de expresión de forma segura.",
    features: ["Resultados naturales", "Procedimiento rápido", "Sin tiempo de recuperación"],
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Depilación Láser",
    description: "Resultados duraderos con tecnología avanzada.",
    features: ["Tecnología de punta", "Indoloro", "Resultados permanentes"],
    color: "blue",
  },
  {
    icon: Activity,
    title: "Tratamientos Corporales",
    description: "Moldea y tonifica tu cuerpo.",
    features: ["Reafirmación", "Tonificación", "Resultados visibles"],
    color: "green",
  },
];

export default function Services() {
  return (
    <Box 
      id="servicios"
      py={20} 
      bg="gray.50"
      position="relative"
      overflow="auto"
    >
      {/* Elemento decorativo */}
      <Box
        position="absolute"
        top="10%"
        right="-10%"
        w="500px"
        h="500px"
        bg="teal.100"
        opacity={0.1}
        borderRadius="full"
        filter="blur(80px)"
      />

      <Container maxW="1200px" position="relative">
        {/* Header de la sección */}
        <Stack gap={4} textAlign="center" mb={12}>
          <Box
            px={4}
            py={2}
            bg="white"
            borderRadius="full"
            boxShadow="sm"
            border="1px solid"
            borderColor="teal.100"
            alignSelf="center"
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="teal.600"
              display="inline-flex"
              alignItems="center"
              gap={2}
            >
              <Sparkles size={16} />
              Tratamientos especializados
            </Text>
          </Box>

          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
          >
            Nuestros Servicios
          </Heading>

          <Text 
            fontSize="lg" 
            color="gray.600" 
            maxW="600px" 
            mx="auto"
          >
            Ofrecemos una amplia gama de tratamientos dermatológicos
            con tecnología de última generación
          </Text>
        </Stack>

        {/* Grid de servicios */}
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 4 }} 
          gap={6}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Box
                key={service.title}
                p={6}
                bg="white"
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor="gray.100"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "2xl",
                  borderColor: `${service.color}.200`,
                }}
                transition="all 0.3s ease"
                cursor="pointer"
                position="relative"
                overflow="hidden"
              >
                {/* Indicador de número */}
                <Box
                  position="absolute"
                  top={4}
                  right={4}
                  w={8}
                  h={8}
                  bg={`${service.color}.50`}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text 
                    fontSize="xs" 
                    fontWeight="bold" 
                    color={`${service.color}.600`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                </Box>

                <Stack gap={4}>
                  {/* Icono */}
                  <Box
                    w={14}
                    h={14}
                    bg={`${service.color}.50`}
                    borderRadius="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color={`${service.color}.600`}
                  >
                    <Icon size={28} />
                  </Box>

                  {/* Título y descripción */}
                  <Box>
                    <Heading 
                      size="md" 
                      mb={2}
                      color="gray.800"
                    >
                      {service.title}
                    </Heading>
                    <Text 
                      color="gray.600" 
                      fontSize="sm"
                      lineHeight="tall"
                    >
                      {service.description}
                    </Text>
                  </Box>

                  {/* Features */}
                  <Stack gap={2}>
                    {service.features.map((feature, idx) => (
                      <Flex 
                        key={idx} 
                        align="center" 
                        gap={2}
                      >
                        <Box
                          w={1.5}
                          h={1.5}
                          bg={`${service.color}.500`}
                          borderRadius="full"
                        />
                        <Text 
                          fontSize="xs" 
                          color="gray.600"
                          fontWeight="medium"
                        >
                          {feature}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  {/* Call to action */}
                  <Flex 
                    align="center" 
                    gap={2} 
                    mt={2}
                    color={`${service.color}.600`}
                    fontSize="sm"
                    fontWeight="semibold"
                    _groupHover={{
                      gap: 3,
                    }}
                    transition="all 0.2s"
                  >
                    <Text>Más información</Text>
                    <ArrowRight size={16} />
                  </Flex>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>

        {/* Footer de la sección */}
        <Box 
          mt={12} 
          textAlign="center"
          p={8}
          bg="white"
          borderRadius="2xl"
          boxShadow="md"
          border="1px solid"
          borderColor="gray.100"
        >
          <Stack gap={4} align="center">
            <Heading size="md" color="gray.800">
              ¿No encuentras lo que buscas?
            </Heading>
            <Text color="gray.600" maxW="500px">
              Contamos con más tratamientos especializados. 
              Contáctanos para una consulta personalizada.
            </Text>
            <Flex gap={3}>
              <Box
                px={6}
                py={3}
                bg="teal.600"
                color="white"
                borderRadius="lg"
                fontWeight="semibold"
                cursor="pointer"
                _hover={{
                  bg: "teal.700",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                Agendar consulta
              </Box>
              <Box
                px={6}
                py={3}
                bg="white"
                color="teal.600"
                borderRadius="lg"
                fontWeight="semibold"
                border="2px solid"
                borderColor="teal.600"
                cursor="pointer"
                _hover={{
                  bg: "teal.50",
                }}
                transition="all 0.2s"
              >
                Ver todos los servicios
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}