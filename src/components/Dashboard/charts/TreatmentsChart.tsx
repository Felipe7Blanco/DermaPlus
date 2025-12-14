"use client";
import ReactECharts from "echarts-for-react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function TreatmentsChart() {
  const option = {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      borderWidth: 1,
      textStyle: {
        color: "#2d3748",
      },
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      right: "10%",
      top: "center",
      textStyle: {
        color: "#718096",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        center: ["35%", "50%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
            color: "#2d3748",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.2)",
          },
        },
        data: [
          { 
            value: 40, 
            name: "Limpieza Facial",
            itemStyle: { color: "#4299E1" }
          },
          { 
            value: 25, 
            name: "Botox",
            itemStyle: { color: "#48BB78" }
          },
          { 
            value: 20, 
            name: "Depilación Láser",
            itemStyle: { color: "#ED8936" }
          },
          { 
            value: 15, 
            name: "Tratamientos Corporales",
            itemStyle: { color: "#9F7AEA" }
          },
        ],
      },
    ],
  };

  return (
    <Box p={6}>
      <Box mb={4}>
        <Heading size="md" color="gray.800" mb={1}>
          Tratamientos más solicitados
        </Heading>
        <Text fontSize="sm" color="gray.600">
          Distribución por tipo de servicio
        </Text>
      </Box>
      <ReactECharts option={option} style={{ height: 280 }} />
    </Box>
  );
}