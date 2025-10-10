'use client'

type Props = {
    label: string;
    value: string;
    onChange: (v: string) => void;
    prefix?: string;
    invalid?: boolean;
    ariaInvalid?: boolean;
};

export default function Input({ label, value, onChange, prefix, invalid = false, ariaInvalid }: Props) {
    return (
        <label className="block space-y-2">
            {label ? <span className="text-sm text-grey-500 font-bold">{label}</span> : null}
            <div className="relative">
                {prefix && <span className="absolute left-5 top-1/2 -translate-y-1/2 text-grey-400 text-xl pointer-events-none">{prefix}</span>}
                <input
                    className={[
                        "w-full rounded-md bg-grey-50 px-5 py-3 text-right text-2xl font-bold text-green-900 outline-none",
                        prefix ? "pl-12" : "",
                        invalid ? "ring-2 ring-red-600 focus:ring-red-600" : "focus:ring-2 focus:ring-green-400"
                    ].join(" ")}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    inputMode="decimal"
                    aria-invalid={ariaInvalid ? true : undefined}
                 />
            </div>
        </label>
    );
};