import "./BookingForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  ChakraProvider,
  Heading,
} from "@chakra-ui/react";

const today = new Date();

const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const BookingForm = (props) => {
  const [date, handleDateChange] = props.dateState;
  const [guests, handleGuestsChange] = props.guestState;
  const [occasion, handleOccasionChange] = props.occasionState;
  const [availableTimes] = props.availableTimesState;
  const [resTime, handleResTimeChange] = props.resTimeState;

  const formik = useFormik({
    initialValues: {
      date: date,
      guests: guests,
      occasion: occasion,
      resTime: resTime,
    },
    onSubmit: props.handleSubmit,
    validationSchema: Yup.object({
      date: Yup.date().required("Required").nullable().min(yesterday, "Must be in the future"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be 10 or less")
        .required("Required"),
      resTime: Yup.string()
        .oneOf(availableTimes.timeSlots, "Invalid time")
        .required("Required"),
      occasion: Yup.string().oneOf(["Birthday", "Anniversary"]),
    }),
  });

  return (
    <ChakraProvider>
      <Heading as="h1" id="booking-form-title">
        Reservation Details
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
          <FormLabel htmlFor="date">Choose date</FormLabel>
          <Input
            id="date"
            name="date"
            type="date"
            {...formik.getFieldProps('date')}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleDateChange(e);
            }}
          />
          <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.resTime && formik.errors.resTime}>
          <FormLabel htmlFor="resTime">Choose time</FormLabel>
          <Select
            id="resTime"
            name="resTime"
            {...formik.getFieldProps('resTime')}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleResTimeChange(e);
            }}
          >
            {availableTimes.timeSlots.map((time) => {
              return <option key={time}>{time}</option>;
            })}
          </Select>
          <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
          <FormLabel htmlFor="guests">Number of guests</FormLabel>
          <Input
            id="guests"
            name="guests"
            {...formik.getFieldProps('guests')}
            placeholder="1"
            onBlur={(e) => {
              formik.handleBlur(e);
              handleGuestsChange(e);
            }}
          />
          <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
          <FormLabel htmlFor="occasion">Occasion</FormLabel>
          <Select
            id="occasion"
            name="occasion"
            {...formik.getFieldProps('occasion')}
            onBlur={(e) => {
              formik.handleBlur(e);
              handleOccasionChange(e);
            }}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </Select>
          <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
        </FormControl>
        <Button type="submit" id="form-submit-btn" width="full" aria-label="On Click">
          Make Your Reservation
        </Button>
      </form>
    </ChakraProvider>
  );
};

export default BookingForm;
