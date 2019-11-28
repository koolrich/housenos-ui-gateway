import { FEDERAL_STATES } from './FederalStates';

test('the correct number of states', () => {
    expect(FEDERAL_STATES.length).toEqual(36);
})