<template>
  <t-button @click="createHomework">创建作业</t-button>
  <t-dialog class="baseDialog" top="30" width="80%" v-model:visible="visible">
    <template #header>
      <div>新增作业</div>
    </template>
    <HomeworkCreate></HomeworkCreate>
    <template #footer>
      <div class="footerButtonBox">
        <t-button theme="primary" size="large">保存</t-button>
        <t-button class="cancelButton" size="large" variant="text">
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

const createHomework = () => {
  visible.value = true;
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
