import { updateTimes, initializeTimes} from './components/Main';

describe('initializeTimes reducer', () => {
  it('returns the initial state', () => {
    const newState = initializeTimes;
    expect(newState.timeSlots.length > 0).toBe(true);
  });
});

describe('updateTimes reducer', () => {
  it('returns state unchanged if no date passed in', () => {
    const state = ['17:00', '18:00', '19:00'];
    const newState = updateTimes(state);
    expect(newState).toEqual(state);
  });

  it('updates the state based on the date passed in', () => {
    const state = ['17:00', '18:00', '19:00'];
    const date = new Date('2023-10-03');
    const newState = updateTimes(state, {date: date});
    expect(newState).toEqual({"timeSlots": ["17:00", "17:30", "18:30", "20:00", "20:30", "21:00", "22:00", "23:30"]});
  });
})