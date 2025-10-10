export type TipInput = {bill: number, people: number, tipPct: number }

export function computeTip({bill, people, tipPct}: TipInput) {
    if (!isFinite(bill) || !isFinite(people) || people <= 0) {
        return { tipPerPerson: 0, totalPerPerson: 0}
    }
    const tip = bill * (tipPct / 100);
    return { tipPerPerson: tip / people, totalPerPerson: (bill + tip) / people};
}