import Chart from 'chart.js';

export default {
  name: 'chart',
  components: {
  },
  data() {
    return {
      ctx: null,
      chart: {},
    };
  },
  methods: {
  },
  mounted() {
    const storeChart = this.$store.state.bookings.chart;
    this.ctx = this.$refs.chart;
    this.chart = new Chart(this.ctx, storeChart.configuration);
  },
  watch: {
    list: {
      deep: true,
      handler(newVal, oldVal) {
        const hasDataChanged = newVal !== oldVal;
        if (!!this.chart.update && hasDataChanged) {
          this.chart.update();
        }
      },
    },
  },
  computed: {
    list() {
      return this.$store.state.bookings.list;
    },
  },
};
