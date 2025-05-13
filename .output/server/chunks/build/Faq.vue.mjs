import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  data() {
    return {
      faqs: [
        {
          question: "What is Nuxt.js?",
          answer: "Nuxt.js is a framework for creating Vue.js applications.",
          open: false
        },
        {
          question: "How do I install Nuxt.js?",
          answer: "You can install Nuxt.js using npm or yarn.",
          open: false
        },
        {
          question: "Is Nuxt.js free to use?",
          answer: "Yes, Nuxt.js is an open-source framework.",
          open: false
        }
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-page" }, _attrs))} data-v-239b0e48><h1 data-v-239b0e48>Frequently Asked Questions</h1><!--[-->`);
  ssrRenderList($data.faqs, (faq, index) => {
    _push(`<div class="faq-item" data-v-239b0e48><h2 class="faq-question" data-v-239b0e48>${ssrInterpolate(faq.question)}</h2>`);
    if (faq.open) {
      _push(`<p class="faq-answer" data-v-239b0e48>${ssrInterpolate(faq.answer)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-239b0e48"]]);

export { Faq as default };
//# sourceMappingURL=Faq.vue.mjs.map
