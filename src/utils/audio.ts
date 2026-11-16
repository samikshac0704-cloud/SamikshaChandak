let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playTone(
  frequency: number,
  durationMs = 110,
  type: OscillatorType = 'sine',
  volume = 0.08
): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000);
  } catch {
    // Audio playback unavailable
  }
}

export function playSuccessChime(): void {
  playTone(523.25, 110, 'triangle', 0.09);
  setTimeout(() => playTone(659.25, 150, 'triangle', 0.09), 90);
}

export function playRetryTone(): void {
  playTone(260, 140, 'sine', 0.07);
}

function selectPreferredVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find((v) => v.lang.startsWith('en') && /natural|samantha|google|daniel|karen/i.test(v.name)) ||
    voices.find((v) => v.lang === 'en-US') ||
    voices.find((v) => v.lang.startsWith('en')) ||
    voices[0]
  );
}

export function stopSpeech(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
}

export function speakText(text: string, slow = false): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = selectPreferredVoice();
      if (voice) utterance.voice = voice;
      utterance.lang = 'en-US';
      utterance.rate = slow ? 0.68 : 0.92;
      utterance.pitch = 1.05;

      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          resolve();
        }
      };

      utterance.onend = done;
      utterance.onerror = done;
      window.speechSynthesis.speak(utterance);

      // Safety fallback in case browser TTS hangs without firing onend
      setTimeout(done, slow ? 2200 : 1600);
    } catch {
      resolve();
    }
  });
}
