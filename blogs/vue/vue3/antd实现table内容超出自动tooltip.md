---
title: vue3.0+antd实现table内容超出自动tooltip
date: '2022-07-28'
sidebar: true
categories:
 - 前端
 - 技术
tags:
 - Vue
 - Vue3
publish: true
---
:::tip
在`Vue3`中使用`ant`库，当文本长度超过表格`td`宽度时，自动实现`tooltip`效果。
:::

<!-- more -->
## Tooltip实现
```vue
<template>
  <a-tooltip
    v-if="isShowTooltip"
    placement="top"
    trigger="hover"
    overlayClassName="table-class"
    v-model:visible="isShow"
  >
    <template #title>
      <span>{{ content }}</span>
    </template>
    <div class="content" @mouseleave="mouseleave">
      <span ref="contentRef">
        <slot></slot>
      </span>
    </div>
  </a-tooltip>
  <div v-else class="content" @mouseenter="mouseenter">
    <span ref="contentRef">
      <slot>{{ contentText }}</slot>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isShow = ref(true);
    const contentRef = ref();
    const isShowTooltip = ref(false);
    const mouseleave = () => {
      // isShowTooltip.value = false
    };
    const mouseenter = () => {
    // 关键代码逻辑
      if (
        contentRef.value.parentNode.offsetWidth > contentRef.value.offsetWidth
      ) {
        isShowTooltip.value = false;
      } else {
        isShowTooltip.value = true;
      }
    };
    return {
      isShow,
      contentRef,
      mouseenter,
      mouseleave,
      isShowTooltip,
    };
  },
});
</script>

<style>
.content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

```

## Table封装及tooltip使用
主要看tooltip的功能实现
```vue
<template>
  <a-table v-bind="$attrs" :rowKey="rowkeyIndex" :pagination="pagination">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.slot">
        <!-- 如果配置了ellipsis -->
        <ele-tooltip v-if="column.ellipsis" :content="text">
          <slot
            :name="column.dataIndex"
            :col="column"
            :rowItem="column"
            :text="text"
            :rowData="record"
          ></slot>
        </ele-tooltip>
        <slot
          v-else
          :name="column.dataIndex"
          :col="column"
          :rowItem="column"
          :text="text"
          :rowData="record"
        ></slot>
      </template>
      <!-- 默认没有slot 且配置了ellipsis -->
      <template v-else-if="column.ellipsis">
        <ele-tooltip :content="text">
          {{ text }}
        </ele-tooltip>
      </template>
    </template>
    <template #headerCell v-if="slot.header">
      <slot name="header"></slot>
    </template>
  </a-table>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import eleTooltip from "@/components/tooltip/index.vue";
export default defineComponent({
  name: "commonTable",
  components: {
    eleTooltip,
  },
  props: {
    keyId: {
      type: String,
      default: "",
    },
    showQuickJumper: {
      type: Boolean,
      default: true,
    },
    showLessItems: {
      type: Boolean,
      default: false,
    },
    showSizeChanger: {
      type: Boolean,
      default: true,
    },
    total: {
      type: Number,
      default: 0,
    },
    paginationSize: {
      type: String,
      default: "",
    },
    defaultPageSize: {
      type: Number,
      default: 10,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
  setup(props, context) {
    const attrs: any = context.attrs;
    const slot = context.slots;
    const columnsCustom = computed(() => {
      return (
        attrs.columns &&
        attrs.columns
          .filter((item: any) => {
            return item.slot;
          })
          .map((item: any) => item.slot)
      );
    });
    // 重新定义表格分页
    const pagination = computed(() => {
      return {
        size: props.paginationSize,
        hideOnSinglePage: false,
        pageSize: props.pageSize,
        current: props.current,
        defaultPageSize: props.defaultPageSize,
        showQuickJumper: props.showQuickJumper,
        showLessItems: props.showLessItems,
        showSizeChanger: props.showSizeChanger,
        pageSizeOptions: ["10", "20", "50", "100"],
        total: props.total,
        showTotal: (total: number) => {
          return `共 ${total} 条`;
        },
      };
    });
    const rowkeyIndex = (row: any) => {
      return row.id || row[props.keyId];
    };
    return {
      slot,
      rowkeyIndex,
      columnsCustom,
      pagination,
    };
  },
});
</script>
```

## 关键参数
columns传给commonTable组件使用
```js
columns: [
    {
        title: "名称",
        dataIndex: "userName",
        width: 120,
        ellipsis: true,
    },
    {
        title: "邮箱",
        dataIndex: "userEmail",
        width: 210,
        ellipsis: true,
    },
    {
        title: "状态",
        dataIndex: 'employeeStatus',
        slot: true, // 如果想根据内容长度自动添加Tooltip，则必须添加此属性
        width: 80
    },
]
<!-- columns传给commonTable组件使用 -->
```
