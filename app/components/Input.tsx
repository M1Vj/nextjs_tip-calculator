'use client'

import { ChangeEvent } from 'react';

type Props = {
    label: string;
    value: string;
    onChange: (v: string) => void;
    prefix?: string;
    invalid?: boolean;
    ariaInvalid?: boolean;
    allowDecimals?: boolean;
};

export default function Input({ label, value, onChange, prefix, invalid = false, ariaInvalid, allowDecimals = false }: Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value;

        // Remove any non-numeric characters except decimal point
        if (allowDecimals) {
            // For decimal inputs: allow only digits and one decimal point
            const parts = input.split('.');
            if (parts.length > 2) {
                // More than one decimal point, keep only the first one
                input = parts[0] + '.' + parts.slice(1).join('').replace(/\./g, '');
            }
            input = input.replace(/[^0-9.]/g, '');
        } else {
            // For whole number inputs: only digits
            input = input.replace(/[^0-9]/g, '');
        }

        onChange(input);
    };

    return (
        <label className="block space-y-2">
            {label ? <span className="text-sm text-grey-500 font-bold">{label}</span> : null}
            <div className="relative">
                {prefix && <span className="absolute left-5 top-1/2 -translate-y-1/2 text-grey-400 text-xl pointer-events-none">{prefix}</span>}
                <input
                    className={[
                        "w-full rounded-md bg-grey-50 px-4 md:px-5 py-2 md:py-3 text-right text-xl md:text-2xl font-bold text-green-900 outline-none",
                        prefix ? "pl-10 md:pl-12" : "",
                        invalid ? "ring-2 ring-red-600 focus:ring-red-600" : "focus:ring-2 focus:ring-green-400"
                    ].join(" ")}
                    value={value}
                    onChange={handleChange}
                    inputMode={allowDecimals ? "decimal" : "numeric"}
                    aria-invalid={ariaInvalid ? true : undefined}
                 />
            </div>
        </label>
    );
};