const getTotalEmissions = (allowances_sold, eite_allocation) => {
  return allowances_sold + eite_allocation;
};

describe('getTotalEmissions', () => {
  test('adds two numbers correctly', () => {
    expect(getTotalEmissions(1000000, 500000)).toBe(1500000);
  });

  test('handles zero values', () => {
    expect(getTotalEmissions(0, 0)).toBe(0);
  });

  test('handles one zero', () => {
    expect(getTotalEmissions(1000000, 0)).toBe(1000000);
  });
});