import Vue from 'vue';

function setHeight(el, binding) {
  const MEDIUM_BREAKPOINT = window.matchMedia('(min-width: 768px)'),
    DOCUMENT_HEIGHT_VALUE = window.innerHeight,
    DIVIDE_INTO_PROVIDED_VALUE = (binding.value) ? binding.value.divideSpaceInto : null;

  if (MEDIUM_BREAKPOINT.matches && DOCUMENT_HEIGHT_VALUE > 0) {
    el.style.height = `${DOCUMENT_HEIGHT_VALUE-50}px`;

    if (DIVIDE_INTO_PROVIDED_VALUE) {
      el.style.height = `${DOCUMENT_HEIGHT_VALUE / DIVIDE_INTO_PROVIDED_VALUE - 32}px`;
    }
  }
}

const setHeightDirective = Vue.directive('setDivHeight', {
  bind(el, binding) {
    setHeight(el, binding);
  },
  inserted(el, binding) {
    setHeight(el, binding);
  }
});

export default setHeightDirective;
