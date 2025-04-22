<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ArgumentParser",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    regex: {
      type: String,
      default: ""
    }
  },
  data() {
    const regexInstance = new RegExp(this.regex);

    return {
      input: this.placeholder,
      regexInstance: regexInstance,
      output: "Valid",
    }
  },
  methods: {
    checkInput(newValue: String,regexInstance: RegExp): boolean {
      this.output = regexInstance.test(newValue) ? "Valid" : "Invalid"
      if (this.output == "Valid") {
        document.querySelector(".output-text").style.backgroundColor = "#4d6c2a";
      } else {
        document.querySelector(".output-text").style.backgroundColor = "#d32a2a";
      }
    }
  },
  watch: {
    input(newValue) {
      this.checkInput(newValue, this.regexInstance)
    }
  }
})
</script>

<template>
  <div class="console">
    <div class="console-title-container">
      <div class="console-title">Argument Parser</div>
      <label class="output-text">{{ output }}</label>
    </div>
    <input class="input" v-model="input" type="text" :placeholder="placeholder" >
  </div>
</template>

<style scoped>
.input {
  display: inline-block;
  margin-left: 5px;
  font-weight: 400;
  font-family: var(--vp-font-family-mono), monospace;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  padding: 6px 16px;
  border-radius: 5px;
  background-color: var(--vp-c-bg);
  margin-right: 5px;
}

.input:hover {
  color: var(--vp-c-text-1);
}

.output-text {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: white;
  background-color: #4d6c2a;
  margin-left: auto;
}

.console {
  background-color: var(--vp-code-tab-bg);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-base), sans-serif;
  margin: 15px 0;
}

.console * {
  transition: 0.2s;
}

.console-title-container {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
  margin: 0 5px 7px 5px;
  padding-left: 6px;
  padding-bottom: 6px;
  background-color: var(--vp-code-tab-bg);
}

.console-title {
  color: var(--vp-c-text-1);
  font-weight: 500;
  font-size: 0.95rem;
}
</style>