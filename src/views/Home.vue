<template>
<div class="home">
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <el-col :md="24" :lg="8">

                    <!-- booking form -->
                    <el-row v-setHeightDirective="{divideSpaceInto:2}">
                        <el-col class="container__parent">
                            <el-card class="box-card container__child">
                                <div slot="header" class="clearfix">
                                    <span>
                                      <strong>
                                        Add booking
                                      </strong>
                                    </span>
                                </div>
                                <div>
                                    <add-booking-form></add-booking-form>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>

                    <!-- bookings list -->
                    <el-row v-setHeightDirective="{divideSpaceInto:2}">
                        <el-col class="container__parent">
                            <el-card class="box-card container__child">
                                <div slot="header" class="clearfix">
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
                        </el-col>
                    </el-row>
                </el-col>

                <!-- bookings chart -->
                <el-col class="container__parent" :md="24" :lg="16" v-setHeightDirective>
                    <el-card class="box-card container__child">
                        <div slot="header" class="clearfix">
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
                </el-col>

            </el-row>
        </el-main>
    </el-container>
</div>
</template>

<script>

import addBookingForm from '@/components/addBookingForm/index';
import chart from '@/components/chart/index'
import bookingsList from '@/components/bookingsList/index'
import setHeightDirective from '../directives/setHeight.directive'

export default {
    name: 'Home',
    components: {
        addBookingForm,
        chart,
        bookingsList
    },
    directives: {
        setHeightDirective
    },
    data() {
        return {};
    },
    methods: {

    },

};
</script>

<style lang="less">
.el-main {
    padding-top: 0;
    padding-bottom: 0;
}

.el-card__header,
.el-card__body {
    padding: 5px 20px !important;
}

.el-form-item__label{
  line-height: 20px !important;
}

.container__parent {
    height: 100%;
    overflow: hidden;
    .container__child {
        height: 95%;
    }
}

@media screen and (max-width: 767px) {
  .container__parent {
    margin-top: 1em;
  }
}
</style>
