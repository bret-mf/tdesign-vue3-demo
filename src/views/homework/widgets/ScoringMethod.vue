<template>
  <div class="scoringMethod_page">
    <div class="row">
      <div class="column title">评分方式</div>
      <div class="column title">
        <div class="flex_title">
          <t-checkbox> 教师评阅 </t-checkbox>
          <t-tooltip content="教师评阅">
            <t-icon name="arrow-down-circle"></t-icon>
          </t-tooltip>
        </div>
      </div>
      <div class="column title">
        <div class="flex_title">
          <t-checkbox> 学生互评 </t-checkbox>
          <t-tooltip content="学生互评">
            <t-icon name="arrow-down-circle"></t-icon>
          </t-tooltip>
        </div>
      </div>
      <div class="column title">
        <div class="flex_title">
          <t-checkbox> 分组互评 </t-checkbox>
          <t-tooltip content="分组互评">
            <t-icon name="arrow-down-circle"></t-icon>
          </t-tooltip>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column title">成绩占比</div>
      <div class="column">
        <div class="score_proportion">
          <t-input placeholder="50" suffix="%"> </t-input>
        </div>
      </div>
      <div class="column">
        <div class="score_proportion">
          <t-input placeholder="50" suffix="%"> </t-input>
        </div>
      </div>
      <div class="column">
        <div class="score_proportion">
          <t-input placeholder="50" suffix="%"> </t-input>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column title">评分设置</div>
      <div class="column"></div>
      <div class="column">
        <div class="scoring_setting">
          <t-checkbox>匿名评分</t-checkbox>
          <t-checkbox>仅完成作业才可参与</t-checkbox>
          <t-checkbox>未完成互评扣分</t-checkbox>
        </div>
      </div>
      <div class="column">
        <div class="scoring_setting">
          <t-checkbox>匿名评分</t-checkbox>
          <t-checkbox>仅完成作业才可参与</t-checkbox>
          <t-checkbox>未完成互评扣分</t-checkbox>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column title">量规</div>
      <div class="column">
        <t-input placeholder="量规" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.scoringMethod_page {
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  display: table;

  .title {
    text-align: center;
    vertical-align: middle;
    background-color: #f7f7f7;
  }

  .row {
    display: table-row;

    .column {
      padding: 16px;
      display: table-cell;
      min-width: 100px;

      &:not(:last-child) {
        border-right: 1px solid #dfdfdf;
      }

      &:not(.title) {
        text-align: center;
        vertical-align: top;
      }
    }

    &:not(:last-child) {
      .column {
        border-bottom: 1px solid #dfdfdf;
      }
    }
  }
}

.flex_title {
  display: flex;
  align-items: center;

  svg {
    color: #737373;
  }

  & > * {
    margin-left: 5px;
  }
}

.score_proportion {
  width: 96px;
}

.scoring_setting {
  display: flex;
  flex-direction: column;

  & > * {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }
}
</style>
