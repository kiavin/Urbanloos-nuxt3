import { computed, defineComponent, useAttrs, ref, mergeProps, unref, useSSRContext, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { l as defu, r as withLeadingSlash, m as hasProtocol, n as joinURL, v as parseURL, x as encodePath, y as encodeParam, p as publicAssetsURL } from '../nitro/nitro.mjs';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}

function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}

function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}

const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;

const ipx = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getImage: getImage,
  supportsAlias: supportsAlias,
  validateDomains: validateDomains
});

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipx, defaults: {} }
};

const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};

const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});

const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = _sfc_main$7;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "dark:bg-gray-800 bg-white relative overflow-hidden" }, _attrs))}><div class="relative w-full" style="${ssrRenderStyle({ "height": "92vh" })}">`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "/images/IMG_20241227_084221_655.webp",
    class: "absolute inset-0 w-full h-full object-cover",
    loading: "lazy",
    alt: "Hero Section Background",
    width: "1920",
    height: "1080"
  }, null, _parent));
  _push(`<div class="absolute inset-0 flex items-center"><div class="bg-opacity-100 sm:w-3/3 w-full h-full flex items-center justify-center" style="${ssrRenderStyle({ "backdrop-filter": "blur(3px)", "background-color": "rgba(0, 0, 0, 0.4)" })}"><div class="text-center text-white px-6"><span class="w-100 h-2" style="${ssrRenderStyle({ "background-color": "#f9f9f9", "margin-bottom": "12px", "display": "inline-block" })}"></span><h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none" style="${ssrRenderStyle({ "color": "#f9f9f9" })}"> Luxury Loos. <span class="text-5xl sm:text-7xl" style="${ssrRenderStyle({ "color": "#fff" })}"> Everyday Prices.</span><span class="text-5xl sm:text-7xl" style="${ssrRenderStyle({ "color": "#5dbb63" })}"> Everywhere You Need Us</span></h1><p> Urbanloos is proud to be Kenya’s trusted provider of high-quality mobile toilet solutions. </p><p>We specialize in serving a wide range of events and construction sites across Nakuru, Kiambu, Narok, Nyandarua, and Laikipia counties, with services expanding to neighboring regions as well. </p><div class="flex mt-8 justify-center"><a href="#" class="uppercase py-2 px-4 rounded-lg text-white text-md mr-4" style="${ssrRenderStyle({ "background-color": "#5dbb63", "border": "2px solid transparent" })}"> Get started </a></div></div></div></div></div></main>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$5 = {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gray-50",
        id: "about"
      }, _attrs))}><div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg-gray-50"><div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1"><div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"><div class="w-full flex-col justify-center items-start gap-8 flex"><div class="flex-col justify-start lg:items-start items-center gap-4 flex"><h6 class="text-gray-800 text-base font-normal leading-relaxed"> About Us </h6><div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex"><h4 class="text-[#5DBB63] text-4xl font-bold font-manrope leading-normal lg:text-start text-center"> The Tale of Our Achievement Story </h4><p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"> At Urbanloos, we specialize in providing clean, reliable mobile toilet rentals for events of all sizes, from weddings and festivals to corporate gatherings. With a strong focus on hygiene standards, customer satisfaction, and on-time portable restroom delivery, we ensure your guests enjoy a comfortable, worry-free experience. Trust our expert team at Urbanloos to deliver high-quality event toilet hire solutions, tailored to meet your specific needs and make your event truly exceptional. </p></div></div><div class="w-full flex-col justify-center items-start gap-6 flex"><div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"><div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"><h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9"> Clean &amp; Reliable </h4><p class="text-gray-500 text-base font-normal leading-relaxed"> &quot;Sparkling clean mobile toilets for a worry-free event experience.&quot; </p></div><div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"><h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9"> Fast Delivery </h4><p class="text-gray-500 text-base font-normal leading-relaxed"> &quot;On-time delivery and setup, every time — no delays, no stress.&quot; </p></div></div><div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"><div class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"><h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9"> Wide Coverage </h4><p class="text-gray-500 text-base font-normal leading-relaxed"> &quot;Serving a wide range of events and locations with dependable mobile toilets.&quot; </p></div><div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"><h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9"> Pocket-Friendly </h4><p class="text-gray-500 text-base font-normal leading-relaxed"> &quot;Affordable mobile restroom solutions without compromising on quality.&quot; </p></div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out"${_scopeId}>Learn More About Urbanloos</span><svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"${_scopeId}><path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", { class: "px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out" }, "Learn More About Urbanloos"),
              (openBlock(), createBlock("svg", {
                class: "group-hover:translate-x-0.5 transition-all duration-700 ease-in-out",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M6.75265 4.49658L11.2528 8.99677L6.75 13.4996",
                  stroke: "#4F46E5",
                  "stroke-width": "1.6",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full lg:justify-start justify-center items-start flex"><div class="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-300 rounded-3xl sm:border border-gray-200 relative" style="${ssrRenderStyle({ "background-size": "cover", "background-position": "center" })}">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(EffectFade)],
        "slides-per-view": 1,
        autoplay: { delay: 5e3, disableOnInteraction: true },
        effect: "fade",
        loop: true,
        pagination: "",
        class: "rounded-3xl sm:mt-5 sm:ml-5 w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    class: "w-full h-full object-cover rounded-3xl",
                    src: "/images/standard1.webp",
                    alt: "About Us Image 1",
                    width: "564",
                    height: "646",
                    loading: "lazy"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      class: "w-full h-full object-cover rounded-3xl",
                      src: "/images/standard1.webp",
                      alt: "About Us Image 1",
                      width: "564",
                      height: "646",
                      loading: "lazy"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    class: "w-full h-full object-cover rounded-3xl",
                    src: "/images/IMG_20241227_084232_432.webp",
                    alt: "About Us Image 2",
                    width: "564",
                    height: "646",
                    loading: "lazy"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      class: "w-full h-full object-cover rounded-3xl",
                      src: "/images/IMG_20241227_084232_432.webp",
                      alt: "About Us Image 2",
                      width: "564",
                      height: "646",
                      loading: "lazy"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, {
                    class: "w-full h-full object-cover rounded-3xl",
                    src: "/images/IMG_20241227_084632_600.webp",
                    alt: "About Us Image 3",
                    width: "564",
                    height: "646",
                    loading: "lazy"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtImg, {
                      class: "w-full h-full object-cover rounded-3xl",
                      src: "/images/IMG_20241227_084632_600.webp",
                      alt: "About Us Image 3",
                      width: "564",
                      height: "646",
                      loading: "lazy"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtImg, {
                    class: "w-full h-full object-cover rounded-3xl",
                    src: "/images/standard1.webp",
                    alt: "About Us Image 1",
                    width: "564",
                    height: "646",
                    loading: "lazy"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtImg, {
                    class: "w-full h-full object-cover rounded-3xl",
                    src: "/images/IMG_20241227_084232_432.webp",
                    alt: "About Us Image 2",
                    width: "564",
                    height: "646",
                    loading: "lazy"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtImg, {
                    class: "w-full h-full object-cover rounded-3xl",
                    src: "/images/IMG_20241227_084632_600.webp",
                    alt: "About Us Image 3",
                    width: "564",
                    height: "646",
                    loading: "lazy"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$7;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-secondary" }, _attrs))}><section class="relative bg-[#00A63E] h-[300px]"><div class="absolute w-full bottom-0 mx-auto"><div class="container mx-auto"><div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3"><div><div class="lg:block lge:block md:hidden mdsm:hidden sm:hidden">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/pusher.avif",
    alt: "person ",
    class: "h-[300px] mx-auto hidden md:block",
    width: "500",
    height: "300",
    loading: "lazy"
  }, null, _parent));
  _push(`</div></div><div class="col-span-2 relative sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center"><div class="absolute bottom-0 sm:flex sm:flex-col sm:items-center sm:justify-center sm:pb-4 text-center"><h3 class="text-[#f9f9f9] relative after:bg-[#fff] after:w-[10%] text-4xl font-semibold pb-4 sm:block"> Need Mobile Toilets for Your Event? Get a Free Quote Now! </h3><h4 class="text-[#fff] text-[20px] hidden md:block"> &quot;Book Your Clean, Reliable Mobile Toilet Today — Make Your Event Comfortable and Worry-Free!&quot; `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-[#f0bb0c] underline underline-[#fff] underline-offset-2"${_scopeId}> Request your quote now! </span>`);
      } else {
        return [
          createVNode("span", { class: "text-[#f0bb0c] underline underline-[#fff] underline-offset-2" }, " Request your quote now! ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h4>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="bg-[#f0bb0c] rounded-lg py-2 px-16 mt-4 hover:bg-[#fff] sm:mt-4 sm:mx-auto"${_scopeId}> Call Now </button>`);
      } else {
        return [
          createVNode("button", { class: "bg-[#f0bb0c] rounded-lg py-2 px-16 mt-4 hover:bg-[#fff] sm:mt-4 sm:mx-auto" }, " Call Now ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionCall.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ActionCall = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$3 = {
  __name: "ToiletUnits",
  __ssrInlineRender: true,
  setup(__props) {
    const standardUnitImages = [
      { src: "/images/IMG_20241227_083356_610.webp", alt: "Standard Unit Image 1" },
      { src: "/images/standard1.webp", alt: "Standard Unit Image 2" },
      { src: "/images/IMG_20241227_084232_432.webp", alt: "Standard Unit Image 3" },
      { src: "/images/IMG_20241227_084632_600.webp", alt: "Standard Unit Image 4" }
    ];
    const vipUnitImages = [
      { src: "/images/vip1.webp", alt: "VIP Unit Image 1" },
      { src: "/images/shower-toilet-trailer-combo-unit-intro.webp", alt: "VIP Unit Image 2" },
      { src: "/images/vip2.webp", alt: "VIP Unit Image 3" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16 bg-gray-50",
        id: "services"
      }, _attrs))}><div class="container mx-auto px-4 space-y-16 bg-gray-50"><h2 class="text-3xl font-bold text-center text-gray-800 mb-10"> Our Mobile Toilet Units </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"><div class="w-full h-[45vh]">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(EffectFade)],
        "slides-per-view": 1,
        autoplay: { delay: 4e3, disableOnInteraction: false },
        effect: "fade",
        loop: true,
        pagination: "",
        class: "w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(standardUnitImages, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full h-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      class: "w-full h-full object-cover rounded-t-2xl",
                      src: image.src,
                      alt: image.alt,
                      width: "800",
                      height: "600",
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode(_component_NuxtImg, {
                          class: "w-full h-full object-cover rounded-t-2xl",
                          src: image.src,
                          alt: image.alt,
                          width: "800",
                          height: "600",
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(standardUnitImages, (image, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode(_component_NuxtImg, {
                        class: "w-full h-full object-cover rounded-t-2xl",
                        src: image.src,
                        alt: image.alt,
                        width: "800",
                        height: "600",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-4"><h3 class="text-xl font-semibold text-blue-700 mb-3 text-center"> Standard Unit </h3><ul class="space-y-2 text-gray-600"><li>✅ Basic handwash station</li><li>✅ Interior ventilation</li><li>✅ Eco-friendly flushing system</li><li>✅ Compact and event-ready</li><li>✅ Affordable pricing</li></ul></div></div><div class="bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-transform transform hover:scale-105 border-2 border-yellow-500"><div class="w-full h-[45vh]">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(EffectFade)],
        "slides-per-view": 1,
        autoplay: { delay: 5e3, disableOnInteraction: false },
        effect: "fade",
        loop: true,
        pagination: "",
        class: "w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(vipUnitImages, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full h-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      class: "w-full h-full object-cover rounded-t-2xl",
                      src: image.src,
                      alt: image.alt,
                      width: "800",
                      height: "600",
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode(_component_NuxtImg, {
                          class: "w-full h-full object-cover rounded-t-2xl",
                          src: image.src,
                          alt: image.alt,
                          width: "800",
                          height: "600",
                          loading: "lazy"
                        }, null, 8, ["src", "alt"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(vipUnitImages, (image, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode(_component_NuxtImg, {
                        class: "w-full h-full object-cover rounded-t-2xl",
                        src: image.src,
                        alt: image.alt,
                        width: "800",
                        height: "600",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-6 bg-gradient-to-br from-yellow-50 to-white"><h3 class="text-2xl font-bold text-yellow-600 mb-4 text-center"> VIP Unit </h3><ul class="space-y-3 text-gray-700"><li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> Handwash station with mirror </li><li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> Lighting inside the unit </li><li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> Premium flushing toilet </li><li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> Scented, luxury interior </li><li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> Extra spacious design </li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToiletUnits.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _imports_0 = publicAssetsURL("/images/curved-dotted-line.svg");

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "works",
    class: "relative bg-gray-50 py-10 sm:py-16 lg:py-24"
  }, _attrs))}><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"><div class="max-w-2xl mx-auto text-center"><h2 class="text-4xl text-pink-400 font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2><p class="max-w-2xl mx-auto mt-4 text-base text-gray-900 leading-relaxed md:text-2xl"> Here is a step by by step guide on how to rent a mobile toilet from Urbanloos: </p></div><div class="relative mt-12 lg:mt-20"><div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full" style="${ssrRenderStyle({ "color": "red" })}"${ssrRenderAttr("src", _imports_0)}></div><div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12"><div><div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#5DBB63] border-2 border-gray-300 rounded-full shadow"><span class="text-xl font-semibold text-gray-900">1</span></div><h3 class="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Choose Your Package </h3><p class="mt-4 text-base text-gray-900 md:text-lg"> Browse our selection of mobile toilet options, including standard and VIP units, and select a package that best suits your event&#39;s needs. Our friendly team is available to assist you in choosing the right option. </p></div><div><div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#5DBB63] border-2 border-gray-300 rounded-full shadow"><span class="text-xl font-semibold text-gray-900">2</span></div><h3 class="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Schedule Your Delivery </h3><p class="mt-4 text-base text-gray-900 md:text-lg"> Once you&#39;ve chosen your package, simply contact us to schedule your delivery. Provide details about your event location, date, and any special requirements. We ensure prompt delivery and setup, allowing you to focus on your event. </p></div><div><div class="flex items-center justify-center w-16 h-16 mx-auto bg-[#5DBB63] border-2 border-gray-300 rounded-full shadow"><span class="text-xl font-semibold text-gray-900">3</span></div><h3 class="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Enjoy Your Event</h3><p class="mt-4 text-base text-gray-900 md:text-lg"> With everything in place, you and your guests can enjoy your event worry-free! Our toilets come equipped with essential amenities, and an attendant will be on hand to maintain cleanliness throughout the occasion. After the event, we&#39;ll return to handle the pickup. </p></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HowItWorks = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtImg = _sfc_main$7;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "py-24 bg-gray-50",
    id: "locations"
  }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="md:flex gap-x-24 clear-left md:mb-16 mb-10"><div class="md:mb-0 mb-4"><h2 class="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center"> Get In Touch </h2><p class="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center"> Reach out today — let&#39;s make your event clean, comfortable, and stress-free with Urbanloos mobile toilet solutions. </p><div class="flex md:items-center md:justify-start justify-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "bg-[#FB64B6] text-white font-semibold text-base leading-6 py-4 px-8 rounded shadow hover:bg-emerald-500 transition duration-300 ease-in-out"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact Us `);
      } else {
        return [
          createTextVNode(" Contact Us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="border-l-2 md:border-[#00A63E] border-white px-10 py-6"><div class="mb-8"><h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center"> Email Address </h6><h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center"> customerservice@urbanloos.com </h3></div><div><h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center"> Phone Number </h6><h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center"> +254-715-557-481 </h3></div></div></div><div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8"><div class="h-96 relative flex justify-center"><div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/Thomson_Falls.webp",
    alt: "Nyahururu",
    class: "w-full h-full object-cover shadow",
    width: "400",
    height: "400",
    loading: "lazy"
  }, null, _parent));
  _push(`<div class="absolute bottom-0 mb-6 text-center px-6"><h5 class="text-white text-lg font-semibold leading-7 mb-2"> Nyahururu </h5><p class="text-white text-base font-medium leading-6"> Kimwa Center, Nyahururu<br> opposite Breeze Hotel </p></div></div><div class="h-96 relative flex justify-center"><div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/gilo.webp",
    alt: "Ol-kalou",
    class: "w-full h-full object-cover shadow",
    width: "400",
    height: "400",
    loading: "lazy"
  }, null, _parent));
  _push(`<div class="absolute bottom-0 mb-6 text-center px-6"><h5 class="text-white text-lg font-semibold leading-7 mb-2"> Ol-kalou </h5></div></div><div class="h-96 relative flex justify-center"><div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/olkalou.webp",
    alt: "Gilgil",
    class: "w-full h-full object-cover shadow",
    width: "400",
    height: "400",
    loading: "lazy"
  }, null, _parent));
  _push(`<div class="absolute bottom-0 mb-6 text-center px-6"><h5 class="text-white text-lg font-semibold leading-7 mb-2"> Gilgil </h5></div></div><div class="h-96 relative flex justify-center"><div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/naivasha.webp",
    alt: "Naivasha",
    class: "w-full h-full object-cover shadow",
    width: "400",
    height: "400",
    loading: "lazy"
  }, null, _parent));
  _push(`<div class="absolute bottom-0 mb-6 text-center px-6"><h5 class="text-white text-lg font-semibold leading-7 mb-2"> Naivasha </h5><p class="text-white text-base font-medium leading-6"> Kenyatta Ave, Naivasha <br> Above UrbanDining Hotel </p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurLoactions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OurLoactions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "urbanmain" }, _attrs))} data-v-038fe0ba>`);
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(ActionCall, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(HowItWorks, null, null, _parent));
      _push(ssrRenderComponent(OurLoactions, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-038fe0ba"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
