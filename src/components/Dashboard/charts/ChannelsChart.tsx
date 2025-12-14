"use client";
import ReactECharts from "echarts-for-react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function ChannelsChart() {
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
            value: 50, 
            name: "Web",
            itemStyle: { color: "#319795" }
          },
          { 
            value: 30, 
            name: "Instagram Ads",
            itemStyle: { color: "#81E6D9" }
          },
          { 
            value: 20, 
            name: "Referidos",
            itemStyle: { color: "#4FD1C5" }
          },
        ],
      },
    ],
  };

  return (
    <Box p={6}>
      <Box mb={4}>
        <Heading size="md" color="gray.800" mb={1}>
          Canales de captación
        </Heading>
        <Text fontSize="sm" color="gray.600">
          Origen de los pacientes registrados
        </Text>
      </Box>
      <ReactECharts option={option} style={{ height: 280 }} />
    </Box>
  );
}