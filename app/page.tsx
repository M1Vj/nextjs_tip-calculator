import TipCalculator from './components/TipCalculator';

export default function Page() {
    return (
        <main className="min-h-dvh flex flex-col items-center justify-center px-4 py-8 gap-6 md:gap-12 md:p-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold tracking-[0.3em] text-green-900">
                VJ
                <br/>
                MABANSAG
            </h1>
            <div className="w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
                <TipCalculator />
            </div>
        </main>
    );
}