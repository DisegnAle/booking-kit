const bookingsOperations = {

  getChartData(chartConfiguration) {
    return chartConfiguration.data.datasets[0].data;
  },

  getMonthInDate(bookingDate) {
    const splittedDate = bookingDate.split('/');
    const month = splittedDate[1];
    return month;
  },

  getMonthIdx(month) {
    return month - 1;
  },

  addBookingsToChart(chartData, monthIdx) {
    const updatingChartData = [...chartData];
    updatingChartData[monthIdx] += 1;
    return updatingChartData;
  },

  removeBookingFromChart(chartData, monthIdx) {
    const updatingChartData = [...chartData];
    updatingChartData[monthIdx] -= 1;
    return updatingChartData;
  },

  addBookingsToList(bookingsList, newBooking) {
    const updatedBookingList = [...bookingsList];
    updatedBookingList.push(newBooking);
    return updatedBookingList;
  },

  removeBookingsFromList(bookingsList, existingBooking) {
    return bookingsList.filter((booking) => booking.id !== existingBooking.id);
  },

  populateDefaultVisitsPerMonthArray() {
    return new Array(12).fill(0);
  },

  addNewBooking_TO_CHART({
    bookings,
    newBooking,
  }) {
    const monthInDate = this.getMonthInDate(newBooking.date);
    const monthIdx = this.getMonthIdx(monthInDate);
    const chartData = this.getChartData(bookings.chart.configuration);
    const updatedBookingsChart = this.addBookingsToChart(chartData, monthIdx);
    return updatedBookingsChart;
  },

  addNewBooking_TO_LIST({
    bookings,
    newBooking,
  }) {
    const updateBookingsList = this.addBookingsToList(bookings.list, newBooking);
    return updateBookingsList;
  },

  removeExistingBooking_FROM_CHART({
    bookings,
    bookingToRemove,
  }) {
    const monthInDate = this.getMonthInDate(bookingToRemove.date);
    const monthIdx = this.getMonthIdx(monthInDate);
    const chartData = this.getChartData(bookings.chart.configuration);
    const updatedBookingsChart = this.removeBookingFromChart(chartData, monthIdx);
    return updatedBookingsChart;
  },

  removeExistingBooking_FROM_LIST({
    bookings,
    bookingToRemove,
  }) {
    const updateBookingsList = this.removeBookingsFromList(bookings.list, bookingToRemove);
    return updateBookingsList;
  },
};

export default bookingsOperations;
