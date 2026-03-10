import { render, screen } from "@testing-library/react"
import { describe, it } from "vitest";
import getTotalEmissions from "../AddingTotalEmissions";

describe('getTotalEmissions function works', () => {


  it('Should add correctly', () => {
    const mock2026Allowances = 17000000 
    const mock2026EITEAllowances = 9000000
    expect(getTotalEmissions(mock2026Allowances, mock2026EITEAllowances)).toBe(26000000)


  })
});