<template>
  <div class="relative">
    <div class="flex flex-col justify-center items-center">
      <span>Dropdown / Menu</span>
      <t-rich-select
        :fetch-options="fetchOptions"
        :placeholder="placeholder"
        :value-attribute="valueAttribute"
        :text-attribute="textAttribute"
        class="w-6/12"
        id="select"
      >
      </t-rich-select>
    </div>
  </div>
</template>

<script>
import TRichSelect from "vue-tailwind/dist/t-rich-select";

export default {
  components: {
    TRichSelect,
  },
  props: {
    valueAttribute: {
      type: String,
      required: false,
      default: "name",
    },
    textAttribute: {
      type: String,
      required: false,
      default: "name",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Type to search.",
    },
    data: {
      type: Array,
      required: true,
    },
  },

  methods: {
    fetchOptions(query) {
      if (!query)
        return {
          results: this.data,
        };
      return {
        results: this.data.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        }),
      };
    },
  },
};
</script>

<style scoped>
.mh-48 {
  max-height: 10rem;
}
</style>