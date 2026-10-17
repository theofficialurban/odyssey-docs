<script setup lang="ts">
import { computed, ref } from "vue";
import Numogram, { getMeshTagData } from "../../Numogram";

let hovered = ref<{ type: "zone" | "current" | "gate"; id: string } | null>(
  null,
);

const idNum = computed(() => {
  return hovered.value?.id ? Number(hovered.value.id) : null;
});

const meshTag = computed(() => {
  if (hovered.value?.id && idNum.value) {
    return getMeshTagData(idNum.value);
  }
  return null;
});

const getCurrentFromSyz = (id: string) => {
  if (id == "5" || id == "4") return Numogram.Currents["5::4"];
  else if (id == "6" || id == "3") return Numogram.Currents["6::3"];
  else if (id == "7" || id == "2") return Numogram.Currents["7::2"];
  else if (id == "8" || id == "1") return Numogram.Currents["8::1"];
  else if (id == "9" || id == "0") return Numogram.Currents["9::0"];
  return null;
};

const curSyz = computed(() => {
  if (hovered.value && hovered.value.type === "current") {
    return getCurrentFromSyz(hovered.value.id);
  }
  return null;
});

const handleHover = (type: "zone" | "current" | "gate", id: string) => {
  hovered.value = { type, id };
};

const handleLeave = () => {
  hovered.value = null;
};

