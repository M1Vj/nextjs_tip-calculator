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
        <label className="block space-y-1">
            {label ? <span className="text-sm text-grey-500">{label}</span> : null}
            <div className="relative">
                {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2">{prefix}</span>}
                <input
                    className={[
                        "w-full rounded-md bg-grey-50 px-3 pl-9 text-right text-xl outline-none",
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