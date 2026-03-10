import { describe, it } from "vitest";



const getTotalEmissions = (allowances_sold, eite_allocation) => {
  return allowances_sold + eite_allocation;
};

describe('getTotalEmissions', () => {
  it('adds two numbers correctly', () => {
    expect(getTotalEmissions(14000000, 15000000)).toBe(29000000);
  });
});