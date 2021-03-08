
export default {
  name: 'bookingsList',
  components: {},
  data() {
    return {};
  },
  methods: {
    removeBooking(booking){
      this.$store.dispatch('removeExistingBooking', booking);
    }
  },
  computed: {
    bookings() {
      return this.$store.state.bookings.list;
    }
  },
  mounted() {},

};
