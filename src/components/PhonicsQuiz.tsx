import React, { useCallback, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, Volume2, XCircle } from 'lucide-react';
import { FEATURED_BLEND_WORDS, PHONEMES, PhonemeItem, BlendWord } from '../data/phonicsData';
import { playRetryTone, playSuccessChime, speakText } from '../utils/audio';
import { WordIcon } from './WordIcon';

interface PhonicsQuizProps {
  slowMode: boolean;
}

type QuizType = 'sounds' | 'words';

interface SoundQuestion {
  type: 'sounds';
  target: PhonemeItem;
  options: PhonemeItem[];
}

interface WordQuestion {
  type: 'words';
  target: BlendWord;
  options: BlendWord[];
}

type Question = SoundQuestion | WordQuestion;

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuestion(quizType: QuizType): Question {
  if (quizType === 'sounds') {
    const pool = shuffleArray(PHONEMES);
    const target = pool[0];
    const options = shuffleArray([target, ...pool.slice(1, 4)]);
    return { type: 'sounds', target, options };
  }
  const pool = shuffleArray(FEATURED_BLEND_WORDS);
  const target = pool[0];
  const options = shuffleArray([target, ...pool.slice(1, 4)]);
  return { type: 'words', target, options };
}

export const PhonicsQuiz: React.FC<PhonicsQuizProps> = ({ slowMode }) => {
  const [quizType, setQuizType] = useState<QuizType>('sounds');
  const [question, setQuestion] = useState<Question>(() => buildQuestion('sounds'));
  const [pickedId, setPickedId] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'retry'>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [hadMistake, setHadMistake] = useState(false);

  const playPrompt = useCallback(
    async (q: Question) => {
      if (q.type === 'sounds') {
        await speakText(q.target.phoneticCue, slowMode);
      } else {
        await speakText(q.target.word, slowMode);
      }
    },
    [slowMode]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      playPrompt(question);
    }, 150);
    return () => clearTimeout(timer);
  }, [question, playPrompt]);

  const handleSwitchType = (nextType: QuizType) => {
    setQuizType(nextType);
    setPickedId(null);
    setStatus('idle');
    setHadMistake(false);
    setQuestion(buildQuestion(nextType));
  };

  const handleNextQuestion = () => {
    setPickedId(null);
    setStatus('idle');
    setHadMistake(false);
    setQuestion(buildQuestion(quizType));
  };

  const handleReset = () => {
    setScore(0);
    setTotal(0);
    handleNextQuestion();
  };

  const handleOptionClick = (optionId: string) => {
    if (status === 'correct') return;

    const targetId =
      question.type === 'sounds' ? question.target.id : question.target.word;
    setPickedId(optionId);

    if (optionId === targetId) {
      setStatus('correct');
      if (!hadMistake) {
        setScore((s) => s + 1);
      }
      setTotal((t) => t + 1);
      playSuccessChime();
    } else {
      setStatus('retry');
      setHadMistake(true);
      playRetryTone();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        {/* Top Row: Mode Switch + Score */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Quiz type"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-xl"
          >
            <button
              type="button"
              role="tab"
              aria-selected={quizType === 'sounds'}
              onClick={() => handleSwitchType('sounds')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                quizType === 'sounds'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sounds
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={quizType === 'words'}
              onClick={() => handleSwitchType('words')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                quizType === 'words'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Words
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 tabular-nums">
            <span>
              {score} / {total}
            </span>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset score"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Central Listen Trigger */}
        <div className="my-8 flex flex-col items-center">
          <button
            type="button"
            onClick={() => playPrompt(question)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-display text-xl font-semibold hover:bg-blue-700 active:scale-95 transition-transform duration-150 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Volume2 className="w-6 h-6 shrink-0" />
            <span>Listen</span>
          </button>
        </div>

        {/* 4 Answer Cards */}
        <div className="grid grid-cols-2 gap-4">
          {question.type === 'sounds'
            ? question.options.map((item) => {
                const isPicked = pickedId === item.id;
                const isCorrectCard = isPicked && status === 'correct';
                const isRetryCard = isPicked && status === 'retry';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleOptionClick(item.id)}
                    className={`rounded-2xl border p-6 min-h-[128px] flex flex-col items-center justify-center gap-2 transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      isCorrectCard
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                        : isRetryCard
                        ? 'border-amber-500 bg-amber-50 text-amber-900'
                        : 'border-slate-200 bg-white hover:border-slate-400 text-slate-900'
                    }`}
                  >
                    <span className="font-display text-5xl font-bold leading-none">
                      {item.grapheme}
                    </span>
                  </button>
                );
              })
            : question.options.map((item) => {
                const isPicked = pickedId === item.word;
                const isCorrectCard = isPicked && status === 'correct';
                const isRetryCard = isPicked && status === 'retry';

                return (
                  <button
                    key={item.word}
                    type="button"
                    onClick={() => handleOptionClick(item.word)}
                    className={`rounded-2xl border p-5 min-h-[128px] flex flex-col items-center justify-center gap-2.5 transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      isCorrectCard
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                        : isRetryCard
                        ? 'border-amber-500 bg-amber-50 text-amber-900'
                        : 'border-slate-200 bg-white hover:border-slate-400 text-slate-900'
                    }`}
                  >
                    <WordIcon iconId={item.iconId} className="w-12 h-12" />
                    <span className="font-display text-2xl font-bold leading-none">
                      {item.word}
                    </span>
                  </button>
                );
              })}
        </div>

        {/* Dual-Coded Feedback & Next Action */}
        <div className="mt-6 min-h-[48px] flex items-center justify-between gap-4">
          {status === 'correct' ? (
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Correct</span>
            </div>
          ) : status === 'retry' ? (
            <div className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>Try again</span>
            </div>
          ) : (
            <span className="text-sm text-slate-400">Tap match</span>
          )}

          {status === 'correct' && (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
