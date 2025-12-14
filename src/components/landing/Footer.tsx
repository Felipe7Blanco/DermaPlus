"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
} from "lucide-react";
import NextLink from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { label: "Limpieza Facial", href: "#" },
      { label: "Botox", href: "#" },
      { label: "Depilación Láser", href: "#" },
      { label: "Tratamientos Corporales", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Nuestro Equipo", href: "#" },
      { label: "Testimonios", href: "#" },
      { label: "Blog", href: "#" },
    ],
    legal: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos y Condiciones", href: "#" },
      { label: "Aviso Legal", href: "#" },
      { label: "PQRS", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Elemento decorativo */}
      <Box
        position="absolute"
        top="-50%"
        right="-10%"
        w="500px"
        h="500px"
        bg="teal.600"
        opacity={0.05}
        borderRadius="full"
        filter="blur(80px)"
      />

      <Container maxW="1200px" py={16} position="relative">
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8} mb={12}>
          {/* Columna 1: Logo y descripción */}
          <Stack gap={4}>
            <Flex align="center" gap={2}>
              <Box
                w={10}
                h={10}
                bg="teal.600"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xl" fontWeight="bold" color="white">
                  D+
                </Text>
              </Box>
              <Text fontSize="2xl" fontWeight="bold">
                DermaPlus
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.400" lineHeight="tall">
              Transformando tu piel con los tratamientos más avanzados y el
              equipo médico más calificado de Bogotá.
            </Text>
            {/* Redes sociales */}
            <Flex gap={3} mt={2}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Box
                    key={index}
                    as="a"
                    p={2}
                    bg="gray.800"
                    borderRadius="lg"
                    color="gray.400"
                    _hover={{
                      bg: "teal.600",
                      color: "white",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    <Icon size={18} />
                  </Box>
                );
              })}
            </Flex>
          </Stack>

          {/* Columna 2: Servicios */}
          <Stack gap={4}>
            <Heading size="sm" color="white" mb={2}>
              Servicios
            </Heading>
            <Stack gap={2}>
              {footerLinks.servicios.map((link, index) => (
                <NextLink key={index} href={link.href} passHref legacyBehavior>
                  <Box
                    as="a"
                    fontSize="sm"
                    color="gray.400"
                    _hover={{
                      color: "teal.400",
                      paddingLeft: "8px",
                    }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    {link.label}
                  </Box>
                </NextLink>
              ))}
            </Stack>
          </Stack>

          {/* Columna 3: Empresa */}
          <Stack gap={4}>
            <Heading size="sm" color="white" mb={2}>
              Empresa
            </Heading>
            <Stack gap={2}>
              {footerLinks.empresa.map((link, index) => (
                <NextLink key={index} href={link.href} passHref legacyBehavior>
                  <Box
                    as="a"
                    fontSize="sm"
                    color="gray.400"
                    _hover={{
                      color: "teal.400",
                      paddingLeft: "8px",
                    }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    {link.label}
                  </Box>
                </NextLink>
              ))}
            </Stack>
          </Stack>

          {/* Columna 4: Contacto */}
          <Stack gap={4}>
            <Heading size="sm" color="white" mb={2}>
              Contacto
            </Heading>
            <Stack gap={3}>
              <Flex align="flex-start" gap={3}>
                <Box color="teal.400" mt={0.5}>
                  <MapPin size={18} />
                </Box>
                <Text fontSize="sm" color="gray.400" lineHeight="tall">
                  Calle 123 #45-67, Chapinero
                  <br />
                  Bogotá, Colombia
                </Text>
              </Flex>

              <Flex align="center" gap={3}>
                <Box color="teal.400">
                  <Phone size={18} />
                </Box>
                <Text fontSize="sm" color="gray.400">
                  +57 321 456 7890
                </Text>
              </Flex>

              <Flex align="center" gap={3}>
                <Box color="teal.400">
                  <Mail size={18} />
                </Box>
                <Text fontSize="sm" color="gray.400">
                  contacto@dermaplus.com
                </Text>
              </Flex>

              <Flex align="flex-start" gap={3}>
                <Box color="teal.400" mt={0.5}>
                  <Clock size={18} />
                </Box>
                <Text fontSize="sm" color="gray.400" lineHeight="tall">
                  Lun - Vie: 8:00 - 18:00
                  <br />
                  Sáb: 9:00 - 14:00
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </SimpleGrid>

        {/* Separador */}
        <Box h="1px" bg="gray.800" my={8} />

        {/* Bottom Footer */}
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Text fontSize="sm" color="gray.500">
            © {currentYear} DermaPlus. Todos los derechos reservados.
          </Text>

          <Flex gap={6} flexWrap="wrap">
            {footerLinks.legal.map((link, index) => (
              <NextLink key={index} href={link.href} passHref legacyBehavior>
                <Box
                  as="a"
                  fontSize="sm"
                  color="gray.500"
                  _hover={{ color: "teal.400" }}
                  transition="color 0.2s"
                  cursor="pointer"
                >
                  {link.label}
                </Box>
              </NextLink>
            ))}
          </Flex>
        </Flex>

        {/* Mensaje adicional */}
        <Flex justify="center" mt={6}>
          <Text
            fontSize="xs"
            color="gray.600"
            display="flex"
            alignItems="center"
            gap={2}
          >
            Hecho con <Heart size={14} fill="currentColor" color="#319795" /> en
            Bogotá
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
