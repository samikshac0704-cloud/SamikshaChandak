export type PhonemeCategory = 'vowel' | 'consonant' | 'digraph';

export interface PhonemeItem {
  id: string;
  grapheme: string;
  category: PhonemeCategory;
  phoneticCue: string;
  ipa: string;
  anchorWord: string;
  iconId: string;
}

export interface BlendWord {
  word: string;
  slots: [string, string, string];
  iconId: string;
}

export const PHONEMES: PhonemeItem[] = [
  // Short Vowels
  { id: 'a', grapheme: 'a', category: 'vowel', phoneticCue: 'ah', ipa: '/æ/', anchorWord: 'apple', iconId: 'apple' },
  { id: 'e', grapheme: 'e', category: 'vowel', phoneticCue: 'eh', ipa: '/ɛ/', anchorWord: 'egg', iconId: 'egg' },
  { id: 'i', grapheme: 'i', category: 'vowel', phoneticCue: 'ih', ipa: '/ɪ/', anchorWord: 'igloo', iconId: 'igloo' },
  { id: 'o', grapheme: 'o', category: 'vowel', phoneticCue: 'aw', ipa: '/ɒ/', anchorWord: 'octopus', iconId: 'octopus' },
  { id: 'u', grapheme: 'u', category: 'vowel', phoneticCue: 'uh', ipa: '/ʌ/', anchorWord: 'umbrella', iconId: 'umbrella' },

  // Consonants
  { id: 'b', grapheme: 'b', category: 'consonant', phoneticCue: 'buh', ipa: '/b/', anchorWord: 'bat', iconId: 'bat' },
  { id: 'c', grapheme: 'c', category: 'consonant', phoneticCue: 'kuh', ipa: '/k/', anchorWord: 'cat', iconId: 'cat' },
  { id: 'd', grapheme: 'd', category: 'consonant', phoneticCue: 'duh', ipa: '/d/', anchorWord: 'dog', iconId: 'dog' },
  { id: 'f', grapheme: 'f', category: 'consonant', phoneticCue: 'fuh', ipa: '/f/', anchorWord: 'fish', iconId: 'fish' },
  { id: 'g', grapheme: 'g', category: 'consonant', phoneticCue: 'guh', ipa: '/g/', anchorWord: 'goat', iconId: 'goat' },
  { id: 'h', grapheme: 'h', category: 'consonant', phoneticCue: 'huh', ipa: '/h/', anchorWord: 'hat', iconId: 'hat' },
  { id: 'j', grapheme: 'j', category: 'consonant', phoneticCue: 'juh', ipa: '/dʒ/', anchorWord: 'jam', iconId: 'jam' },
  { id: 'k', grapheme: 'k', category: 'consonant', phoneticCue: 'kuh', ipa: '/k/', anchorWord: 'kite', iconId: 'kite' },
  { id: 'l', grapheme: 'l', category: 'consonant', phoneticCue: 'luh', ipa: '/l/', anchorWord: 'leaf', iconId: 'leaf' },
  { id: 'm', grapheme: 'm', category: 'consonant', phoneticCue: 'muh', ipa: '/m/', anchorWord: 'moon', iconId: 'moon' },
  { id: 'n', grapheme: 'n', category: 'consonant', phoneticCue: 'nuh', ipa: '/n/', anchorWord: 'net', iconId: 'net' },
  { id: 'p', grapheme: 'p', category: 'consonant', phoneticCue: 'puh', ipa: '/p/', anchorWord: 'pig', iconId: 'pig' },
  { id: 'r', grapheme: 'r', category: 'consonant', phoneticCue: 'ruh', ipa: '/r/', anchorWord: 'rain', iconId: 'rain' },
  { id: 's', grapheme: 's', category: 'consonant', phoneticCue: 'suh', ipa: '/s/', anchorWord: 'sun', iconId: 'sun' },
  { id: 't', grapheme: 't', category: 'consonant', phoneticCue: 'tuh', ipa: '/t/', anchorWord: 'tent', iconId: 'tent' },
  { id: 'v', grapheme: 'v', category: 'consonant', phoneticCue: 'vuh', ipa: '/v/', anchorWord: 'van', iconId: 'van' },
  { id: 'w', grapheme: 'w', category: 'consonant', phoneticCue: 'wuh', ipa: '/w/', anchorWord: 'web', iconId: 'web' },
  { id: 'x', grapheme: 'x', category: 'consonant', phoneticCue: 'kss', ipa: '/ks/', anchorWord: 'box', iconId: 'box' },
  { id: 'y', grapheme: 'y', category: 'consonant', phoneticCue: 'yuh', ipa: '/j/', anchorWord: 'yak', iconId: 'yak' },
  { id: 'z', grapheme: 'z', category: 'consonant', phoneticCue: 'zuh', ipa: '/z/', anchorWord: 'zip', iconId: 'zip' },

  // Digraphs
  { id: 'sh', grapheme: 'sh', category: 'digraph', phoneticCue: 'shh', ipa: '/ʃ/', anchorWord: 'ship', iconId: 'ship' },
  { id: 'ch', grapheme: 'ch', category: 'digraph', phoneticCue: 'chuh', ipa: '/tʃ/', anchorWord: 'chair', iconId: 'chair' },
  { id: 'th', grapheme: 'th', category: 'digraph', phoneticCue: 'thuh', ipa: '/θ/', anchorWord: 'thumb', iconId: 'thumb' },
  { id: 'ck', grapheme: 'ck', category: 'digraph', phoneticCue: 'kuh', ipa: '/k/', anchorWord: 'duck', iconId: 'duck' },
  { id: 'ng', grapheme: 'ng', category: 'digraph', phoneticCue: 'ing', ipa: '/ŋ/', anchorWord: 'ring', iconId: 'ring' },
  { id: 'qu', grapheme: 'qu', category: 'digraph', phoneticCue: 'kwuh', ipa: '/kw/', anchorWord: 'queen', iconId: 'queen' },
];

