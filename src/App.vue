<template>
  <t-form
    ref="tFormRf"
    :rules="FORM_RULES"
    :data="formData"
    label-align="left"
    size="large"
    @reset="onReset"
    @submit="onSubmit"
  >
    <div class="formGroup">
      <t-form-item label="选择分组方案" name="groupSet">
        <t-select>
          <t-option
            v-for="group in groupSetList"
            :key="group.value"
            :value="group.value"
          >
            {{ group.name }}
          </t-option>
        </t-select>
      </t-form-item>
      <t-form-item label="标题" name="title">
        <t-input placeholder="请输入内容" />
      </t-form-item>
      <t-form-item label="作业附件" name="upload">
        <div class="customUploadItem">
          <div>
            <t-upload>
              <div class="customUpload">文件上传</div>
            </t-upload>
          </div>
          <div class="uploadType">
            <div class="uploadTypeItem">
              <t-icon name="add" />
              <span> 说明 </span>
            </div>
            <div class="uploadTypeItem">
              <t-icon name="add" /> <span> 知识点 </span>
            </div>
            <div class="uploadTypeItem">
              <t-icon name="add" /> <span> OBE指标 </span>
            </div>
          </div>
        </div>
      </t-form-item>
    </div>
    <div class="formGroup">
      <t-form-item label="选择分组方案" name="type">
        <t-radio-group v-model="formData.type">
          <t-radio value="person">个人作业</t-radio>
          <t-radio value="group">分组作业</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="评分方式" name="method">
        <div class="methodTable">
          <div>
            <div>评分方式</div>
            <div>
              <t-checkbox> 教师评阅 </t-checkbox>
              <t-tooltip content="教师评阅"> 提示 </t-tooltip>
            </div>
            <div>
              <t-checkbox> 学生互评 </t-checkbox>
              <t-tooltip content="学生互评"> 提示 </t-tooltip>
            </div>
          </div>
          <div>
            <div>成绩占比</div>
            <div>
              <t-input placeholder="50" suffix="%"> </t-input>
            </div>
            <div>
              <t-input placeholder="50" suffix="%"> </t-input>
            </div>
          </div>
          <div>
            <div>评分设置</div>
            <div></div>
            <div>
              <t-checkbox>匿名评分</t-checkbox>
              <t-checkbox>仅完成作业才可参与</t-checkbox>
              <t-checkbox>未完成互评扣分</t-checkbox>
            </div>
          </div>
          <div>
            <div>量规</div>
            <div>
              <t-input placeholder="量规" />
            </div>
          </div>
        </div>
      </t-form-item>
      <t-form-item label="发放"> </t-form-item>
    </div>
    <div class="formGroup">
      <t-form-item label="成绩比例" name="type">
        <t-slider
          v-model="formData.scoreProportion"
          :show-tooltip="true"
          :marks="marks1"
          :input-number-props="true"
        />
      </t-form-item>
      <t-form-item label="完成指标" name="method">
        <div>
          <div>
            <t-radio>无</t-radio>
          </div>
          <div>
            <t-radio>有</t-radio>
            <t-select placeholder="提交作业"></t-select>
          </div>
        </div>
      </t-form-item>
    </div>
  </t-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const tFormRf = ref();

const FORM_RULES = {
  groupSet: [{ required: true, message: "选择分组方案" }],
  title: [{ required: true, message: "选择分组方案" }],
};

const groupSetList = [
  {
    name: "分组1",
    value: "group set1",
  },
  {
    name: "分组2",
    value: "group set2",
  },
  {
    name: "分组3",
    value: "group set3",
  },
];
const formData = reactive({
  type: "person",
  scoreProportion: "10",
});

const marks1 = {
  100: "100",
};

const onReset = () => {};

const onSubmit = () => {};
</script>

<style lang="scss" scoped>
.formGroup {
  padding: 20px;
  border-bottom: 2px solid #eee;
}
.customUploadItem {
  .customUpload {
    width: 200px;
    height: 100px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      border: 1px solid var(--brand-main);
    }
  }

  .uploadType {
    display: flex;
    margin-top: 20px;
    .uploadTypeItem {
      height: 20px;
      cursor: pointer;
      padding: 6px 8px;
      color: var(--brand-main);
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin-left: 8px;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
