'use client';

import { useState, useMemo } from 'react';
import Input from './Input';
import Keypad from './Keypad';
import Display from './Display';

export default function TipCalculator() {
    const [bill, setBill] = useState('0');
    const [people, setPeople] = useState('1');
    const [tipPct, setTipPct] = useState(0);

    const { tipPerPerson, totalPerPerson } = useMemo(() => {
        const billNum = Number(bill.replace(/[^0-9.]/g, '')) || 0;
        const peopleNum = Math.max(0, Math.floor(Number(people.replace(/[^0-9]/g, '')) || 0));
        const tipAmount = billNum * (tipPct / 100);
        const perPersonBase = peopleNum > 0 ? (billNum + tipAmount) / peopleNum : 0;
        const perPersonTip = peopleNum > 0 ? tipAmount / peopleNum : 0;
        return { tipPerPerson: perPersonTip, totalPerPerson: perPersonBase };
    }, [bill, people, tipPct]);

    return (
        <section className="max-w-3xl w-full grid gap-6 md:grid-cols-2 rounded-2xl shadow p-6 bg-white">
            <div className="space-y-5">
                <Input label="Bill" value={bill} onChange={setBill} prefix="$" />
                <div>
                    <p className="text-grey-500 text-sm mb-2">Select Tip %</p>
                    <Keypad selected={tipPct} onSelect={(pct) => setTipPct(pct)} />
                </div>
                <Input label="Number of People" value={people} onChange={setPeople} prefix="👤" />
            </div>
            <Display tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson} onReset={() => { setBill('0'); setPeople('1'); setTipPct(0); }} />
        </section>
    );
};