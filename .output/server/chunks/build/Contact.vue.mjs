import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
      alert("Thank you for contacting us!");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-6f36d428><h1 data-v-6f36d428>Contact Us</h1><form data-v-6f36d428><div class="form-group" data-v-6f36d428><label for="name" data-v-6f36d428>Name:</label><input type="text" id="name"${ssrRenderAttr("value", $data.form.name)} required data-v-6f36d428></div><div class="form-group" data-v-6f36d428><label for="email" data-v-6f36d428>Email:</label><input type="email" id="email"${ssrRenderAttr("value", $data.form.email)} required data-v-6f36d428></div><div class="form-group" data-v-6f36d428><label for="message" data-v-6f36d428>Message:</label><textarea id="message" required data-v-6f36d428>${ssrInterpolate($data.form.message)}</textarea></div><button type="submit" data-v-6f36d428>Submit</button></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6f36d428"]]);

export { Contact as default };
//# sourceMappingURL=Contact.vue.mjs.map