export const PHONEME_MAP: Record<string, PhonemeItem> = Object.fromEntries(
  PHONEMES.map((p) => [p.id, p])
);

export const BLEND_ONSETS = ['b', 'c', 'd', 'f', 'h', 'm', 'p', 'r', 's', 'sh', 'ch', 'th'];
export const BLEND_VOWELS = ['a', 'e', 'i', 'o', 'u'];
export const BLEND_ENDINGS = ['t', 'p', 'n', 'g', 'd', 'm', 'x', 'sh', 'ck', 'ng', 'th'];

export const BLEND_WORDS: BlendWord[] = [
  { word: 'cat', slots: ['c', 'a', 't'], iconId: 'cat' },
  { word: 'bat', slots: ['b', 'a', 't'], iconId: 'bat' },
  { word: 'hat', slots: ['h', 'a', 't'], iconId: 'hat' },
  { word: 'mat', slots: ['m', 'a', 't'], iconId: 'mat' },
  { word: 'rat', slots: ['r', 'a', 't'], iconId: 'rat' },
  { word: 'map', slots: ['m', 'a', 'p'], iconId: 'map' },
  { word: 'cap', slots: ['c', 'a', 'p'], iconId: 'cap' },
  { word: 'tap', slots: ['t', 'a', 'p'], iconId: 'tap' },
  { word: 'bag', slots: ['b', 'a', 'g'], iconId: 'bag' },
  { word: 'fan', slots: ['f', 'a', 'n'], iconId: 'fan' },
  { word: 'pan', slots: ['p', 'a', 'n'], iconId: 'pan' },
  { word: 'bed', slots: ['b', 'e', 'd'], iconId: 'bed' },
  { word: 'red', slots: ['r', 'e', 'd'], iconId: 'red' },
  { word: 'pen', slots: ['p', 'e', 'n'], iconId: 'pen' },
  { word: 'ten', slots: ['t', 'e', 'n'], iconId: 'ten' },
  { word: 'hen', slots: ['h', 'e', 'n'], iconId: 'hen' },
  { word: 'net', slots: ['n', 'e', 't'], iconId: 'net' },
  { word: 'pig', slots: ['p', 'i', 'g'], iconId: 'pig' },
  { word: 'pin', slots: ['p', 'i', 'n'], iconId: 'pin' },
  { word: 'fin', slots: ['f', 'i', 'n'], iconId: 'fin' },
  { word: 'dog', slots: ['d', 'o', 'g'], iconId: 'dog' },
  { word: 'log', slots: ['l', 'o', 'g'], iconId: 'log' },
  { word: 'pot', slots: ['p', 'o', 't'], iconId: 'pot' },
  { word: 'hot', slots: ['h', 'o', 't'], iconId: 'hot' },
  { word: 'box', slots: ['b', 'o', 'x'], iconId: 'box' },
  { word: 'fox', slots: ['f', 'o', 'x'], iconId: 'fox' },
  { word: 'sun', slots: ['s', 'u', 'n'], iconId: 'sun' },
  { word: 'run', slots: ['r', 'u', 'n'], iconId: 'run' },
  { word: 'bus', slots: ['b', 'u', 's'], iconId: 'bus' },
  { word: 'cup', slots: ['c', 'u', 'p'], iconId: 'cup' },
  { word: 'bug', slots: ['b', 'u', 'g'], iconId: 'bug' },
  { word: 'mug', slots: ['m', 'u', 'g'], iconId: 'mug' },
  { word: 'rug', slots: ['r', 'u', 'g'], iconId: 'rug' },
  { word: 'duck', slots: ['d', 'u', 'ck'], iconId: 'duck' },
  { word: 'sock', slots: ['s', 'o', 'ck'], iconId: 'sock' },
  { word: 'rock', slots: ['r', 'o', 'ck'], iconId: 'rock' },
  { word: 'ship', slots: ['sh', 'i', 'p'], iconId: 'ship' },
  { word: 'shop', slots: ['sh', 'o', 'p'], iconId: 'shop' },
  { word: 'fish', slots: ['f', 'i', 'sh'], iconId: 'fish' },
  { word: 'dish', slots: ['d', 'i', 'sh'], iconId: 'dish' },
  { word: 'chat', slots: ['ch', 'a', 't'], iconId: 'chat' },
  { word: 'chop', slots: ['ch', 'o', 'p'], iconId: 'chop' },
  { word: 'bath', slots: ['b', 'a', 'th'], iconId: 'bath' },
  { word: 'moth', slots: ['m', 'o', 'th'], iconId: 'moth' },
  { word: 'ring', slots: ['r', 'i', 'ng'], iconId: 'ring' },
  { word: 'king', slots: ['k', 'i', 'ng'], iconId: 'king' },
];

export const FEATURED_BLEND_WORDS: BlendWord[] = [
  BLEND_WORDS.find((w) => w.word === 'cat')!,
  BLEND_WORDS.find((w) => w.word === 'dog')!,
  BLEND_WORDS.find((w) => w.word === 'sun')!,
  BLEND_WORDS.find((w) => w.word === 'pig')!,
  BLEND_WORDS.find((w) => w.word === 'bed')!,
  BLEND_WORDS.find((w) => w.word === 'ship')!,
  BLEND_WORDS.find((w) => w.word === 'duck')!,
  BLEND_WORDS.find((w) => w.word === 'fish')!,
  BLEND_WORDS.find((w) => w.word === 'ring')!,
  BLEND_WORDS.find((w) => w.word === 'box')!,
  BLEND_WORDS.find((w) => w.word === 'cup')!,
  BLEND_WORDS.find((w) => w.word === 'bath')!,
];

export const BLEND_WORD_MAP: Record<string, BlendWord> = Object.fromEntries(
  BLEND_WORDS.map((w) => [w.word, w])
);
