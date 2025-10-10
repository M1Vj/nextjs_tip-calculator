'use client'

type Props = {
    label: string;
    value: string;
    onChange: (v: string) => void;
    prefix?: string;
};

export default function Input({ label, value, onChange, prefix }: Props) {
    return (
        <label className="block space-y-1">
            <span className="text-sm text-grey-500">{label}</span>
            <div className="relative">
                {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2">{prefix}</span>}
                <input
                    className="w-full rounded-md bg-grey-50 px-3 pl-9 text-right text-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    inputMode="decimal"
                 />
            </div>
        </label>
    );
};