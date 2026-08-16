"use client";

import { useCallback, useRef, useEffect } from "react";

export const useSoundEffect = () => {
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize lazily to respect browser autoplay policies
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };
    
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });

    return () => {
      window.removeEventListener('click', initAudio);
      window.removeEventListener('keydown', initAudio);
      if (audioCtxRef.current?.state !== 'closed') {
        audioCtxRef.current?.close();
      }
    };
  }, []);

  // Helper to generate a short burst of noise for a tactile click
  const playNoiseClick = useCallback((duration: number, volume: number, filterFreq: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    
    if (ctx.state === 'suspended') ctx.resume();

    // Create a buffer for noise
    const bufferSize = ctx.sampleRate * duration; // e.g. 0.05s
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Fill buffer with white noise (random values between -1 and 1)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;

    const gainNode = ctx.createGain();
    
    // Very tight exponential envelope for a sharp, percussive click
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
  }, []);

  // Hover: Extremely subtle, soft rustle/tick
  const playHoverSound = useCallback(() => {
    playNoiseClick(0.02, 0.03, 2000); 
  }, [playNoiseClick]);

  // Click: Slightly deeper, more pronounced tick
  const playClickSound = useCallback(() => {
    playNoiseClick(0.04, 0.06, 1000);
  }, [playNoiseClick]);

  return { playHoverSound, playClickSound };
};
