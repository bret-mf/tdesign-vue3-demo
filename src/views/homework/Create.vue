<template>
  <t-form
    class="form"
    ref="tFormRf"
    :rules="FORM_RULES"
    :data="formData"
    label-align="left"
    labelWidth="120px"
    size="large"
    :preventSubmitDefault="true"
  >
    <div class="formGroup">
      <t-form-item label="选择分组方案" name="groupSet">
        <t-select v-model="formData.groupSet">
          <t-option
            v-for="group in groupSetList"
            :key="group.value"
            :value="group.value"
            :label="group.name"
          >
          </t-option>
        </t-select>
      </t-form-item>
      <t-form-item label="标题" name="title">
        <t-input placeholder="请输入内容" v-model="formData.title" />
      </t-form-item>
      <t-form-item label="作业附件" name="upload">
        <div class="customUploadItem">
          <div>
            <t-upload>
              <div class="customUpload">
                <t-icon name="add" />
                文件上传
              </div>
            </t-upload>
          </div>
          <div class="uploadType">
            <t-button class="uploadTypeItem" theme="primary" variant="text">
              <template #icon><t-icon name="add" /></template>
              说明
            </t-button>
            <t-button class="uploadTypeItem" theme="primary" variant="text">
              <template #icon><t-icon name="add" /></template>
              知识点
            </t-button>
            <t-button class="uploadTypeItem" theme="primary" variant="text">
              <template #icon><t-icon name="add" /></template>
              OBE指标
            </t-button>
          </div>
        </div>
      </t-form-item>
    </div>
    <div class="formGroup">
      <t-form-item label="选择作业形式" name="type">
        <t-radio-group v-model="formData.type" @change="changeType">
          <t-radio value="person">个人作业</t-radio>
          <t-radio value="group">分组作业</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="评分方式" name="method">
        <ScoringMethod
          :type="formData.type"
          v-model:teacherReview="formData.teacherReview"
          v-model:personalReview="formData.personalReview"
          v-model:groupReview="formData.groupReview"
        ></ScoringMethod>
      </t-form-item>
      <t-form-item label="发放">
        <Grant></Grant>
      </t-form-item>
    </div>
    <div class="formGroup">
      <t-form-item label="成绩比例" name="type">
        <Slider
          v-model="formData.scoreProportion"
          :min="0"
          :max="100"
          :surplus="100"
        >
        </Slider>
      </t-form-item>
      <t-form-item label="完成指标" name="completionTarget">
        <div class="completionTarget_formItem">
          <div class="completionTargetTop">
            <t-radio
              value="none"
              :checked="formData.completionTarget.name === 'none'"
              @change="changeCompletionTargetName('none')"
              >无</t-radio
            >
            <t-radio
              class="choice"
              value="need"
              :checked="formData.completionTarget.name === 'need'"
              @change="changeCompletionTargetName('need')"
              >有
            </t-radio>
            <div
              class="select_box"
              v-if="formData.completionTarget.name === 'need'"
            >
              <t-select
                placeholder="提交作业"
                v-model="formData.completionTarget.value"
              >
                <t-option
                  v-for="completionTarget in completionTargets"
                  :key="completionTarget.value"
                  :value="completionTarget.value"
                >
                  {{ completionTarget.name }}
                </t-option>
              </t-select>
            </div>
          </div>
          <div
            class="completionTargetBottom"
            v-if="formData.completionTarget.name === 'need'"
          >
            <ToolTip
              class="formToolTip"
              message="设置「完成指标」后，学生需达到条件才算完成。该活动将自动纳入学习分析的完成度统计，并作为学生学习进度的分母条件"
            ></ToolTip>
          </div>
        </div>
      </t-form-item>
    </div>
  </t-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import ScoringMethod from "./widgets/ScoringMethod.vue";
import Grant from "./widgets/Grant.vue";
import Slider from "@/components/Slider.vue";

const tFormRf = ref();

const FORM_RULES = {
  groupSet: [{ required: true, message: "选择分组方案" }],
  title: [{ required: true, message: "请填写标题" }],
  endTime: [{ required: true, message: "请选择结束时间" }],
  reviewTime: [{ required: true, message: "请选择互评时间" }],
  reviewCopies: [{ required: true, message: "请填写评阅份数" }],
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

const completionTargets = [
  { name: "指标1", value: "指标1" },
  { name: "指标2", value: "指标2" },
];
const formData = reactive<{
  groupSet: string;
  title: string;
  type: "person" | "group";
  scoreProportion: number;
  teacherReview: boolean;
  personalReview: boolean;
  groupReview: boolean;
  completionTarget: {
    name: "none" | "need";
    value: string;
  };
}>({
  groupSet: "",
  title: "",
  type: "person",
  scoreProportion: 0,
  teacherReview: true,
  personalReview: false,
  groupReview: false,
  completionTarget: {
    name: "none",
    value: "",
  },
});

const changeType = (value: string) => {
  if (value === "group") {
    formData.groupReview = false;
  }
};

const changeCompletionTargetName = (value: "none" | "need") => {
  formData.completionTarget.name = value;
};

const onReset = () => {};

const validate = () => {
  tFormRf.value.validate();
};

const clearValidate = () => {
  tFormRf.value.clearValidate();
};

defineExpose({
  validate,
  onReset,
  clearValidate,
});
</script>

<style lang="scss" scoped>
.form {
  color: #262833;
}

.formGroup {
  padding: 24px 32px;
  border-bottom: 2px solid #eee;
}
.customUploadItem {
  .customUpload {
    width: 200px;
    height: 64px;
    border-radius: 4px;
    border: 1px solid #b3b3b3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f4f4f4;

    svg {
      color: var(--brand-main);
      margin-right: 10px;
    }

    &:hover {
      border: 1px solid var(--brand-main);
    }
  }

  .uploadType {
    display: flex;
    margin-top: 20px;
    .uploadTypeItem {
      min-height: 20px;
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

.formToolTip {
  max-width: 300px;
}

.completionTarget_formItem {
  width: 100%;
  --choice-width: 40px;
  --choice-space: 30px;

  .completionTargetTop {
    display: flex;
    align-items: center;

    .choice {
      width: var(--choice-width);
      &:not(:first-child) {
        margin-left: var(--choice-space);
      }
    }

    .select_box {
      margin-left: 8px;
    }
  }

  .completionTargetBottom {
    margin-top: 5px;
    width: 100%;

    .formToolTip {
      max-width: 300px;
      position: relative;
      left: calc(var(--choice-width) + var(--choice-space));
    }
  }
}
</style>
