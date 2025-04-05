<template>
  <v-network-graph
    class="graph"
    style="width: 100%; height: 100%"
    :configs="initialCongigs"
    :eventHandlers="!demoMode ? eventHandlers : () => {}"
    v-bind="{ ...graph }"
  />
</template>

<script setup lang="ts">
import type { EduCourse } from '../types';
import * as vNG from 'v-network-graph';
import { computed } from 'vue';

const { course, eventHandlers } = defineProps<{
  course: EduCourse;
  eventHandlers: vNG.EventHandlers;
  demoMode?: boolean;
}>();

const graph = computed(() => {
  const result = { ...course };

  for (const [nodeId, nodeValue] of Object.entries(course.nodes)) {
    nodeValue.normal = {};
    nodeValue.hover = {};

    if (nodeValue.status === 'passed') {
      result.nodes[nodeId].normal = {
        color: '#6BBEA0',
      };
      result.nodes[nodeId].hover = {
        color: '#D0DAFF',
      };
    } else if (nodeValue.status === 'available') {
      result.nodes[nodeId].normal = {
        color: '#A2B3F6',
      };
      result.nodes[nodeId].hover = {
        color: '#D0DAFF',
      };
    } else if (nodeValue.status === 'closed') {
      result.nodes[nodeId].normal = {
        color: '#999A9E',
      };
      result.nodes[nodeId].hover = {
        color: '#999A9E',
      };
    }

    if (nodeValue.root) {
      result.nodes[nodeId].normal.strokeWidth = 3;
      result.nodes[nodeId].normal.strokeColor = '#f1f1f1';
    }
  }

  return result;
});

const initialCongigs: vNG.UserConfigs = {
  view: {
    zoomEnabled: false,
  },
  node: {
    normal: {
      color: (node: vNG.Node) => node.normal.color ?? '#A2B3F6',
      strokeWidth: (node: vNG.Node) => node.normal.strokeWidth,
      strokeColor: (node: vNG.Node) => node.normal.strokeColor,
    },
    hover: {
      color: (node: vNG.Node) => node.hover.color ?? '#D0DAFF',
      strokeWidth: (node: vNG.Node) => node.hover.strokeWidth,
      strokeColor: (node: vNG.Node) => node.hover.strokeColor,
    },
    selected: {
      color: (node: vNG.Node) => node.hover.color ?? '#6F8FF0',
      strokeWidth: (node: vNG.Node) => node.hover.strokeWidth,
      strokeColor: (node: vNG.Node) => node.hover.strokeColor,
    },
    label: {
      visible: true,
      fontFamily: 'Proxima Nova',
      fontSize: 18,
      lineHeight: 1.1,
      color: '#33343d',
      margin: 17,
      direction: 'north',
      text: 'name',
      background: (node: vNG.Node) => ({
        visible: true,
        color: node.normal.color ?? '#A2B3F6',
        padding: {
          vertical: 5,
          horizontal: 15,
        },
        borderRadius: 10,
      }),
    },
  },
};
</script>

<style scoped></style>
