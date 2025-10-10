type Props = {
  tipPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
};

export default function Display({ tipPerPerson, totalPerPerson, onReset }: Props) {
  const fmt = (n: number) => `$${n.toFixed(2)}`;
  const disabled = tipPerPerson === 0 && totalPerPerson === 0;
  return (
    <div className="flex flex-col justify-between rounded-xl bg-green-900 p-6 text-white">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">Tip Amount</p>
            <p className="text-xs text-grey-300">/ person</p>
          </div>
          <p className="text-3xl text-green-400">{fmt(tipPerPerson)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">Total</p>
            <p className="text-xs text-grey-300">/ person</p>
          </div>
          <p className="text-3xl text-green-400">{fmt(totalPerPerson)}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        disabled={disabled}
        className={[
          "mt-6 w-full rounded-md py-3 text-green-900",
          disabled ? "bg-green-400/30 cursor-not-allowed" : "bg-green-400 hover:brightness-110"
        ].join(" ")}
      >
        RESET
      </button>
    </div>
  );
}