<script setup>
import { ref } from 'vue'

const props = defineProps({
  resources: {
    type: Array,
    required: true,
    // Expected format: [{ name: 'Resource Name', fileId: 'google-drive-file-id' }]
  },
})

const showModal = ref(false)
const currentPdf = ref(null)

const openPdf = (resource) => {
  currentPdf.value = resource
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  currentPdf.value = null
  document.body.style.overflow = 'auto'
}

const getEmbedUrl = (fileId) => {
  return `https://drive.google.com/file/d/${fileId}/preview`
}

const getDownloadUrl = (fileId) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}
</script>

<template>
  <table class="resources-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Resource</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(resource, index) in resources" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ resource.name }}</td>
        <td>
          <div class="action-buttons">
            <button
              class="btn btn-view"
              @click="openPdf(resource)"
              title="View PDF"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View
            </button>
            <a
              :href="getDownloadUrl(resource.fileId)"
              class="btn btn-download"
              download
              title="Download PDF"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
  <Transition name="modal">
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3>{{ currentPdf?.name }}</h3>
          <div class="modal-actions">
            <a
              :href="getDownloadUrl(currentPdf?.fileId)"
              class="btn-icon"
              download
              title="Download"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <button
              class="btn-icon btn-close"
              @click="closeModal"
              title="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="modal-body">
          <iframe
            v-if="currentPdf"
            :src="getEmbedUrl(currentPdf.fileId)"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.resources-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  margin: 16px 0;
  display: table;
}

.resources-table :deep(*) {
  box-sizing: border-box;
}

.resources-table thead {
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.resources-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
}

.resources-table th:first-child {
  text-align: center;
  width: 60px;
}

.resources-table th:last-child {
  text-align: center;
  width: auto;
}

.resources-table td {
  padding: 12px 16px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.resources-table td:first-child {
  text-align: center;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.resources-table tbody tr {
  transition: background 0.3s ease;
}

.resources-table tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

.action-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn-view {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.btn-view:hover {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-brand);
}

.btn-download {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
}

.btn-download:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-container {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  width: 90vw;
  max-width: 1200px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: 8px;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.btn-close:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.modal-body {
  flex: 1;
  overflow: hidden;
}

.modal-body iframe {
  width: 100%;
  height: 100%;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}
</style>
