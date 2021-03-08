
import Vue from 'vue';
import Vuex from 'vuex';
import bookingsOperations from '../utils/bookingsOperations'
Vue.use(Vuex);

const MONTHS_LABELS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const DEFAULT_VISITS_PER_MONTH = bookingsOperations.populateDefaultVisitsPerMonthArray();

export default new Vuex.Store({
  state: {
    bookings: {
      chart: {
        configuration: {
          type: 'bar',
          data: {
            labels: MONTHS_LABELS,
            datasets: [{
              label: '# of Visits',
              data: [...DEFAULT_VISITS_PER_MONTH],
              backgroundColor: 'rgb(64, 158, 255)',
              borderWidth: 1,
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  stepSize: 1
                }
              }]
            },
            tooltips: {
              enabled: true
            }
          },
        }
      },
      list: [],
    }
  },
  mutations: {
    addNewBooking(state, newBooking) {

      state.bookings.chart.configuration.data.datasets[0].data =
        bookingsOperations.addNewBooking_TO_CHART({
          bookings: state.bookings,
          newBooking
        });

      state.bookings.list = bookingsOperations.addNewBooking_TO_LIST({
        bookings: state.bookings,
        newBooking
      });
    },

    removeExistingBooking(state, bookingToRemove) {

      state.bookings.chart.configuration.data.datasets[0].data =
        bookingsOperations.removeExistingBooking_FROM_CHART({
          bookings: state.bookings,
          bookingToRemove
        });

      state.bookings.list =
        bookingsOperations.removeExistingBooking_FROM_LIST({
          bookings: state.bookings,
          bookingToRemove
        });

    }
  },
  actions: {
    addNewBooking({
      commit
    }, booking) {
      commit('addNewBooking', booking)
    },
    removeExistingBooking({
      commit
    }, booking) {
      commit('removeExistingBooking', booking)
    }
  },
  modules: {},
});
