
export default {
  name: 'addBookingForm',
  components: {},
  data() {

    const onlyLettersAccepted = (rule, value, callback) => {
      const letters = /^[A-Za-z]+$/;
      if (!value.match(letters)) {
        callback(new Error('Please input only letters'));
      } else {
        callback();
      }
    };
    return {
      bookingForm: this.resetForm(),
      formValidationRules: {
        firstName: [{
            required: true,
            message: 'Please input First name',
            trigger: 'blur'
          },
          {
            validator: onlyLettersAccepted,
            trigger: 'blur'
          }
        ],
        lastName: [{
            required: true,
            message: 'Please input Last name',
            trigger: 'blur'
          },
          {
            validator: onlyLettersAccepted,
            trigger: 'blur'
          }
        ],
        date: [{
          required: true,
          message: 'Please input Date',
          trigger: 'blur'
        }]
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    };
  },
  methods: {
    generateRandomId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    capitalizeFirstLetter(input){
      const FIRST_LETTER = input.toLowerCase().charAt(0).toUpperCase();
      const REST_OF_INPUT = input.slice(1).toLowerCase();
      return FIRST_LETTER + REST_OF_INPUT;
    },
    setFormValueBeforeAdding(formValue){
      formValue.firstName = this.capitalizeFirstLetter(formValue.firstName);
      formValue.lastName = this.capitalizeFirstLetter(formValue.lastName);
      formValue.id = this.generateRandomId();
      return formValue
    },
    onSubmit(formName, formValue) {

      this.$refs[formName].validate((valid) => {
        if (valid) {
          formValue = this.setFormValueBeforeAdding(formValue);
          this.bookingForm = this.resetForm();
          this.$store.dispatch('addNewBooking', formValue);
        } else {
          return false;
        }
      });
    },
    resetForm() {
      const newForm = {
        firstName: '',
        lastName: '',
        date: null
      }
      return newForm;
    }
  },
  mounted() {},

};
