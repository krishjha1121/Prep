<template>
  <div class="contrib-card">
    <!-- SVG golden outline -->
    <svg
      class="outline-svg"
      viewBox="0 0 350 500"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#ffd8a8" />
          <stop offset="40%" stop-color="#f2a85a" />
          <stop offset="100%" stop-color="#dd8448" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="370"
        height="500"
        rx="24"
        ry="24"
        fill="none"
        stroke="url(#goldGrad)"
        stroke-width="3"
        stroke-linejoin="round"
        class="outline-rect"
      />
    </svg>

    <!-- subtle outer glow -->
    <div class="outer-glow" aria-hidden="true"></div>

    <!-- content -->
    <div class="content">
      <div class="top">
        <div class="badge">{{ badge }}</div>

        <div class="avatar-wrap" v-if="image">
          <img :src="image" alt="" class="avatar" />
        </div>
        <div class="avatar-wrap placeholder" v-else>
          <div class="avatar-initials">{{ initials }}</div>
        </div>

        <h3 class="name">{{ title }}</h3>
        <div class="role" v-if="role">{{ role }}</div>
      </div>

      <hr class="divider" />

      <div class="bottom">
        <p class="desc">{{ description }}</p>

        <div class="links" v-if="links && links.length">
          <a
            v-for="(link, idx) in links"
            :key="idx"
            :href="link.url"
            class="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="getIcon(link.label)"
              :alt="link.label + ' logo'"
              class="link-icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  badge: { type: String, default: 'Dramatic' },
  title: { type: String, default: 'Electric Border' },
  description: {
    type: String,
    default: "In case you'd like to emphasize something very dramatically.",
  },
  image: { type: String, default: '' },
  role: { type: String, default: '' },
  links: { type: Array, default: () => [] },
})

const getIcon = (label) => {
  const lower = label.toLowerCase()
  if (lower.includes('github'))
    return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg'
  if (lower.includes('linkedin'))
    return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg'
  if (lower.includes('leetcode'))
    return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg'
  if (lower.includes('codeforces'))
    return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg'
  if (lower.includes('reddit'))
    return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/reddit.svg'
  if (lower.includes('monkeytype'))
    return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/monkeytype.svg'
  return 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/link.svg'
}

// compute initials from title if no image provided
import { computed } from 'vue'
const initials = computed(() => {
  const name = props.title || ''
  return name
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
})
</script>

<style scoped>
.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition:
    transform 0.12s ease,
    background 0.12s ease;
}

.link-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.08);
}

.link-icon {
  width: 16px;
  height: 16px;
  filter: invert(0.9); /* makes white on dark bg */
}

:root {
  --card-max-w: 350px;
  --radius: 24px;
  --gold-start: #ffd8a8;
  --gold-mid: #f2a85a;
  --gold-end: #dd8448;
  --bg-1: rgba(10, 10, 12, 0.96);
  --bg-2: rgba(26, 26, 28, 0.95);
}

/* Card wrapper (responsive) */
.contrib-card {
  width: 100%;
  max-width: var(--card-max-w);
  aspect-ratio: 7 / 10; /* 350x500 proportion */
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  font-family:
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
}

/* outer blur/glow */
.outer-glow {
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  z-index: 0;
  filter: blur(28px);
  opacity: 0.42;
  background: linear-gradient(
    22deg,
    rgb(217 217 217 / 41%),
    #9f90905e 94%,
    rgba(221, 132, 72, 0.06)
  );
  transform: translate(33px, 58px);
  pointer-events: none;
  height: 260px;
  width: 263px;
  border-radius: 50%;
}

.content {
  position: absolute;
  inset: 6px;
  align-items: center;
  border-radius: calc(var(--radius) - 4px);
  z-index: 2;
  /* overflow: hidden;  ❌ remove this line */
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(-30deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, var(--bg-1), var(--bg-2));
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.6),
    inset 0 6px 40px rgba(0, 0, 0, 0.35);
}
/* outline svg */
.outline-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  overflow: visible;
}

.outline-rect {
  filter: drop-shadow(0 6px 18px rgba(221, 132, 72, 0.12));
}

/* top area */
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px 12px 24px;
  gap: 12px;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

/* avatar */
.avatar-wrap {
  width: 140px;
  height: 140px;
  border-radius: 999px;
  overflow: hidden;
  display: grid;
  place-items: center;
  margin-top: 6px;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.6),
    inset 0 0 0 6px rgba(255, 255, 255, 0.02);
  background: rgba(255, 255, 255, 0.02);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* placeholder initials */
.avatar-wrap.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
}
.avatar-initials {
  color: rgba(255, 255, 255, 0.92);
  font-size: 34px;
  font-weight: 600;
}

/* name & role */
.name {
  margin: 6px 0 0 0;
  font-size: 36px;
  line-height: 1;
  color: #fff;
  font-weight: 600;
  text-align: center;
}
.role {
  margin-top: 6px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
}

/* divider */
.divider {
  margin: 12px 24px;
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.04),
    transparent
  );
  opacity: 0.4;
}

.bottom {
  position: absolute;
  top: 76%;
  z-index: 5;
  padding: 18px 28px 20px 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
  align-items: center;
}

.desc {
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 15px;
  line-height: 1.6;
  text-align: left;
}

/* links row */
.links {
  margin-top: 14px;
  display: flex;
  gap: 8px;
  flex-wrap: nowwrap;
  justify-content: center;
}
.link-btn {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition:
    transform 0.12s ease,
    background 0.12s ease;
}
.link-btn:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.06);
}

/* small screen adjustments */
@media (max-width: 768px) {
  :root {
    --card-max-w: 300px;
  }
  .contrib-card {
    max-width: 300px;
  }

  .avatar-wrap {
    width: 110px;
    height: 110px;
  }
  .name {
    font-size: 26px;
  }
  .role {
    font-size: 14px;
  }
  .top {
    padding: 28px 18px 10px 18px;
  }
  .bottom {
    padding: 14px 18px 18px 18px;
  }
  .desc {
    font-size: 14px;
  }
}

/* very small */
@media (max-width: 420px) {
  :root {
    --card-max-w: 260px;
  }
  .contrib-card {
    max-width: 260px;
  }
  .avatar-wrap {
    width: 96px;
    height: 96px;
  }
  .name {
    font-size: 22px;
  }
}
</style>
