<template>
  <div class="tool-tip">
    <i class="tool-tip-arrow" v-if="showArrow"></i>
    <label class="tool-tip-message">{{ props.message }}</label>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  message: string;
  showArrow?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  showArrow: true,
});
</script>

<style lang="scss" scoped>
.tool-tip {
  --tip-arrow-width: 4px;
  --tip-arrow-height: 5px;

  display: inline-block;
  border-radius: 3px;
  background: #e9e9e9;
  padding: 12px 16px;
  position: relative;

  .tool-tip-message {
    color: #4d4d4d;
    font-size: 13px;
  }

  .tool-tip-arrow {
    position: absolute;
    top: -5px;
    left: 5%;
    width: 0;
    height: 0;
    border-left: var(--tip-arrow-width) solid transparent;
    border-right: var(--tip-arrow-width) solid transparent;
    border-bottom: var(--tip-arrow-height) solid #e9e9e9;
  }
  &:has(> .tool-tip-arrow) {
    margin-top: var(--tip-arrow-height);
  }
}
</style>