// Determine if an element should be highlighted or dimmed
const isDimmed = (type: "zone" | "current" | "gate", id: string) => {
  if (!hovered.value) return false;
  if (hovered.value.type === type && hovered.value.id === id) return false;

  // Syzygy highlighting logic
  if (hovered.value.type === "zone") {
    const activeZone = hovered.value.id;
    const syzygyTwin = 9 - Number(activeZone);
    if (type === "zone" && (id == activeZone || id == String(syzygyTwin)))
      return false;
    if (
      type === "current" &&
      idNum.value &&
      id ===
        `${Math.max(Number(activeZone), syzygyTwin)}::${Math.min(idNum.value, syzygyTwin)}`
    )
      return false;
  }

  if (hovered.value.type === "current") {
    const [a, b] = hovered.value.id.split("::").map(Number);
    if (type === "zone" && (id === String(a) || id === String(b))) return false;
  }

  if (hovered.value.type === "gate") {
    const idNum = Number(hovered.value.id);
    const gateData = Numogram.Gates[idNum];
    if (
      type === "zone" &&
      (idNum === gateData.zone.id || idNum === gateData.reduces)
    )
      return false;
  }

  return true;
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row w-full h-screen bg-zinc-950 text-zinc-300 font-mono overflow-hidden"
  >
    <!-- /* Left Panel: SVG Visualization */ -->
    <div
      class="w-full md:w-2/3 h-[50vh] md:h-full p-4 relative flex items-center justify-center bg-black/50 border-b md:border-b-0 md:border-r border-zinc-800"
    >
      <svg
        viewBox="0 0 1000 1200"
        class="w-full h-full max-h-[90vh] drop-shadow-2xl"
        :style="{ filter: 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.15))' }"
      >
        <defs>
          <!-- {/* Markers for thick currents */} -->
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="4"
            refY="3"
            orient="auto-start-reverse"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#ef4444" />
          </marker>
          <!-- {/* Markers for thin channels */} -->
          <marker
            id="arrowhead-thin"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto-start-reverse"
          >
            <polygon points="0 0, 8 4, 0 8" fill="#71717a" />
          </marker>

          <!-- {/* Gradients for thick fading currents */} -->
          <linearGradient id="grad-5-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="grad-8-1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="grad-7-2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="grad-6-3" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="grad-9-0" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>

          <!-- {/* Glow filters */} -->
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g id="channels">
          <path
            v-for="ch in Numogram.Channels"
            :key="`ch-${ch.id}`"
            :d="ch.path"
            fill="none"
            :stroke="
              hovered && hovered.type === 'gate' && hovered.id == String(ch.id)
                ? '#ef4444'
                : '#52525b'
            "
            :strokeWidth="
              hovered && hovered.type === 'gate' && hovered.id == String(ch.id)
                ? '4'
                : '2'
            "
            marker-end="url(#arrowhead-thin)"
            class="transition-all duration-300"
            :style="{ opacity: isDimmed('gate', String(ch.id)) ? 0.3 : 1 }"
          />
        </g>

        <g id="currents">
          <path
            v-for="cur in Numogram.CurrentsPaths"
            :key="`cur-${cur.id}`"
            :d="cur.path"
            fill="none"
            :stroke="`url(#${cur.grad})`"
            :strokeWidth="
              hovered && hovered.type === 'current' && hovered.id === cur.id
                ? '35'
                : '22'
            "
            strokeLinecap="round"
            marker-end="url(#arrowhead)"
            class="transition-all duration-300 cursor-pointer"
            v-on:mouseenter="() => handleHover('current', cur.id)"
            v-on:mouseleave="handleLeave"
            :style="{ opacity: isDimmed('current', cur.id) ? 0.2 : 0.9 }"
          />
        </g>

        <g id="gates">
          <g
            v-for="[id, pos] in Object.entries(Numogram.GatesPaths)"
            :key="`gate-${id}`"
            :transform="`translate(${pos.x}, ${pos.y})`"
            v-on:mouseenter="() => handleHover('gate', String(id))"
            v-on:mouseleave="handleLeave"
            class="cursor-pointer transition-all duration-300"
            :style="{ opacity: isDimmed('gate', String(id)) ? 0.4 : 1 }"
          >
            <circle
              r="18"
              :fill="
                hovered && hovered.type === 'gate' && hovered.id == id
                  ? '#ef4444'
                  : '#18181b'
              "
              :stroke="
                hovered && hovered.type === 'gate' && hovered.id == id
                  ? '#fff'
                  : '#71717a'
              "
              strokeWidth="2"
            />
            <text
              textAnchor="middle"
              dy="5"
              :fill="
                hovered && hovered.type === 'gate' && hovered.id == id
                  ? '#fff'
                  : '#a1a1aa'
              "
              fontSize="14"
              fontWeight="bold"
            >
              {{ id }}
            </text>
          </g>
        </g>

        <g id="zones">
          <g
            v-for="[id, pos] in Object.entries(Numogram.NodeCoords)"
            :key="`zone-${id}`"
            :transform="`translate(${pos.x}, ${pos.y})`"
            v-on:mouseenter="() => handleHover('zone', id)"
            v-on:mouseleave="handleLeave"
            class="cursor-pointer transition-all duration-300"
            :style="{ opacity: isDimmed('zone', id) ? 0.4 : 1 }"
          >
            <circle
              r="45"
              :fill="
                hovered && hovered.type === 'zone' && hovered.id === id
                  ? '#fff'
                  : '#09090b'
              "
              :stroke="
                hovered && hovered.type === 'zone' && hovered.id === id
                  ? '#ef4444'
                  : '#fff'
              "
              strokeWidth="3"
              :filter="
                hovered && hovered.type === 'zone' && hovered.id === id
                  ? '#glow'
                  : ''
              "
            />
            <text
              textAnchor="middle"
              dy="12"
              :fill="
                hovered && hovered.type === 'zone' && hovered.id === id
                  ? '#000'
                  : '#fff'
              "
              fontSize="32"
              fontWeight="bold"
            >
              {{ id }}
            </text>
          </g>
        </g>
      </svg>
    </div>

    <div
      class="w-full md:w-1/3 h-[50vh] md:h-full overflow-y-auto p-8 bg-zinc-950 flex flex-col gap-6"
    >
      <div class="border-b border-red-900/50 pb-6">
        <h1
          class="text-3xl font-bold text-red-500 mb-2 uppercase tracking-widest"
        >
          Pandemonium System
        </h1>
        <p class="text-zinc-500 text-sm">
          Interactive Decimation Cartography & Lemurian Time-Maze
        </p>
      </div>

      <div v-if="!hovered" class="animate-fade-in text-zinc-400 space-y-4">
        <p>
          The <strong class="text-zinc-200">Numogram</strong> is not a static
          representation, but a machinic diagram of infection. It maps the
          latent demonic currents of the decimal system, running completely
          immanent criteria dormant within the numbers 0 through 9.
        </p>
        <p>
          Operating through base-10 subroutines and
          <strong class="text-cyan-400">Sarkonian Mesh-Tags</strong>, it
          provides the theoretical blueprint for distributed, self-organizing
          mesh architectures like
          <strong class="text-cyan-400">SmartMesh IP</strong>. It acts as an
          <strong class="text-cyan-400"
            >O(1) constant-time operating system kernel</strong
          >, utilizing bitwise masking to achieve total scale invariance.
        </p>
        <p>
          Hover over the Zones (digits), the
          <strong class="text-red-400">Gates</strong> (small cumulation
          circles), or the <strong class="text-red-400">Currents</strong> (thick
          vectors) to read the underlying time-sorcery logic and view their
          structural bitmasks.
        </p>
      </div>

      <div
        v-else-if="hovered && idNum && hovered.type === 'zone'"
        class="animate-fade-in space-y-6"
      >
        <div>
          <h2 class="text-4xl font-bold text-white mb-1">
            {{ Numogram.Zones[idNum].name }}
          </h2>
          <h3 class="text-xl text-red-500 uppercase tracking-widest">
            {{ Numogram.Zones[idNum].planet }}
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 border-y border-zinc-800 py-4">
          <div>
            <span class="block text-xs text-zinc-500 uppercase">Region</span>
            <span class="text-sm text-zinc-200">{{
              Numogram.Zones[idNum].region
            }}</span>
          </div>
          <div>
            <span class="block text-xs text-zinc-500 uppercase"
              >Syzygetic Demon</span
            >
            <span class="text-sm text-zinc-200">{{
              Numogram.Zones[idNum].demon
            }}</span>
          </div>
        </div>

        <div class="text-zinc-400 leading-relaxed">
          {{ Numogram.Zones[idNum].lore }}
        </div>

        <div
          class="bg-zinc-900 border border-zinc-800 rounded p-4 space-y-3 mt-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
        >
          <h4
            class="text-sm font-bold text-cyan-500 uppercase tracking-widest border-b border-zinc-800 pb-2 flex items-center justify-between"
          >
            <span>Sarkonian Mesh-Tag</span>
            <span class="text-cyan-700 font-mono text-xs"
              >Bitmask OS Kernel</span
            >
          </h4>

          <div v-if="meshTag">
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span class="block text-xs text-zinc-500 uppercase"
                  >Bitmask Formula</span
                >
                <span class="text-zinc-300 font-mono"
                  >{{ meshTag.formula }} = {{ meshTag.val }}</span
                >
              </div>
              <div>
                <span class="block text-xs text-zinc-500 uppercase"
                  >Hex Address</span
                >
                <span class="text-cyan-400 font-mono">{{ meshTag.hex }}</span>
              </div>
            </div>

            <div class="pt-2">
              <span class="block text-xs text-zinc-500 uppercase mb-1"
                >Scale-Invariant Binary Register (16-bit)</span
              >
              <div
                class="bg-black text-cyan-500 font-mono text-sm p-3 rounded tracking-widest text-center shadow-inner border border-zinc-800 flex justify-center space-x-1"
              >
                <span
                  v-for="(char, idx) in meshTag.bin.split('')"
                  :key="idx"
                  :class="
                    char === '1'
                      ? 'text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]'
                      : 'text-zinc-800'
                  "
                  >{{ char }}</span
                >
              </div>
            </div>

            <div class="pt-2 border-t border-zinc-800/50 mt-2">
              <span class="block text-xs text-zinc-500 uppercase mb-1"
                >Hardware / OS Capability</span
              >
              <span class="text-sm text-zinc-300">{{ meshTag.role }}</span>
            </div>

            <div class="text-[10px] text-zinc-500 leading-tight mt-2">
              <span class="text-cyan-600 font-bold"
                >O(1) Scale Invariance:</span
              >
              Homomorphic subsumption allows macro-cloud managers and
              micro-motes to execute this exact bitmask natively via bitwise
              extraction, maintaining token independence.
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="hovered && idNum && hovered.type === 'gate'">
        <div class="animate-fade-in space-y-6">
          <div>
            <h2 class="text-4xl font-bold text-white mb-1">
              Gate {{ Numogram.Gates[idNum].value }}
            </h2>
            <h3 class="text-xl text-red-500 uppercase tracking-widest">
              Triangular Cumulation
            </h3>
          </div>

          <div class="grid grid-cols-2 gap-4 border-y border-zinc-800 py-4">
            <div>
              <span class="block text-xs text-zinc-500 uppercase"
                >Source Zone</span
              >
              <span class="text-xl font-bold text-zinc-200">{{
                Numogram.Gates[idNum].zone
              }}</span>
            </div>
            <div>
              <span class="block text-xs text-zinc-500 uppercase"
                >Digital Reduction</span
              >
              <span class="text-xl font-bold text-red-500">{{
                Numogram.Gates[idNum].reduces
              }}</span>
            </div>
          </div>

          <div class="text-zinc-400 leading-relaxed">
            {{ Numogram.Gates[idNum].lore }}
          </div>

          <div
            class="bg-zinc-900 p-4 border-l-4 border-red-500 text-sm text-zinc-500"
          >
            <strong class="text-zinc-300 block mb-1"
              >Digital Cumulation Mechanism:</strong
            >
            The process of adding a number to all the natural numbers that
            precede it. Every Zone generates a corresponding Gate through its
            cumulated value, spinning the web of esoteric fibres and time-holes.
          </div>
        </div>
      </div>

      <div
        v-else-if="hovered && curSyz && hovered.type === 'current'"
        class="animate-fade-in space-y-6"
      >
        <div>
          <h2 class="text-4xl font-bold text-white mb-1">
            Current {{ curSyz.diff }}
          </h2>
          <h3 class="text-xl text-red-500 uppercase tracking-widest">
            Primary Arithmetical Flow
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-4 border-y border-zinc-800 py-4">
          <div>
            <span class="block text-xs text-zinc-500 uppercase"
              >Origin Syzygy</span
            >
            <span class="text-xl font-bold text-zinc-200">{{
              curSyz.syzygy
            }}</span>
          </div>
          <div>
            <span class="block text-xs text-zinc-500 uppercase">Demon</span>
            <span class="text-xl font-bold text-red-500">{{
              curSyz.demon
            }}</span>
          </div>
        </div>

        <div class="text-zinc-400 leading-relaxed">
          {{ curSyz.lore }}
        </div>

        <div
          class="bg-zinc-900 p-4 border-l-4 border-red-500 text-sm text-zinc-500"
        >
          <strong class="text-zinc-300 block mb-1">Current Derivation:</strong>
          The arithmetical difference between the digits of each syzygy defines
          a current, which connects to a tractor zone. Currents constitute the
          primary forces and physical flows of the Numogram.
        </div>
      </div>
    </div>
  </div>
</template>
