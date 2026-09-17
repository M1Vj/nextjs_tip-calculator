import { describe, expect, it } from "vitest";
import { computeTip } from "./tips";

describe("computeTip", () => {
  it("splits bill and tip per person", () => {
    const r = computeTip({ bill: 100, people: 4, tipPct: 15 });
    expect(r.tipPerPerson).toBeCloseTo(3.75, 5);
    expect(r.totalPerPerson).toBeCloseTo(28.75, 5);
  });

  it("returns zeros for non-positive people", () => {
    expect(computeTip({ bill: 100, people: 0, tipPct: 15 })).toEqual({
      tipPerPerson: 0,
      totalPerPerson: 0,
    });
    expect(computeTip({ bill: 100, people: -2, tipPct: 15 })).toEqual({
      tipPerPerson: 0,
      totalPerPerson: 0,
    });
  });

  it("handles zero bill", () => {
    const r = computeTip({ bill: 0, people: 2, tipPct: 20 });
    expect(r.tipPerPerson).toBe(0);
    expect(r.totalPerPerson).toBe(0);
  });
});