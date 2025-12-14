"use client";
import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  Field,
  NativeSelect,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { User, Mail, Phone, Clipboard, Send, CheckCircle } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simular envío
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        treatment: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Box p={{ base: 8, md: 12 }} textAlign="center">
        <Stack gap={4} align="center">
          <Box p={4} bg="green.50" borderRadius="full" color="green.600">
            <CheckCircle size={48} />
          </Box>
          <Heading size="lg" color="gray.800">
            ¡Registro exitoso!
          </Heading>
          <Text color="gray.600" maxW="400px">
            Hemos recibido tu información. Nuestro equipo se pondrá en contacto
            contigo pronto.
          </Text>
        </Stack>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={0}>
      {/* Panel izquierdo - Información */}
      <Box
        p={{ base: 8, md: 12 }}
        bg="teal.600"
        color="white"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Stack gap={6}>
          <Box>
            <Heading size="xl" mb={4}>
              Regístrate y recibe información
            </Heading>
            <Text fontSize="md" opacity={0.9}>
              Completa el formulario y un especialista te contactará para
              agendar tu valoración personalizada.
            </Text>
          </Box>

          <Stack gap={4}>
            <Flex align="flex-start" gap={3}>
              <Box p={2} bg="whiteAlpha.200" borderRadius="lg" mt={1}>
                <CheckCircle size={20} />
              </Box>
              <Box>
                <Text fontWeight="semibold" mb={1}>
                  Valoración gratuita
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  Primera consulta sin costo
                </Text>
              </Box>
            </Flex>

            <Flex align="flex-start" gap={3}>
              <Box p={2} bg="whiteAlpha.200" borderRadius="lg" mt={1}>
                <CheckCircle size={20} />
              </Box>
              <Box>
                <Text fontWeight="semibold" mb={1}>
                  Respuesta rápida
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  Te contactamos en 24 horas
                </Text>
              </Box>
            </Flex>

            <Flex align="flex-start" gap={3}>
              <Box p={2} bg="whiteAlpha.200" borderRadius="lg" mt={1}>
                <CheckCircle size={20} />
              </Box>
              <Box>
                <Text fontWeight="semibold" mb={1}>
                  Atención personalizada
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  Plan diseñado para ti
                </Text>
              </Box>
            </Flex>
          </Stack>

          <Box p={4} bg="whiteAlpha.200" borderRadius="lg" mt={4}>
            <Text fontSize="sm" fontWeight="semibold" mb={1}>
              📞 ¿Prefieres llamar?
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              +57 321 456 7890
            </Text>
          </Box>
        </Stack>
      </Box>

      {/* Panel derecho - Formulario */}
      <Box p={{ base: 8, md: 12 }} bg="white">
        <form onSubmit={handleSubmit}>
          <Stack gap={5}>
            <Field.Root required>
              <Field.Label color="gray.700" fontWeight="semibold" >
                Nombre completo
              </Field.Label>
              <Box position="relative">
                <Box
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  color="gray.400"
                  pointerEvents="none"
                  zIndex={1}
                >
                  <User size={18} />
                </Box>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  pl={10}
                  size="lg"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    bg: "white",
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
                  }}
                />
              </Box>
            </Field.Root>

            <Field.Root required>
              <Field.Label color="gray.700" fontWeight="semibold">
                Correo electrónico
              </Field.Label>
              <Box position="relative">
                <Box
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  color="gray.400"
                  pointerEvents="none"
                  zIndex={1}
                >
                  <Mail size={18} />
                </Box>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@ejemplo.com"
                  pl={10}
                  size="lg"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    bg: "white",
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
                  }}
                />
              </Box>
            </Field.Root>

            <Field.Root required>
              <Field.Label color="gray.700" fontWeight="semibold">
                Teléfono
              </Field.Label>
              <Box position="relative">
                <Box
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  color="gray.400"
                  pointerEvents="none"
                  zIndex={1}
                >
                  <Phone size={18} />
                </Box>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 333 2526 181"
                  pl={10}
                  size="lg"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _focus={{
                    bg: "white",
                    borderColor: "teal.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
                  }}
                />
              </Box>
            </Field.Root>

            <Field.Root required>
              <Field.Label color="gray.700" fontWeight="semibold">
                Tratamiento de interés
              </Field.Label>
              <Box position="relative">
                <Box
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  color="gray.400"
                  pointerEvents="none"
                  zIndex={1}
                >
                  <Clipboard size={18} />
                </Box>
                <NativeSelect.Root size="lg">
                  <NativeSelect.Field
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    pl={10}
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _focus={{
                      bg: "white",
                      borderColor: "teal.500",
                      boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
                    }}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Tratamientos corporales">
                      Tratamientos corporales
                    </option>
                    <option value="Depilación laser">Depilación láser</option>
                    <option value="Botox">Botox</option>
                    <option value="Limpieza facial">Limpieza facial</option>
                  </NativeSelect.Field>
                </NativeSelect.Root>
              </Box>
            </Field.Root>

            <Button
              type="submit"
              size="lg"
              colorPalette="teal"
              w="full"
              mt={2}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              <Flex align="center" gap={2}>
                <Send size={18} />
                <Text>Enviar solicitud</Text>
              </Flex>
            </Button>

            <Text fontSize="xs" color="gray.500" textAlign="center">
              Al enviar este formulario, aceptas nuestra política de privacidad
              y términos de servicio.
            </Text>
          </Stack>
        </form>
      </Box>
    </SimpleGrid>
  );
}
