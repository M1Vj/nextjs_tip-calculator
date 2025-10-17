'use client';

type Props = {
  tipPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
};

const php = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const safe = (n: number) => (Number.isFinite(n) ? n : 0);

export default function Display({ tipPerPerson, totalPerPerson, onReset }: Props) {
  const disabled = tipPerPerson === 0 && totalPerPerson === 0;
  return (
    <div className="flex flex-col justify-between rounded-lg md:rounded-2xl bg-green-900 p-6 md:p-8 lg:p-10 text-white">
      <div className="space-y-6 md:space-y-8 lg:space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm md:text-base font-bold text-white">Tip Amount</p>
            <p className="text-xs text-grey-400">/ person</p>
          </div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">{php.format(safe(tipPerPerson))}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm md:text-base font-bold text-white">Total</p>
            <p className="text-xs text-grey-400">/ person</p>
          </div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">{php.format(safe(totalPerPerson))}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={disabled}
        className={[
          "mt-6 md:mt-8 lg:mt-10 w-full rounded-lg py-2 md:py-3 font-bold text-base md:text-lg uppercase tracking-wider text-green-900",
          disabled ? "bg-green-400/30 cursor-not-allowed" : "bg-green-400 hover:bg-green-300 transition-colors"
        ].join(" ")}
      >
        RESET
      </button>
    </div>
  );
}