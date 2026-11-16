import { useState } from 'react';
import { Gauge } from 'lucide-react';
import { SoundBoard } from './components/SoundBoard';
import { WordBlender } from './components/WordBlender';
import { PhonicsQuiz } from './components/PhonicsQuiz';
import { stopSpeech } from './utils/audio';

type ActiveView = 'sounds' | 'blend' | 'quiz';

const NAV_ITEMS: { id: ActiveView; label: string }[] = [
  { id: 'sounds', label: 'Sounds' },
  { id: 'blend', label: 'Blend' },
  { id: 'quiz', label: 'Quiz' },
];

export default function App() {
  const [view, setView] = useState<ActiveView>('sounds');
  const [slowMode, setSlowMode] = useState(false);

  const handleNavChange = (nextView: ActiveView) => {
    stopSpeech();
    setView(nextView);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#sounds"
            onClick={(e) => {
              e.preventDefault();
              handleNavChange('sounds');
            }}
            className="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            Phono
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-8">
            {NAV_ITEMS.map((item) => {
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavChange(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`py-2 text-sm font-semibold whitespace-nowrap shrink-0 border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-t ${
                    active
                      ? 'border-blue-600 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setSlowMode((s) => !s)}
              aria-pressed={slowMode}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                slowMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <Gauge className="w-3.5 h-3.5 shrink-0" />
              <span>{slowMode ? 'Slow' : 'Normal'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {view === 'sounds' && <SoundBoard slowMode={slowMode} />}
        {view === 'blend' && <WordBlender slowMode={slowMode} />}
        {view === 'quiz' && <PhonicsQuiz slowMode={slowMode} />}
      </main>
    </div>
  );
}
