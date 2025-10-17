'use client';

import { useState, useMemo } from 'react';
import Input from './Input';
import Keypad from './Keypad';
import Display from './Display';

export default function TipCalculator() {
    const [bill, setBill] = useState('0');
    const [people, setPeople] = useState('1');
    const [tipPct, setTipPct] = useState(0);

    const peopleNum = Math.max(0, Math.floor(Number(people.replace(/[^0-9]/g, '')) || 0));
    const peopleErr = peopleNum <= 0 ? "Can't be zero" : "";

    const { tipPerPerson, totalPerPerson } = useMemo(() => {
        const billNum = Number(bill.replace(/[^0-9.]/g, '')) || 0;
        const peopleNum = Math.max(0, Math.floor(Number(people.replace(/[^0-9]/g, '')) || 0));
        const tipAmount = billNum * (tipPct / 100);
        const perPersonBase = peopleNum > 0 ? (billNum + tipAmount) / peopleNum : 0;
        const perPersonTip = peopleNum > 0 ? tipAmount / peopleNum : 0;
        return { tipPerPerson: perPersonTip, totalPerPerson: perPersonBase };
    }, [bill, people, tipPct]);

    return (
        <section className="w-full grid gap-6 md:gap-8 md:grid-cols-2">
            <div className="space-y-6 md:space-y-8">
                <Input label="Bill" value={bill} onChange={setBill} prefix="₱" allowDecimals={true} />
                <div>
                    <p className="text-grey-500 text-sm font-bold mb-3 md:mb-4">Select Tip %</p>
                    <Keypad selected={tipPct} onSelect={(pct) => setTipPct(pct)} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3 md:mb-2">
                    <p className="text-grey-500 text-sm font-bold">Number of People</p>
                    {peopleErr && <p className="text-xs text-red-600 font-semibold">{peopleErr}</p>}
                  </div>
                  <Input
                    label="" /* label is shown above, so leave this blank */
                    value={people}
                    onChange={setPeople}
                    prefix="👤"
                    invalid={!!peopleErr} /* new prop to style invalid state */
                    ariaInvalid={!!peopleErr}
                    allowDecimals={false}
                  />
                </div>
            </div>
            <Display tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson} onReset={() => { setBill('0'); setPeople('1'); setTipPct(0); }} />
        </section>
    );
};