<template>
  <div class="buttons">
    <button
      :class="
        type === 'button' ? 'magnetic outline-link' : 'magnetic inline-link'
      "
      data-magnetic
    >
      {{ title.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import MagneticButton from "@/utils/button";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    colorFont: {
      type: String,
      default: "#679334",
    },
  },

  mounted() {
    const setting = {
      distance: 120,
    };
    MagneticButton(setting);
  },
};
</script>

<style>
.outline-link.magnetic {
  --color: white;
  --hover: white;
}

.outline-link.magnetic:hover,
.outline-link.magnetic:focus {
  box-shadow: inset 0 0 0 2em var(--hover);
}

.outline-link.magnetic {
  color: var(--color);
  transition: 0.25s;
}
.outline-link.magnetic:hover,
.outline-link.magnetic:focus {
  border-color: var(--hover);
  color: black;
}

.outline-link.magnetic {
  background: none;
  border: 1px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

.inline-link.magnetic {
  padding: 20px;
  margin-left: -20px;
  position: relative;
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  background-color: inherit;
  color: v-bind(colorFont);
}
.inline-link.magnetic:hover {
  color: #679334;
}
.inline-link.magnetic:hover:before {
  width: 100%;
  width: calc(100% - 40px);
}
.inline-link.magnetic:before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 0;
  height: 2px;
  background: #679334;
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}
</style>