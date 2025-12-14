"use client";
import {
  Table,
  Box,
  Badge,
  Heading,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Users, Mail, Clipboard } from "lucide-react";

const mockLeads = [
  {
    id: 1,
    name: "Ana Gómez",
    email: "ana@gmail.com",
    treatment: "Limpieza Facial",
    status: "Nuevo",
  },
  {
    id: 2,
    name: "Carlos Pérez",
    email: "carlos@gmail.com",
    treatment: "Botox",
    status: "Contactado",
  },
  {
    id: 3,
    name: "María López",
    email: "maria@gmail.com",
    treatment: "Depilación Láser",
    status: "En seguimiento",
  },
];

export default function LeadsTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Nuevo":
        return "green";
      case "Contactado":
        return "blue";
      case "En seguimiento":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <Box>
      {/* Header de la tabla */}
      <Box p={6} borderBottom="1px solid" borderColor="gray.200">
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Stack gap={1}>
            <Heading size="lg" color="gray.800">
              Pacientes Registrados
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Lista de contactos recientes y su estado de seguimiento
            </Text>
          </Stack>
          <Flex align="center" gap={2} color="teal.600">
            <Users size={20} />
            <Text fontWeight="semibold">{mockLeads.length} registros</Text>
          </Flex>
        </Flex>
      </Box>

      {/* Tabla */}
      <Box overflowX="auto">
        <Table.Root variant="line" size="lg">
          <Table.Header bg="gray.50">
            <Table.Row>
              <Table.ColumnHeader
                color="gray.700"
                fontWeight="semibold"
                fontSize="sm"
              >
                <Flex align="center" gap={2}>
                  <Users size={16} />
                  Nombre
                </Flex>
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="gray.700"
                fontWeight="semibold"
                fontSize="sm"
              >
                <Flex align="center" gap={2}>
                  <Mail size={16} />
                  Email
                </Flex>
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="gray.700"
                fontWeight="semibold"
                fontSize="sm"
              >
                <Flex align="center" gap={2}>
                  <Clipboard size={16} />
                  Tratamiento
                </Flex>
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="gray.700"
                fontWeight="semibold"
                fontSize="sm"
              >
                Estado
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {mockLeads.map((lead) => (
              <Table.Row
                key={lead.id}
                _hover={{
                  bg: "gray.50",
                }}
                transition="background 0.2s"
              >
                <Table.Cell>
                  <Text fontWeight="medium" color="gray.800">
                    {lead.name}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text color="teal.600" fontSize="sm">
                    {lead.email}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text color="gray.700">{lead.treatment}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    colorPalette={getStatusColor(lead.status)}
                    size="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontWeight="semibold"
                  >
                    {lead.status}
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      {/* Footer de la tabla */}
      <Box p={4} borderTop="1px solid" borderColor="gray.200" bg="gray.50">
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Text fontSize="sm" color="gray.600">
            Mostrando {mockLeads.length} de {mockLeads.length} registros
          </Text>
          <Flex gap={2}>
            <Box
              px={3}
              py={2}
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
              cursor="pointer"
              _hover={{ bg: "gray.50" }}
            >
              Anterior
            </Box>
            <Box
              px={3}
              py={2}
              bg="teal.600"
              color="white"
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
            >
              1
            </Box>
            <Box
              px={3}
              py={2}
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              fontSize="sm"
              fontWeight="medium"
              cursor="pointer"
              _hover={{ bg: "gray.50" }}
            >
              Siguiente
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
