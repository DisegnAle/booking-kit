<template>
<div class="home">

    <el-container>
        <div class="container__grid">

            <!-- booking form -->
            <div class="container__bookingForm">
                <el-card class="box-card">
                    <div>
                        <add-booking-form></add-booking-form>
                    </div>
                </el-card>
            </div>

            <!-- bookings list -->
            <div class="container__bookingsList">
                <el-card class="box-card">
                    <div slot="header" class="clearfix text-align--left">
                        <span>
                            <strong>
                                Bookings List
                            </strong>
                        </span>
                    </div>
                    <div>
                        <bookings-list></bookings-list>
                    </div>
                </el-card>
            </div>

            <!-- bookings chart -->
            <div class="container__chart">
                <el-card class="box-card">
                    <div slot="header" class="clearfix text-align--left">
                        <span>
                            <strong>
                                Statistics
                            </strong>
                        </span>
                    </div>
                    <div>
                        <chart></chart>
                    </div>
                </el-card>

            </div>
        </div>
    </el-container>

</div>
</template>

<script>
import addBookingForm from '@/components/addBookingForm/index';
import chart from '@/components/chart/index'
import bookingsList from '@/components/bookingsList/index'

export default {
    name: 'Home',
    components: {
        addBookingForm,
        chart,
        bookingsList
    },
    data() {
        return {};
    },
    methods: {

    },

};
</script>

<style lang="less">
.el-picker-panel,
.el-date-picker,
.el-popper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

@media screen and (max-width: 767px) {
    .container {
        &__grid {
            padding: 2vh;
            width: 100vw;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas:
                "bookingForm"
                "bookingsList"
                "chart";

            .container {

                &__bookingForm,
                &__bookingsList,
                &__chart {
                    margin-bottom: 1vh;
                }

                &__bookingsList{
                  max-height: 50vh;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .container {
        &__grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
            width: 100vw;
            height: 100vh;
            padding: 2vh;
            grid-template-areas:
                "bookingForm chart chart chart"
                "bookingForm chart chart chart"
                "bookingsList chart chart chart"
                "bookingsList chart chart chart";

            .container {
                &__bookingForm {
                    grid-area: bookingForm;
                }

                &__bookingsList {
                    grid-area: bookingsList;
                }

                &__chart {
                    grid-area: chart;
                }

                &__bookingForm,
                &__bookingsList,
                &__chart {
                    .box-card {
                        height: 100%;
                    }
                }

                &__bookingForm,
                &__bookingsList {

                    .el-card__header,
                    .el-card__body {
                        padding: 5% 3% !important;
                    }

                    .el-form-item__label {
                        line-height: 2em !important;
                    }
                }
            }
        }
    }
}
</style>
