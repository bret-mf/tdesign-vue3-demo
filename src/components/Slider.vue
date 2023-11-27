<template>
  <div class="sliderPage" :disabled="disabled ? true : null">
    <div class="sliderContainer">
      <div class="sliderBox" :style="{ right: `${right}%` }">
        <t-slider
          :disabled="disabled"
          v-model="sliderValue"
          :show-tooltip="showTooltip"
          :marks="marks"
          :min="min"
          :max="surplus"
          :step="step"
          @change="sliderValueChange"
        >
        </t-slider>
      </div>

      <div class="sliderChute"></div>
    </div>
    <div class="sliderInput" v-if="inputNumberProps">
      <t-input-number
        theme="normal"
        auto-width
        :value="sliderInputValue"
        :disabled="disabled"
        :min="min"
        :max="surplus"
        :decimal-places="decimalPlaces"
        :allowInputOverLimit="false"
        placeholder="请输入"
        suffix="%"
        @change="sliderInputChange"
      ></t-input-number>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
interface IProps {
  modelValue: number;
  surplus: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showTooltip?: boolean;
  inputNumberProps?: boolean;
  decimalPlaces?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  surplus: 100,
  step: 0.1,
  disabled: false,
  showTooltip: true,
  inputNumberProps: true,
  decimalPlaces: 1,
});

interface IEmits {
  (e: "update:modelValue", value: number): void;
}

const emits = defineEmits<IEmits>();

const right = computed(() => {
  const total = Number((props.max - props.min).toFixed(2));
  const diff = Number((total - props.surplus).toFixed(2));
  if (diff < 0) {
    return 0;
  }
  return (diff * 100) / 100;
});

const sliderValue = ref<number>(props.modelValue);
const sliderInputValue = ref<number>(props.modelValue);

const marks = computed(() => {
  if (sliderValue.value === props.surplus) {
    return [sliderValue.value];
  }
  return [sliderValue.value, props.surplus];
});

const sliderValueChange = (value: number) => {
  sliderInputValue.value = value;
  emits("update:modelValue", value);
};

const sliderInputChange = (value: number) => {
  let _value = value;
  if (value === undefined) {
    _value = 0;
  } else if (value > props.surplus) {
    _value = props.surplus;
  } else if (value < props.min) {
    _value = props.min;
  }
  sliderValue.value = _value;
  emits("update:modelValue", _value);
};
</script>

<style lang="scss" scoped>
.sliderPage {
  width: 100%;
  display: flex;
  align-items: center;

  &[disabled] {
    .sliderChute {
      cursor: not-allowed;
    }
  }
}

.sliderContainer {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: var(--td-radius-round);

  ::v-deep(.t-slider__rail) {
    background-color: var(--td-brand-color-3);
  }

  ::v-deep(.t-slider__mark-text) {
    min-width: 30px;
    top: auto;
    bottom: calc(var(--td-size-2) + var(--td-comp-paddingTB-xs) + 2px);
  }

  .sliderBox {
    position: absolute;
    z-index: 1;
    left: 0;
  }

  .sliderChute {
    width: 100%;
    height: var(--td-size-2);
    border-radius: var(--td-radius-round);
    position: absolute;
    left: 0;
    right: 0;
    background-color: var(--td-bg-color-secondarycomponent);
  }
}

.sliderInput {
  width: 100px;
  margin-left: 20px;
}
</style>
