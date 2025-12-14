"use client";
import ReactECharts from "echarts-for-react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { TrendingUp } from "lucide-react";

export default function PatientsByMonthChart() {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      borderWidth: 1,
      textStyle: {
        color: "#2d3748",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      axisLine: {
        lineStyle: {
          color: "#e2e8f0",
        },
      },
      axisLabel: {
        color: "#718096",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#718096",
      },
      splitLine: {
        lineStyle: {
          color: "#e2e8f0",
          type: "dashed",
        },
      },
    },
    series: [
      {
        data: [95, 140, 210, 260, 330],
        type: "bar",
        barWidth: "50%",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#319795" },
              { offset: 1, color: "#2C7A7B" },
            ],
          },
          borderRadius: [8, 8, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#2C7A7B" },
                { offset: 1, color: "#234E52" },
              ],
            },
          },
        },
      },
    ],
  };

  return (
    <Box p={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Box>
          <Heading size="md" color="gray.800" mb={1}>
            Pacientes registrados por mes
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Crecimiento mensual de pacientes nuevos
          </Text>
        </Box>
        <Flex align="center" gap={2} color="green.600">
          <TrendingUp size={20} />
          <Text fontSize="sm" fontWeight="semibold">
            +27%
          </Text>
        </Flex>
      </Flex>
      <ReactECharts option={option} style={{ height: 280 }} />
    </Box>
  );
}
