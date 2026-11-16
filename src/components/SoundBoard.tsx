import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { PHONEMES, PhonemeCategory, PhonemeItem } from '../data/phonicsData';
import { playTone, speakText } from '../utils/audio';
import { WordIcon } from './WordIcon';

interface SoundBoardProps {
  slowMode: boolean;
}

const FILTER_OPTIONS: { id: 'all' | PhonemeCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'vowel', label: 'Vowels' },
  { id: 'consonant', label: 'Consonants' },
  { id: 'digraph', label: 'Digraphs' },
];

const CATEGORY_META: Record<PhonemeCategory, { label: string; textClass: string; activeBorder: string; accentBg: string }> = {
  vowel: {
    label: 'Vowel',
    textClass: 'text-rose-600',
    activeBorder: 'border-rose-600 ring-2 ring-rose-600/20',
    accentBg: 'bg-rose-50/70',
  },
  consonant: {
    label: 'Consonant',
    textClass: 'text-blue-700',
    activeBorder: 'border-blue-600 ring-2 ring-blue-600/20',
    accentBg: 'bg-blue-50/60',
  },
  digraph: {
    label: 'Digraph',
    textClass: 'text-teal-700',
    activeBorder: 'border-teal-600 ring-2 ring-teal-600/20',
    accentBg: 'bg-teal-50/60',
  },
};

export const SoundBoard: React.FC<SoundBoardProps> = ({ slowMode }) => {
  const [filter, setFilter] = useState<'all' | PhonemeCategory>('all');
  const [selected, setSelected] = useState<PhonemeItem>(PHONEMES[0]);
  const [speakingTarget, setSpeakingTarget] = useState<'sound' | 'word' | null>(null);

  const visiblePhonemes =
    filter === 'all' ? PHONEMES : PHONEMES.filter((item) => item.category === filter);

  const handleSelectTile = async (item: PhonemeItem) => {
    setSelected(item);
    setSpeakingTarget('sound');
    playTone(item.category === 'vowel' ? 520 : item.category === 'digraph' ? 440 : 390, 80, 'sine', 0.05);
    await speakText(item.phoneticCue, slowMode);
    setSpeakingTarget((curr) => (curr === 'sound' ? null : curr));
  };

  const handlePlaySound = async () => {
    setSpeakingTarget('sound');
    playTone(selected.category === 'vowel' ? 520 : 410, 80, 'sine', 0.05);
    await speakText(selected.phoneticCue, slowMode);
    setSpeakingTarget(null);
  };

  const handlePlayWord = async () => {
    setSpeakingTarget('word');
    playTone(580, 90, 'triangle', 0.05);
    await speakText(selected.anchorWord, slowMode);
    setSpeakingTarget(null);
  };

  const meta = CATEGORY_META[selected.category];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Spotlight Stage */}
      <section
        aria-label="Selected sound"
        className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xs"
      >
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4">
          <span className={meta.textClass}>{meta.label}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-slate-600">{selected.ipa}</span>
        </div>

        <button
          type="button"
          onClick={handlePlaySound}
          aria-label={`Hear sound ${selected.grapheme}`}
          className={`w-40 h-40 rounded-2xl border border-slate-200 ${meta.accentBg} flex items-center justify-center transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
            speakingTarget === 'sound' ? 'scale-[1.03]' : ''
          }`}
        >
          <span
            className={`font-display text-8xl font-bold tracking-tight leading-none ${meta.textClass}`}
          >
            {selected.grapheme}
          </span>
        </button>

        <div className="mt-6 flex items-center justify-center gap-4">
          <WordIcon iconId={selected.iconId} className="w-14 h-14 shrink-0" />
          <span className="font-display text-3xl font-semibold text-slate-900 tracking-tight">
            {selected.anchorWord}
          </span>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 w-full">
          <button
            type="button"
            onClick={handlePlaySound}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              speakingTarget === 'sound'
                ? 'bg-blue-700 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <Volume2 className="w-4 h-4 shrink-0" />
            <span>Sound</span>
          </button>

          <button
            type="button"
            onClick={handlePlayWord}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              speakingTarget === 'word'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Volume2 className="w-4 h-4 shrink-0" />
            <span>Word</span>
          </button>
        </div>
      </section>

      {/* Right Sound Tile Grid */}
      <section className="lg:col-span-8 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Sound categories"
            className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl"
          >
            {FILTER_OPTIONS.map((opt) => {
              const active = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(opt.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    active
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
            <span className="text-rose-600">● Vowel</span>
            <span className="text-blue-700">■ Consonant</span>
            <span className="text-teal-700">▲ Digraph</span>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {visiblePhonemes.map((item) => {
            const isSelected = selected.id === item.id;
            const itemMeta = CATEGORY_META[item.category];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectTile(item)}
                aria-label={`${item.grapheme}, ${item.anchorWord}`}
                aria-pressed={isSelected}
                className={`group bg-white rounded-xl p-3 border transition-transform duration-150 active:scale-95 flex flex-col items-center justify-between gap-2 min-h-[104px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isSelected
                    ? itemMeta.activeBorder
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <span
                  className={`font-display text-3xl sm:text-4xl font-bold leading-none pt-1 ${itemMeta.textClass}`}
                >
                  {item.grapheme}
                </span>

                <div className="flex items-center gap-1.5 w-full justify-center">
                  <WordIcon iconId={item.iconId} className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-medium text-slate-600 truncate">
                    {item.anchorWord}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
