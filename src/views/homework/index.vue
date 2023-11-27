<template>
  <t-button @click="createHomework">创建作业</t-button>
  <t-dialog
    class="baseDialog"
    top="30"
    width="80%"
    v-model:visible="visible"
    @closed="handleClosed"
  >
    <template #header>
      <div>新增作业</div>
    </template>
    <HomeworkCreate ref="createRef"></HomeworkCreate>
    <template #footer>
      <div class="footerButtonBox">
        <t-button theme="primary" size="large" @click="save">保存</t-button>
        <t-button
          class="cancelButton"
          size="large"
          variant="text"
          @click="cancel"
        >
          取消
        </t-button>
      </div>
    </template>
  </t-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HomeworkCreate from "./Create.vue";

const visible = ref<boolean>(false);
const createRef = ref<InstanceType<typeof HomeworkCreate>>();

const createHomework = () => {
  visible.value = true;
};

const save = () => {
  createRef.value?.validate();
};

const cancel = () => {
  visible.value = false;
};

const handleClosed = () => {
  createRef.value?.clearValidate();
};
</script>

<style lang="scss" scoped>
.footerButtonBox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 12px 24px;
  }

  .cancelButton {
    background-color: #777;
    border: none;
    color: #fff;
  }
}
</style>
