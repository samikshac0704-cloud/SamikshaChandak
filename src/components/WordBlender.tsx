import React, { useRef, useState } from 'react';
import { Play, RotateCcw, Shuffle, Volume2 } from 'lucide-react';
import {
  BLEND_ENDINGS,
  BLEND_ONSETS,
  BLEND_VOWELS,
  BLEND_WORD_MAP,
  BLEND_WORDS,
  FEATURED_BLEND_WORDS,
  PHONEME_MAP,
} from '../data/phonicsData';
import { playTone, speakText, stopSpeech } from '../utils/audio';
import { WordIcon } from './WordIcon';

interface WordBlenderProps {
  slowMode: boolean;
}

const SLOT_LABELS = ['Start', 'Vowel', 'End'] as const;

export const WordBlender: React.FC<WordBlenderProps> = ({ slowMode }) => {
  const [slots, setSlots] = useState<[string, string, string]>(['c', 'a', 't']);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number>(0);
  const [blendingStep, setBlendingStep] = useState<number | 'word' | null>(null);
  const [deckTab, setDeckTab] = useState<'words' | 'letters'>('words');
  const blendRunRef = useRef<number>(0);

  const formedWord = slots.join('');
  const matchedWord = BLEND_WORD_MAP[formedWord];
  const isComplete = slots.every((s) => s.length > 0);

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleBlendSequence = async () => {
    if (!isComplete) return;
    const runId = ++blendRunRef.current;
    stopSpeech();

    for (let i = 0; i < 3; i++) {
      if (blendRunRef.current !== runId) return;
      const grapheme = slots[i];
      const phoneme = PHONEME_MAP[grapheme];
      setBlendingStep(i);
      playTone(360 + i * 70, 90, 'sine', 0.05);
      await speakText(phoneme ? phoneme.phoneticCue : grapheme, slowMode);
      await wait(slowMode ? 220 : 120);
    }

    if (blendRunRef.current !== runId) return;
    setBlendingStep('word');
    playTone(587.33, 130, 'triangle', 0.07);
    await speakText(formedWord, slowMode);
    if (blendRunRef.current === runId) {
      setBlendingStep(null);
    }
  };

  const handleHearWord = async () => {
    if (!isComplete) return;
    blendRunRef.current++;
    setBlendingStep('word');
    playTone(587.33, 110, 'triangle', 0.06);
    await speakText(formedWord, slowMode);
    setBlendingStep(null);
  };

  const handleSlotTap = async (index: number) => {
    blendRunRef.current++;
    setBlendingStep(null);
    setActiveSlotIndex(index);
    setDeckTab('letters');
    const grapheme = slots[index];
    if (grapheme && PHONEME_MAP[grapheme]) {
      playTone(400 + index * 60, 80, 'sine', 0.05);
      await speakText(PHONEME_MAP[grapheme].phoneticCue, slowMode);
    }
  };

  const handlePickLetter = async (slotIndex: number, letter: string) => {
    blendRunRef.current++;
    setBlendingStep(null);
    const nextSlots: [string, string, string] = [...slots] as [string, string, string];
    nextSlots[slotIndex] = letter;
    setSlots(nextSlots);
    setActiveSlotIndex((slotIndex + 1) % 3);

    const phoneme = PHONEME_MAP[letter];
    playTone(slotIndex === 1 ? 520 : 410, 80, 'sine', 0.05);
    await speakText(phoneme ? phoneme.phoneticCue : letter, slowMode);
  };

  const handleLoadWord = async (wordSlots: [string, string, string], wordText: string) => {
    blendRunRef.current++;
    setBlendingStep('word');
    setSlots(wordSlots);
    playTone(540, 100, 'triangle', 0.06);
    await speakText(wordText, slowMode);
    setBlendingStep(null);
  };

  const handleRandomWord = async () => {
    const pool = BLEND_WORDS.filter((w) => w.word !== formedWord);
    const next = pool[Math.floor(Math.random() * pool.length)];
    await handleLoadWord(next.slots, next.word);
  };

  const handleClear = () => {
    blendRunRef.current++;
    stopSpeech();
    setBlendingStep(null);
    setSlots(['', '', '']);
    setActiveSlotIndex(0);
  };

  const getTileColorClass = (grapheme: string) => {
    const cat = PHONEME_MAP[grapheme]?.category;
    if (cat === 'vowel') return 'text-rose-600';
    if (cat === 'digraph') return 'text-teal-700';
    return 'text-blue-700';
  };

  const letterOptionsForSlot =
    activeSlotIndex === 0 ? BLEND_ONSETS : activeSlotIndex === 1 ? BLEND_VOWELS : BLEND_ENDINGS;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Main Blending Stage */}
      <section
        aria-label="Word blending stage"
        className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-xs"
      >
        {/* 3 Phoneme Slots */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-lg">
          {slots.map((grapheme, idx) => {
            const isHighlighted = blendingStep === idx || blendingStep === 'word';
            const isSelected = activeSlotIndex === idx && blendingStep === null;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSlotTap(idx)}
                className={`flex flex-col items-center justify-center rounded-2xl border p-4 sm:p-6 min-h-[132px] sm:min-h-[156px] transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isHighlighted
                    ? 'border-blue-600 bg-blue-50/70 scale-[1.03] ring-2 ring-blue-600/20'
                    : isSelected
                    ? 'border-slate-900 bg-slate-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="text-xs font-medium text-slate-400 mb-2">
                  {SLOT_LABELS[idx]}
                </span>
                <span
                  className={`font-display text-5xl sm:text-6xl font-bold leading-none ${
                    grapheme ? getTileColorClass(grapheme) : 'text-slate-300'
                  }`}
                >
                  {grapheme || '—'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Formed Word Visual */}
        <div className="mt-8 min-h-[96px] flex items-center justify-center gap-5">
          {isComplete ? (
            <button
              type="button"
              onClick={handleHearWord}
              className={`inline-flex items-center gap-4 px-6 py-3 rounded-2xl border transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                blendingStep === 'word'
                  ? 'border-blue-600 bg-blue-50/60 scale-[1.03]'
                  : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100/70'
              }`}
            >
              {matchedWord && <WordIcon iconId={matchedWord.iconId} className="w-14 h-14 shrink-0" />}
              <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                {formedWord}
              </span>
              <Volume2 className="w-5 h-5 text-blue-600 shrink-0" />
            </button>
          ) : (
            <span className="text-sm font-medium text-slate-400">Pick 3 sounds</span>
          )}
        </div>

        {/* Stage Controls */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 w-full">
          <button
            type="button"
            disabled={!isComplete}
            onClick={handleBlendSequence}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <Play className="w-4 h-4 shrink-0 fill-current" />
            <span>Blend</span>
          </button>

          <button
            type="button"
            onClick={handleRandomWord}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <Shuffle className="w-4 h-4 shrink-0" />
            <span>Next Word</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <RotateCcw className="w-4 h-4 shrink-0" />
            <span>Clear</span>
          </button>
        </div>
      </section>

      {/* Right Picker Deck */}
      <section className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col gap-5">
        <div
          role="tablist"
          aria-label="Builder options"
          className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl"
        >
          <button
            type="button"
            role="tab"
            aria-selected={deckTab === 'words'}
            onClick={() => setDeckTab('words')}
            className={`py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              deckTab === 'words'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Word Picks
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={deckTab === 'letters'}
            onClick={() => setDeckTab('letters')}
            className={`py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              deckTab === 'letters'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Swap Sounds
          </button>
        </div>

        {deckTab === 'words' ? (
          <div className="grid grid-cols-3 gap-2.5">
            {FEATURED_BLEND_WORDS.map((item) => {
              const isCurrent = item.word === formedWord;
              return (
                <button
                  key={item.word}
                  type="button"
                  onClick={() => handleLoadWord(item.slots, item.word)}
                  className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isCurrent
                      ? 'border-blue-600 bg-blue-50/60'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <WordIcon iconId={item.iconId} className="w-9 h-9" />
                  <span className="font-display text-base font-bold text-slate-900">
                    {item.word}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Slot selector */}
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
              {SLOT_LABELS.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveSlotIndex(idx)}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeSlotIndex === idx
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {letterOptionsForSlot.map((letter) => {
                const isUsed = slots[activeSlotIndex] === letter;
                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => handlePickLetter(activeSlotIndex, letter)}
                    className={`py-3 rounded-xl border font-display text-2xl font-bold transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      isUsed
                        ? 'border-blue-600 bg-blue-50/70'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    } ${getTileColorClass(letter)}`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
