'use client';
import { useState } from 'react';

type Props = { selected: number, onSelect: (pct: number) => void };

const PRESETS = [5, 10, 15, 25, 50];

export default function Keypad({ selected, onSelect }: Props) {
    const [custom, setCustom] = useState<string>("");

    return (
        <div role="radiogroup" className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PRESETS.map((pct) => {
                const isActive = selected === pct;
                return (
                    <button
                        key={pct}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        onClick={() => { onSelect(pct); setCustom(""); }}
                        className={[
                            "rounded-lg p-3 text-center text-xl transition outline-none",
                            "focus:ring-2 focus:ring-green-400",
                            isActive
                                ? "bg-green-400 text-green-900"
                                : "bg-green-900 text-white hover:brightness-110"
                        ].join(" ")}
                        aria-label={`${pct}% tip`}
                    >
                        {pct}%
                    </button>
                );
            })}

            <label className="relative">
                <span className="sr-only">Custom tip percent</span>
                <input
                    inputMode="numeric"
                    placeholder="Custom"
                    value={custom}
                    onChange={(e) => {
                        const v = e.target.value;
                        setCustom(v);
                        const n = Number(v);
                        if (Number.isFinite(n)) onSelect(n); // parent owns the source of truth
                    }}
                    onFocus={() => { /* just visual focus */ }}
                    className="w-full rounded-lg bg-grey-50 p-3 text-xl text-right
                     placeholder:text-grey-400 outline-none focus:ring-2 focus:ring-green-400"
                />
                <span className="absolute inset-y-0 left-3 grid place-items-center text-grey-400">%</span>
            </label>
        </div>
    )
}