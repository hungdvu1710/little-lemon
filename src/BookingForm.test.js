import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm inputs', () => {
    const dateState = ['2023-07-25', jest.fn()];
    const guestState = [2, jest.fn()];
    const occasionState = ['Birthday', jest.fn()];
    const availableTimesState = [{timeSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}];
    const resTimeState = ['10:00 AM', jest.fn()];
    render(<BookingForm dateState={dateState}
      guestState={guestState}
      occasionState={occasionState}
      availableTimesState={availableTimesState}
      resTimeState={resTimeState} />);
    const dateElement = screen.getByText("Choose date");
    expect(dateElement).toBeInTheDocument();

    const timeElement = screen.getByText("Choose time");
    expect(timeElement).toBeInTheDocument();

    const guestsElement = screen.getByText("Number of guests");
    expect(guestsElement).toBeInTheDocument();

    const occasionElement = screen.getByText("Occasion");
    expect(occasionElement).toBeInTheDocument();
})