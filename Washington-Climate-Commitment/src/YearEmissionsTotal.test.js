const getTotalEmissions = (allowances_sold, eite_allocation) => {
  return allowances_sold + eite_allocation;
};

describe('getTotalEmissions', () => {
  test('adds two numbers correctly', () => {
    expect(getTotalEmissions(14, 15)).toBe(29);
  });
});