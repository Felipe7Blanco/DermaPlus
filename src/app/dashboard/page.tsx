import ChannelsChart from "@/components/Dashboard/charts/ChannelsChart";
import PatientsByMonthChart from "@/components/Dashboard/charts/PatientsByMonthChart";
import TreatmentsChart from "@/components/Dashboard/charts/TreatmentsChart";
import LeadsTable from "@/components/Dashboard/LeadTable";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Container,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Users, TrendingUp, Calendar, Activity } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      icon: Users,
      label: "Total Pacientes",
      value: "1,035",
      change: "+12%",
      color: "teal",
    },
    {
      icon: Calendar,
      label: "Citas Este Mes",
      value: "330",
      change: "+8%",
      color: "blue",
    },
    {
      icon: TrendingUp,
      label: "Tasa de Conversión",
      value: "68%",
      change: "+5%",
      color: "green",
    },
    {
      icon: Activity,
      label: "Tratamientos Activos",
      value: "156",
      change: "+15%",
      color: "purple",
    },
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="1400px" py={8}>
        {/* Header */}
        <Stack gap={6} mb={8}>
          <Box>
            <Heading size="2xl" color="gray.800" mb={2}>
              Dashboard
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Panel interno de seguimiento de pacientes registrados
            </Text>
          </Box>

          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Box
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{
                    boxShadow: "md",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  <Flex justify="space-between" align="flex-start" mb={3}>
                    <Box
                      p={2}
                      bg={`${stat.color}.50`}
                      borderRadius="lg"
                      color={`${stat.color}.600`}
                    >
                      <Icon size={24} />
                    </Box>
                    <Box
                      px={2}
                      py={1}
                      bg="green.50"
                      borderRadius="md"
                      fontSize="xs"
                      fontWeight="semibold"
                      color="green.700"
                    >
                      {stat.change}
                    </Box>
                  </Flex>
                  <Text fontSize="sm" color="gray.600" mb={1}>
                    {stat.label}
                  </Text>
                  <Text fontSize="3xl" fontWeight="bold" color="gray.800">
                    {stat.value}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Stack>

        {/* Charts Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mb={8}>
          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
          >
            <PatientsByMonthChart />
          </Box>

          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
          >
            <TreatmentsChart />
          </Box>

          <Box
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
          >
            <ChannelsChart />
          </Box>

          
        </SimpleGrid>

        {/* Table */}
        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.200"
          overflow="hidden"
        >
          <LeadsTable />
        </Box>
      </Container>
    </Box>
  );
}
