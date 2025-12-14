"use client";
import LeadForm from "@/components/landing/LeadForm";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Calle 123 #45-67, Chapinero",
      subtitle: "Bogotá, Colombia",
      color: "teal",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+57 321 456 7890",
      subtitle: "WhatsApp disponible",
      color: "cyan",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@dermaplus.com",
      subtitle: "Respuesta en 24h",
      color: "blue",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Vie: 8:00 - 18:00",
      subtitle: "Sáb: 9:00 - 14:00",
      color: "green",
    },
  ];

  const benefits = [
    {
      icon: Calendar,
      text: "Agenda tu cita online",
    },
    {
      icon: MessageCircle,
      text: "Respuesta inmediata",
    },
  ];

  return (
    <Box
      bg="linear-gradient(135deg, #E6FFFA 0%, #FFFFFF 50%, #E0F2FE 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Elementos decorativos */}
      <Box
        position="absolute"
        top="-5%"
        right="-5%"
        w="400px"
        h="400px"
        bg="teal.100"
        opacity={0.15}
        borderRadius="full"
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-5%"
        left="-5%"
        w="350px"
        h="350px"
        bg="cyan.100"
        opacity={0.15}
        borderRadius="full"
        filter="blur(60px)"
      />

      <Container maxW="1200px" py={20} position="relative">
        {/* Header */}
        <Stack gap={6} textAlign="center" mb={12}>
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
              <MessageCircle size={16} />
              Estamos aquí para ayudarte
            </Text>
          </Box>

          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            color="gray.800"
          >
            Contáctanos
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="700px"
            mx="auto"
          >
            ¿Listo para lucir tu mejor piel? Nuestro equipo de dermatólogos
            expertos está aquí para ayudarte.
          </Text>

          {/* Benefits */}
          <Flex gap={6} justify="center" flexWrap="wrap" pt={4}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Flex key={index} align="center" gap={2}>
                  <Box p={2} bg="teal.50" borderRadius="lg" color="teal.600">
                    <Icon size={18} />
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    {benefit.text}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Stack>

        {/* Información de contacto */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6} mb={12}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
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
                  borderColor: `${info.color}.200`,
                }}
                transition="all 0.3s"
              >
                <Stack gap={3} align="center" textAlign="center">
                  <Box
                    p={3}
                    bg={`${info.color}.50`}
                    borderRadius="lg"
                    color={`${info.color}.600`}
                  >
                    <Icon size={24} />
                  </Box>
                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                      mb={1}
                    >
                      {info.title}
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      color="gray.800"
                      mb={1}
                    >
                      {info.content}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      {info.subtitle}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>

        {/* Formulario */}
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="2xl"
          border="1px solid"
          borderColor="gray.100"
          overflow="hidden"
        >
          <LeadForm />
        </Box>

        {/* Nota final */}
        <Box
          mt={8}
          p={6}
          bg="teal.50"
          borderRadius="xl"
          border="1px solid"
          borderColor="teal.100"
        >
          <Stack gap={2} textAlign="center">
            <Text fontSize="sm" fontWeight="semibold" color="teal.800">
              💡 Agenda tu valoración sin compromiso
            </Text>
            <Text fontSize="sm" color="teal.700">
              Nuestro equipo te contactará en menos de 24 horas para coordinar
              tu cita
            </Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
