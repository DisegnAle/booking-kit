
import Vue from 'vue';

const setHeightDirective = Vue.directive('setDivHeight', {
  bind(el, binding) {
    const MEDIUM_BREAKPOINT = window.matchMedia('(min-width: 768px)'),

      BODY = document.body,
      HTML = document.documentElement,

      DOCUMENT_HEIGHT_VALUE = Math.max(
        BODY.scrollHeight,
        BODY.offsetHeight,
        HTML.clientHeight,
        HTML.scrollHeight,
        HTML.offsetHeight
      ),

      DIVIDE_INTO_PROVIDED_VALUE = (binding.value) ? binding.value.divideSpaceInto : null;

    if (MEDIUM_BREAKPOINT.matches) {
      el.style.height = `${DOCUMENT_HEIGHT_VALUE - 10}px`;

      if (DIVIDE_INTO_PROVIDED_VALUE) {
        el.style.height = `${DOCUMENT_HEIGHT_VALUE / DIVIDE_INTO_PROVIDED_VALUE - 12}px`;
      }
    }
  }
});

export default setHeightDirective;
