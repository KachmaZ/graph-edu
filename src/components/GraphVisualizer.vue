<template>
  <v-network-graph
    class="graph"
    style="width: 100%; height: 100%"
    :configs="initialCongigs"
    :eventHandlers="eventHandlers"
    v-bind="{ ...graph }"
  />
</template>

<script setup lang="ts">
import type { EduCourse, EduNode } from '../types';
import * as vNG from 'v-network-graph';
import { computed } from 'vue';

const { course, eventHandlers } = defineProps<{
  course: EduCourse;
  eventHandlers: vNG.EventHandlers;
}>();

const graph = computed(() => {
  const result = { ...course };

  for (const [nodeId, nodeValue] of Object.entries(course.nodes)) {
    nodeValue.normal = {};
    nodeValue.hover = {};

    if (nodeValue.status === 'passed') {
      result.nodes[nodeId].normal = {
        color: '#fdff99',
      };
      result.nodes[nodeId].hover = {
        color: '#fff5ba',
      };
    } else if (nodeValue.status === 'available') {
      result.nodes[nodeId].normal = {
        color: '#99f6ff',
      };
      result.nodes[nodeId].hover = {
        color: '#d5fcff',
      };
    } else if (nodeValue.status === 'closed') {
      result.nodes[nodeId].normal = {
        color: '#acacac',
      };
      result.nodes[nodeId].hover = {
        color: '#acacac',
      };
    }

    if (nodeValue.root) {
      result.nodes[nodeId].normal.strokeWidth = 3;
      result.nodes[nodeId].normal.strokeColor = '#fee243';
    }
  }

  return result;
});

const initialCongigs = {
  grid: {
    visible: true,
  },
  node: {
    normal: {
      color: (node: EduNode) => node.normal.color ?? '#FFFFFF',
      strokeWidth: (node: EduNode) => node.normal.strokeWidth,
      strokeColor: (node: EduNode) => node.normal.strokeColor,
    },
    hover: {
      color: (node: EduNode) => node.hover.color ?? '#99f6ff',
      strokeWidth: (node: EduNode) => node.hover.strokeWidth,
      strokeColor: (node: EduNode) => node.hover.strokeColor,
    },
    label: {
      visible: true,
      fontFamily: undefined,
      fontSize: 11,
      lineHeight: 1.1,
      color: '#FFFFFF',
      margin: 4,
      direction: 'south',
      text: 'name',
    },
  },
};
</script>

<style scoped></style>
