<template>
  <div class="grantPage">
    <div class="grantBox">
      <t-form-item label="发放班级">
        <div class="flex yCenter">
          <t-select multiple>
            <t-option name="班级1" value="班级1"></t-option>
            <t-option name="班级2" value="班级2"></t-option>
            <t-option name="班级3" value="班级3"></t-option>
          </t-select>
        </div>
      </t-form-item>
      <t-form-item label="">
        <template #label>
          <div class="flex yCenter">
            <span> 作业截时间 </span>
            <t-tooltip content="作业截时间">
              <t-icon name="arrow-down-circle"></t-icon>
            </t-tooltip>
          </div>
        </template>
        <div class="flex yCenter">
          <t-date-picker
            enable-time-picker
            allow-input
            clearable
            format="YYYY-MM-DD hh:mm:ss"
          />
        </div>
      </t-form-item>

      <div class="reviewTitle">学生互评设置</div>
      <t-form-item>
        <template #label>
          <div class="flex yCenter">
            <span> 互评时间 </span>
            <t-tooltip content="互评时间">
              <t-icon name="arrow-down-circle"></t-icon>
            </t-tooltip>
          </div>
        </template>
        <div class="flex yCenter reviewTime">
          <t-date-picker
            enable-time-picker
            allow-input
            clearable
            format="YYYY-MM-DD hh:mm:ss"
          />
          <span>至</span>
          <t-date-picker
            enable-time-picker
            allow-input
            clearable
            format="YYYY-MM-DD hh:mm:ss"
          />
        </div>
      </t-form-item>

      <t-form-item label="评阅份数">
        <div class="flex yCenter reviewCopies">
          <t-input class="reviewInput" />
          <span>份/组</span>
        </div>
      </t-form-item>
    </div>

    <div class="addButtonBox">
      <t-button theme="primary" variant="text">
        <template #icon><t-icon name="add" /></template>
        新建
      </t-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.grantPage {
  width: 100%;
}

.grantBox {
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 16px;
  .t-form__item {
    margin-right: 0;
    margin-bottom: var(--td-comp-margin-xxl);
  }
}

.flex {
  width: 100%;
  display: flex;
}
.yCenter {
  align-items: center;
}

.reviewTitle {
  font-weight: 600;
  margin-bottom: var(--td-comp-margin-xxl);
}

.reviewTime {
  & > *:not(:first-child) {
    margin-left: 8px;
  }
}

.reviewCopies {
  .reviewInput {
    width: 80px;
    margin-right: 8px;
  }
}

.addButtonBox {
  margin-top: 5px;

  //   .t-button {
  //     padding-left: 0;
  //   }
}
</style>
