/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import BookingForm from "./pages/Booking/BookingForm";
import userEvent from "@testing-library/user-event";

const dateState = ["2032-07-25", jest.fn()];
const guestState = [2, jest.fn()];
const occasionState = ["Birthday", jest.fn()];
const availableTimesState = [
  { timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] },
];
const resTimeState = ["17:00", jest.fn()];
const handleSubmit = jest.fn();

test("Renders the BookingForm inputs", () => {
  render(
    <BookingForm
      dateState={dateState}
      guestState={guestState}
      occasionState={occasionState}
      availableTimesState={availableTimesState}
      resTimeState={resTimeState}
      handleSubmit={handleSubmit}
    />
  );
  const dateElement = screen.getByText("Choose date");
  expect(dateElement).toBeInTheDocument();

  const timeElement = screen.getByText("Choose time");
  expect(timeElement).toBeInTheDocument();

  const guestsElement = screen.getByText("Number of guests");
  expect(guestsElement).toBeInTheDocument();

  const occasionElement = screen.getByText("Occasion");
  expect(occasionElement).toBeInTheDocument();

  const submitElement = screen.getByText("Make Your Reservation");
  expect(submitElement).toBeInTheDocument();
});

describe("BookingForm validation", () => {
  it("Date Validation", async () => {
    render(
      <BookingForm
        dateState={dateState}
        guestState={guestState}
        occasionState={occasionState}
        availableTimesState={availableTimesState}
        resTimeState={resTimeState}
        handleSubmit={handleSubmit}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");

    // Set an invalid date (yesterday's date) using userEvent.type
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    userEvent.type(dateInput, yesterday.toISOString().split("T")[0]);

    // Trigger blur event on the date input
    act(() => {
      userEvent.tab();
    });

    await waitFor(() => {
      expect(screen.getByText("Must be in the future")).toBeInTheDocument();
    });

    const today = new Date();
    const submitElement = screen.getByText("Make Your Reservation");

    userEvent.type(dateInput, today.toISOString().split("T")[0]);

    // Trigger blur event on the date input
    act(() => {
      userEvent.tab();
      userEvent.click(submitElement);
    });

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it("Number of Guests Validation", async () => {
    render(
      <BookingForm
        dateState={dateState}
        guestState={guestState}
        occasionState={occasionState}
        availableTimesState={availableTimesState}
        resTimeState={resTimeState}
        handleSubmit={handleSubmit}
      />
    );

    const guestInput = screen.getByLabelText("Number of guests");

    // Too many guests
    userEvent.clear(guestInput);
    userEvent.type(guestInput, "11");

    act(() => {
      userEvent.tab();
    });

    await waitFor(() => {
      expect(screen.getByText("Must be 10 or less")).toBeInTheDocument();
    });

    // To few guests
    userEvent.clear(guestInput);
    userEvent.type(guestInput, "0");

    act(() => {
      userEvent.tab();
    });

    await waitFor(() => {
      expect(screen.getByText("Must be at least 1")).toBeInTheDocument();
    });

    // Valid number of guests
    userEvent.clear(guestInput);
    userEvent.type(guestInput, "5");

    act(() => {
      userEvent.tab();
      fireEvent.submit(screen.getByTestId("booking-form"));
    });

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
