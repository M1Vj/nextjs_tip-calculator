import TipCalculator from './components/TipCalculator';

export default function Page() {
    return (
        <main className="min-h-dvh flex flex-col items-center justify-center p-6 gap-12">
            <h1 className="text-2xl text-center md:text-3xl font-bold tracking-[0.3em] text-green-900">
                VJ
                <br/>
                MABANSAG
            </h1>
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <TipCalculator />
            </div>
        </main>
    );
}