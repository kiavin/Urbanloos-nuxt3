import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  name: "ServicesPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-page" }, _attrs))} data-v-faab8414><h1 data-v-faab8414>Our Services</h1><p data-v-faab8414>We offer a wide range of services to meet your needs.</p><ul data-v-faab8414><li data-v-faab8414>Service 1: Description of service 1</li><li data-v-faab8414>Service 2: Description of service 2</li><li data-v-faab8414>Service 3: Description of service 3</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-faab8414"]]);

export { Services as default };
//# sourceMappingURL=Services.vue.mjs.map
