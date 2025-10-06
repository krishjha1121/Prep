<script setup>
import { ref } from 'vue'

const props = defineProps({
  languages: {
    type: Array,
    required: true
  }
})

const activeTab = ref(0)
</script>

<template>
  <div class="code-tabs">
    <div class="tabs-header">
      <button
        v-for="(lang, index) in languages"
        :key="index"
        :class="['tab-button', { active: activeTab === index }]"
        @click="activeTab = index"
      >
        {{ lang.name }}
      </button>
    </div>
    <div class="tabs-content">
      <div
        v-for="(lang, index) in languages"
        :key="index"
        v-show="activeTab === index"
        class="tab-panel"
      >
        <slot :name="lang.slot"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-tabs {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.tabs-header {
  display: flex;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  overflow-x: auto;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
}

.tab-button:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
}

.tab-button.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg);
}

.tabs-content {
  background-color: var(--vp-c-bg);
}

.tab-panel :deep(div[class*="language-"]) {
  margin: 0;
  border-radius: 0;
  border: none;
}
</style>