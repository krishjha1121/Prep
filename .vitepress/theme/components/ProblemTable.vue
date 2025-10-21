<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2
      class="text-4xl font-bold text-white mb-10 flex items-center animate-glow"
    >
      <span class="mr-4 text-4xl">{{ icon }}</span> {{ title }}
    </h2>
    <div
      class="backdrop-blur-lg bg-white/10 shadow-2xl rounded-2xl overflow-hidden border border-white/20"
    >
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead>
            <tr
              class="bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 text-white"
            >
              <th
                class="px-6 py-5 text-left text-sm font-semibold tracking-wider uppercase"
              >
                Problem
              </th>
              <th
                class="px-6 py-5 text-left text-sm font-semibold tracking-wider uppercase"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(problem, index) in problems"
              :key="index"
              class="border-b border-white/10 hover:bg-white/5 transition-all duration-300 cursor-pointer animate-scale-in"
              :style="{ animationDelay: `${index * 0.1}s` }"
              @click="navigateToProblem(problem.link)"
            >
              <td class="px-6 py-6 text-white text-base font-medium">
                {{ problem.name }}
              </td>
              <td class="px-6 py-6">
                <a
                  :href="problem.link"
                  class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:from-blue-600 hover:to-cyan-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                  Explore
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemTable',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Problems',
    },
    icon: {
      type: String,
      default: '📋',
    },
    problems: {
      type: Array,
      required: true,
      default: () => [],
      validator: (problems) => problems.every((p) => p.name && p.link),
    },
  },
  methods: {
    navigateToProblem(link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    },
  },
}
</script>

<style scoped>
table {
  min-width: 100%;
}

th,
td {
  text-align: left;
}

thead tr {
  background: linear-gradient(to right, #6b21a8, #db2777, #2563eb);
}

tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.container {
  background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
  border-radius: 1rem;
  padding: 2rem;
}

h2 {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

@keyframes glow {
  0%,
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-scale-in {
  animation: scale-in 0.4s ease-out forwards;
}
</style>
