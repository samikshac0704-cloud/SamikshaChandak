import React from 'react';

interface WordIconProps {
  iconId: string;
  className?: string;
}

export const WordIcon: React.FC<WordIconProps> = ({ iconId, className = 'w-12 h-12' }) => {
  const renderArtwork = () => {
    switch (iconId) {
      case 'apple':
        return (
          <>
            <path d="M32 16c-2-5-7-8-10-6 1 4 5 7 10 6z" fill="#16A34A" />
            <path d="M32 18v-7" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
            <path
              d="M32 19c-9-2-17 4-17 15 0 11 7 20 14 20 2 0 3-1 3-1s1 1 3 1c7 0 14-9 14-20 0-11-8-17-17-15z"
              fill="#E11D48"
            />
            <circle cx="24" cy="27" r="3" fill="#FDA4AF" opacity="0.6" />
          </>
        );
      case 'egg':
        return (
          <>
            <path
              d="M32 10c-10 0-17 15-17 27 0 10 7 17 17 17s17-7 17-17c0-12-7-27-17-27z"
              fill="#FEF3C7"
              stroke="#D97706"
              strokeWidth="2.5"
            />
            <ellipse cx="26" cy="24" rx="3" ry="5" fill="#FFFFFF" opacity="0.8" />
          </>
        );
      case 'igloo':
        return (
          <>
            <path d="M10 48c0-14 10-24 22-24s22 10 22 24H10z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
            <path d="M24 48V37a8 8 0 0 1 16 0v11" fill="#0369A1" />
            <path d="M13 36h38M18 28h28M32 24v12" stroke="#7DD3FC" strokeWidth="2" />
          </>
        );
      case 'octopus':
        return (
          <>
            <circle cx="32" cy="26" r="14" fill="#FB7185" />
            <path
              d="M18 36c-4 6-6 12-2 15M24 38c-2 7-2 13 2 15M32 39v14M40 38c2 7 2 13-2 15M46 36c4 6 6 12 2 15"
              stroke="#E11D48"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <circle cx="27" cy="25" r="2.5" fill="#0F172A" />
            <circle cx="37" cy="25" r="2.5" fill="#0F172A" />
            <path d="M29 31q3 3 6 0" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
          </>
        );
      case 'umbrella':
        return (
          <>
            <path d="M10 32c0-12 10-20 22-20s22 8 22 20H10z" fill="#2563EB" />
            <path d="M22 32c0-12 4-20 10-20s10 8 10 20H22z" fill="#60A5FA" />
            <path d="M32 32v17a4 4 0 0 1-8 0" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M32 9v3" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          </>
        );
      case 'bat':
        return (
          <>
            <path d="M8 28c6-4 12 0 15 4l9-4 9 4c3-4 9-8 15-4-4 8-8 12-14 11l-10 7-10-7c-6 1-10-3-14-11z" fill="#334155" />
            <circle cx="32" cy="30" r="6" fill="#1E293B" />
            <path d="M28 24l-2-5 4 3M36 24l2-5-4 3" fill="#1E293B" />
            <circle cx="30" cy="29" r="1.2" fill="#F8FAFC" />
            <circle cx="34" cy="29" r="1.2" fill="#F8FAFC" />
          </>
        );
      case 'cat':
        return (
          <>
            <path d="M16 14l7 10h18l7-10v16c0 11-7 18-16 18s-16-7-16-18V14z" fill="#FB923C" />
            <circle cx="26" cy="31" r="2.5" fill="#0F172A" />
            <circle cx="38" cy="31" r="2.5" fill="#0F172A" />
            <path d="M29 36l3 3 3-3z" fill="#E11D48" />
            <path d="M12 33h8M12 37h8M44 33h8M44 37h8" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'dog':
        return (
          <>
            <ellipse cx="16" cy="29" rx="5" ry="11" fill="#78350F" />
            <ellipse cx="48" cy="29" rx="5" ry="11" fill="#78350F" />
            <circle cx="32" cy="31" r="15" fill="#D97706" />
            <circle cx="26" cy="28" r="2.5" fill="#0F172A" />
            <circle cx="38" cy="28" r="2.5" fill="#0F172A" />
            <ellipse cx="32" cy="34" rx="4" ry="3" fill="#0F172A" />
            <path d="M32 37v4" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 'fish':
        return (
          <>
            <path d="M46 32l11-10v20L46 32z" fill="#0284C7" />
            <ellipse cx="29" cy="32" rx="19" ry="12" fill="#38BDF8" />
            <circle cx="20" cy="29" r="2.5" fill="#0F172A" />
            <path d="M30 22c3 5 3 15 0 20" stroke="#0284C7" strokeWidth="2.5" fill="none" />
          </>
        );
      case 'goat':
        return (
          <>
            <path d="M20 18c-3-6 2-10 6-7M44 18c3-6-2-10-6-7" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <ellipse cx="32" cy="32" rx="13" ry="15" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
            <path d="M28 46l4 7 4-7" fill="#94A3B8" />
            <circle cx="27" cy="29" r="2" fill="#0F172A" />
            <circle cx="37" cy="29" r="2" fill="#0F172A" />
            <ellipse cx="32" cy="38" rx="4" ry="2.5" fill="#FDA4AF" />
          </>
        );
      case 'hat':
        return (
          <>
            <path d="M20 36l4-20h16l4 20H20z" fill="#2563EB" />
            <rect x="19" y="31" width="26" height="5" fill="#F59E0B" />
            <ellipse cx="32" cy="38" rx="22" ry="6" fill="#1D4ED8" />
          </>
        );
      case 'jam':
        return (
          <>
            <rect x="18" y="18" width="28" height="34" rx="6" fill="#E11D48" />
            <rect x="20" y="12" width="24" height="7" rx="2" fill="#94A3B8" />
            <rect x="22" y="28" width="20" height="14" rx="2" fill="#FFF1F2" />
            <circle cx="32" cy="35" r="4" fill="#E11D48" />
          </>
        );
      case 'kite':
        return (
          <>
            <path d="M32 8l18 20-18 22-18-22L32 8z" fill="#F59E0B" />
            <path d="M32 8v42M14 28h36" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M32 50c4 4-4 8 2 11" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        );
      case 'leaf':
        return (
          <>
            <path d="M14 48C14 24 32 12 52 12c0 20-12 36-38 36z" fill="#16A34A" />
            <path d="M12 50L44 20" stroke="#DCFCE7" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 'moon':
        return (
          <>
            <path
              d="M40 13a19 19 0 1 0 11 33 15 15 0 0 1-11-33z"
              fill="#FBBF24"
              stroke="#D97706"
              strokeWidth="2"
            />
          </>
        );
      case 'net':
        return (
          <>
            <ellipse cx="32" cy="24" rx="18" ry="8" fill="none" stroke="#0284C7" strokeWidth="3.5" />
            <path d="M15 26l6 20h22l6-20" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
            <path d="M22 28l3 18M32 28v18M42 28l-3 18M18 36h28" stroke="#38BDF8" strokeWidth="2" />
          </>
        );
      case 'pig':
        return (
          <>
            <path d="M16 17l7 5-5 7zM48 17l-7 5 5 7z" fill="#F472B6" />
            <circle cx="32" cy="34" r="16" fill="#F9A8D4" />
            <ellipse cx="32" cy="37" rx="7" ry="5" fill="#F472B6" />
            <circle cx="29.5" cy="37" r="1.5" fill="#831843" />
            <circle cx="34.5" cy="37" r="1.5" fill="#831843" />
            <circle cx="25" cy="28" r="2.2" fill="#0F172A" />
            <circle cx="39" cy="28" r="2.2" fill="#0F172A" />
          </>
        );
      case 'rain':
        return (
          <>
            <path
              d="M18 33h28a9 9 0 0 0 0-18 12 12 0 0 0-23-2 9 9 0 0 0-5 20z"
              fill="#CBD5E1"
            />
            <path d="M22 40l-3 9M33 40l-3 9M44 40l-3 9" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
          </>
        );
      case 'sun':
        return (
          <>
            <circle cx="32" cy="32" r="13" fill="#FBBF24" />
            <path
              d="M32 9v6M32 49v6M9 32h6M49 32h6M16 16l4 4M44 44l4 4M48 16l-4 4M20 44l-4 4"
              stroke="#F59E0B"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </>
        );
      case 'tent':
        return (
          <>
            <path d="M10 48L32 14l22 34H10z" fill="#0D9488" />
            <path d="M25 48l7-14 7 14H25z" fill="#134E4A" />
            <path d="M32 14v-4" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 'van':
        return (
          <>
            <path d="M10 24h29l11 10v10H10V24z" fill="#2563EB" />
            <rect x="14" y="28" width="12" height="8" rx="1.5" fill="#E0F2FE" />
            <path d="M30 28h8l7 8H30v-8z" fill="#E0F2FE" />
            <circle cx="20" cy="45" r="5" fill="#1E293B" />
            <circle cx="43" cy="45" r="5" fill="#1E293B" />
          </>
        );
      case 'web':
        return (
          <>
            <path d="M32 10v44M10 32h44M16 16l32 32M48 16L16 48" stroke="#64748B" strokeWidth="2" />
            <circle cx="32" cy="32" r="8" fill="none" stroke="#64748B" strokeWidth="2" />
            <circle cx="32" cy="32" r="16" fill="none" stroke="#64748B" strokeWidth="2" />
            <circle cx="32" cy="32" r="22" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
          </>
        );
      case 'box':
        return (
          <>
            <path d="M14 22l18-8 18 8v20l-18 8-18-8V22z" fill="#D97706" />
            <path d="M14 22l18 8 18-8" fill="#FCD34D" />
            <path d="M32 30v20" stroke="#92400E" strokeWidth="2.5" />
          </>
        );
      case 'yak':
        return (
          <>
            <path d="M16 20c-5-6 0-12 5-8M48 20c5-6 0-12-5-8" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" fill="none" />
            <rect x="18" y="22" width="28" height="26" rx="10" fill="#78350F" />
            <circle cx="26" cy="32" r="2.2" fill="#FFFFFF" />
            <circle cx="38" cy="32" r="2.2" fill="#FFFFFF" />
            <ellipse cx="32" cy="41" rx="6" ry="4" fill="#A16207" />
          </>
        );
      case 'zip':
        return (
          <>
            <rect x="26" y="10" width="12" height="44" rx="3" fill="#E2E8F0" />
            <path d="M29 14h6M29 20h6M29 26h6M29 38h6M29 44h6M29 50h6" stroke="#475569" strokeWidth="2" />
            <rect x="27" y="29" width="10" height="8" rx="2" fill="#2563EB" />
            <rect x="30" y="37" width="4" height="8" rx="1.5" fill="#1D4ED8" />
          </>
        );
      case 'ship':
        return (
          <>
            <path d="M32 12v22" stroke="#475569" strokeWidth="3" />
            <path d="M32 14l14 14H32V14z" fill="#E11D48" />
            <path d="M12 36h40l-6 12H18l-6-12z" fill="#1D4ED8" />
            <path d="M10 51q11 4 22 0t22 0" stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        );
      case 'chair':
        return (
          <>
            <path d="M20 14h24v18H20z" fill="#B45309" rx="3" />
            <rect x="18" y="32" width="28" height="6" rx="2" fill="#D97706" />
            <path d="M21 38v14M43 38v14" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          </>
        );
      case 'thumb':
        return (
          <>
            <path
              d="M28 28V16a4 4 0 0 1 8 0v12h10a5 5 0 0 1 5 5l-2 13a5 5 0 0 1-5 4H24V28h4z"
              fill="#FDBA74"
              stroke="#EA580C"
              strokeWidth="2"
            />
            <rect x="14" y="28" width="10" height="22" rx="3" fill="#2563EB" />
          </>
        );
      case 'duck':
        return (
          <>
            <ellipse cx="30" cy="40" rx="16" ry="11" fill="#FBBF24" />
            <circle cx="38" cy="23" r="10" fill="#FBBF24" />
            <path d="M47 22l9 3-9 4v-7z" fill="#EA580C" />
            <circle cx="40" cy="21" r="2" fill="#0F172A" />
          </>
        );
      case 'ring':
        return (
          <>
            <path d="M26 14l6-5 6 5-6 6-6-6z" fill="#38BDF8" />
            <circle cx="32" cy="36" r="14" fill="none" stroke="#F59E0B" strokeWidth="6" />
          </>
        );
      case 'queen':
        return (
          <>
            <path d="M14 44l4-22 14 10 14-10 4 22H14z" fill="#F59E0B" />
            <rect x="14" y="44" width="36" height="6" rx="2" fill="#D97706" />
            <circle cx="18" cy="19" r="3" fill="#E11D48" />
            <circle cx="32" cy="16" r="3.5" fill="#2563EB" />
            <circle cx="46" cy="19" r="3" fill="#E11D48" />
          </>
        );
      case 'mat':
        return (
          <>
            <rect x="10" y="22" width="44" height="20" rx="3" fill="#0D9488" />
            <rect x="14" y="26" width="36" height="12" rx="1.5" fill="#CCFBF1" />
          </>
        );
      case 'rat':
        return (
          <>
            <circle cx="24" cy="23" r="6" fill="#94A3B8" />
            <ellipse cx="33" cy="35" rx="14" ry="10" fill="#64748B" />
            <circle cx="23" cy="32" r="2" fill="#0F172A" />
            <circle cx="19" cy="35" r="2" fill="#FB7185" />
            <path d="M47 36c6 0 8 8 2 11" stroke="#FB7185" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case 'map':
        return (
          <>
            <path d="M12 18l13-4 14 4 13-4v32l-13 4-14-4-13 4V18z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <path d="M25 14v32M39 18v32" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="32" cy="30" r="4" fill="#E11D48" />
          </>
        );
      case 'cap':
        return (
          <>
            <path d="M14 36c0-10 8-18 18-18s18 8 18 18H14z" fill="#E11D48" />
            <path d="M34 36h20c0 4-6 6-14 6H28l6-6z" fill="#9F1239" />
          </>
        );
      case 'tap':
        return (
          <>
            <path d="M16 32h22a8 8 0 0 1 8 8v4h-8v-4H16v-8z" fill="#64748B" />
            <path d="M24 20h12M30 20v12" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            <path d="M42 48c0 3-3 5-3 5s-3-2-3-5a3 3 0 0 1 6 0z" fill="#0284C7" />
          </>
        );
      case 'bag':
        return (
          <>
            <path d="M24 22v-4a8 8 0 0 1 16 0v4" fill="none" stroke="#78350F" strokeWidth="3.5" />
            <rect x="15" y="22" width="34" height="28" rx="4" fill="#D97706" />
          </>
        );
      case 'fan':
        return (
          <>
            <circle cx="32" cy="27" r="15" fill="#E2E8F0" stroke="#475569" strokeWidth="2.5" />
            <circle cx="32" cy="27" r="4" fill="#0284C7" />
            <path d="M32 42v10M22 52h20" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          </>
        );
      case 'pan':
        return (
          <>
            <circle cx="26" cy="32" r="14" fill="#334155" />
            <circle cx="26" cy="32" r="9" fill="#64748B" />
            <path d="M40 32h14" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
          </>
        );
      case 'bed':
        return (
          <>
            <path d="M12 24v24M52 32v16M12 40h40" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
            <rect x="16" y="30" width="34" height="10" rx="2" fill="#2563EB" />
            <rect x="16" y="26" width="11" height="6" rx="2" fill="#F8FAFC" />
          </>
        );
      case 'red':
        return (
          <>
            <circle cx="32" cy="32" r="18" fill="#E11D48" />
            <circle cx="26" cy="26" r="4" fill="#FDA4AF" opacity="0.6" />
          </>
        );
      case 'pen':
        return (
          <>
            <path d="M16 48l6-14L42 14l8 8-20 20-14 6z" fill="#2563EB" />
            <path d="M16 48l3-7 4 4-7 3z" fill="#0F172A" />
          </>
        );
      case 'ten':
        return (
          <>
            <rect x="12" y="16" width="40" height="32" rx="6" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2.5" />
            <text
              x="32"
              y="39"
              textAnchor="middle"
              fill="#312E81"
              fontSize="22"
              fontWeight="800"
              fontFamily="Outfit, sans-serif"
            >
              10
            </text>
          </>
        );
      case 'hen':
        return (
          <>
            <ellipse cx="32" cy="37" rx="14" ry="12" fill="#B45309" />
            <circle cx="24" cy="24" r="8" fill="#B45309" />
            <path d="M22 14l3 3 3-3" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 24l-5 2 5 2z" fill="#F59E0B" />
            <circle cx="22" cy="23" r="1.5" fill="#0F172A" />
          </>
        );
      case 'pin':
        return (
          <>
            <circle cx="38" cy="22" r="8" fill="#E11D48" />
            <path d="M32 28L16 46" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          </>
        );
      case 'fin':
        return (
          <>
            <path d="M14 46c4-18 18-28 32-30-4 12-4 22 2 30H14z" fill="#0284C7" />
            <path d="M10 48h44" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
          </>
        );
      case 'log':
        return (
          <>
            <rect x="12" y="24" width="38" height="16" rx="8" fill="#78350F" />
            <circle cx="46" cy="32" r="8" fill="#FDE68A" stroke="#78350F" strokeWidth="2.5" />
            <circle cx="46" cy="32" r="3" fill="none" stroke="#B45309" strokeWidth="1.5" />
          </>
        );
      case 'pot':
        return (
          <>
            <rect x="16" y="24" width="32" height="24" rx="5" fill="#475569" />
            <path d="M12 28h4M48 28h4M27 18h10" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="14" y="21" width="36" height="5" rx="2" fill="#334155" />
          </>
        );
      case 'hot':
        return (
          <>
            <path d="M32 14c6 8 10 14 10 21a10 10 0 0 1-20 0c0-7 4-13 10-21z" fill="#EA580C" />
            <path d="M32 25c3 4 5 7 5 11a5 5 0 0 1-10 0c0-4 2-7 5-11z" fill="#FBBF24" />
          </>
        );
      case 'fox':
        return (
          <>
            <path d="M16 14l9 10h14l9-10v16l-16 18-16-18V14z" fill="#EA580C" />
            <path d="M16 30l16 18 16-18H16z" fill="#FFEDD5" opacity="0.5" />
            <circle cx="26" cy="29" r="2.2" fill="#0F172A" />
            <circle cx="38" cy="29" r="2.2" fill="#0F172A" />
            <circle cx="32" cy="40" r="2.5" fill="#0F172A" />
          </>
        );
      case 'run':
        return (
          <>
            <circle cx="38" cy="16" r="5" fill="#2563EB" />
            <path
              d="M24 27l10-2 8 6M34 25l-4 11 9 8M30 36l-10 8"
              stroke="#2563EB"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        );
      case 'bus':
        return (
          <>
            <rect x="10" y="20" width="44" height="22" rx="4" fill="#FBBF24" />
            <rect x="14" y="24" width="10" height="8" rx="1" fill="#E0F2FE" />
            <rect x="27" y="24" width="10" height="8" rx="1" fill="#E0F2FE" />
            <rect x="40" y="24" width="10" height="8" rx="1" fill="#E0F2FE" />
            <circle cx="20" cy="44" r="4.5" fill="#1E293B" />
            <circle cx="44" cy="44" r="4.5" fill="#1E293B" />
          </>
        );
      case 'cup':
        return (
          <>
            <path d="M16 22h24v16a12 12 0 0 1-24 0V22z" fill="#0284C7" />
            <path d="M40 25h5a5 5 0 0 1 0 10h-5" fill="none" stroke="#0284C7" strokeWidth="3.5" />
          </>
        );
      case 'bug':
        return (
          <>
            <ellipse cx="32" cy="35" rx="13" ry="15" fill="#E11D48" />
            <circle cx="32" cy="19" r="6" fill="#1E293B" />
            <path d="M32 22v28" stroke="#1E293B" strokeWidth="2.5" />
            <circle cx="26" cy="33" r="2.5" fill="#1E293B" />
            <circle cx="38" cy="33" r="2.5" fill="#1E293B" />
            <circle cx="27" cy="42" r="2" fill="#1E293B" />
            <circle cx="37" cy="42" r="2" fill="#1E293B" />
          </>
        );
      case 'mug':
        return (
          <>
            <rect x="16" y="20" width="24" height="28" rx="4" fill="#0D9488" />
            <path d="M40 26h5a5 5 0 0 1 0 12h-5" fill="none" stroke="#0D9488" strokeWidth="3.5" />
          </>
        );
      case 'rug':
        return (
          <>
            <rect x="12" y="20" width="40" height="24" rx="2" fill="#B91C1C" />
            <rect x="18" y="26" width="28" height="12" fill="#FDE68A" />
            <path d="M9 22h3M9 28h3M9 34h3M9 40h3M52 22h3M52 28h3M52 34h3M52 40h3" stroke="#94A3B8" strokeWidth="2" />
          </>
        );
      case 'sock':
        return (
          <>
            <path d="M24 14h14v22l8 6a5 5 0 0 1-6 8l-16-8V14z" fill="#2563EB" />
            <rect x="24" y="14" width="14" height="6" fill="#F59E0B" />
          </>
        );
      case 'rock':
        return (
          <>
            <path d="M12 46l8-20 14-8 14 10 4 18H12z" fill="#64748B" />
            <path d="M34 18l-8 14 10 14" stroke="#94A3B8" strokeWidth="2" fill="none" />
          </>
        );
      case 'shop':
        return (
          <>
            <rect x="14" y="24" width="36" height="26" fill="#F1F5F9" stroke="#475569" strokeWidth="2" />
            <path d="M10 24l4-10h36l4 10H10z" fill="#E11D48" />
            <rect x="26" y="34" width="12" height="16" fill="#0284C7" />
          </>
        );
      case 'dish':
        return (
          <>
            <circle cx="32" cy="32" r="20" fill="#E2E8F0" stroke="#64748B" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
          </>
        );
      case 'chat':
        return (
          <>
            <path d="M14 18h36v22H28l-10 8v-8h-4V18z" fill="#2563EB" />
            <circle cx="24" cy="29" r="2.5" fill="#FFFFFF" />
            <circle cx="32" cy="29" r="2.5" fill="#FFFFFF" />
            <circle cx="40" cy="29" r="2.5" fill="#FFFFFF" />
          </>
        );
      case 'chop':
        return (
          <>
            <rect x="14" y="42" width="36" height="8" rx="2" fill="#D97706" />
            <path d="M26 14l16 16-6 6-16-16 6-6z" fill="#94A3B8" />
            <path d="M40 28l8 8" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          </>
        );
      case 'bath':
        return (
          <>
            <path d="M12 30h40v8a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10v-8z" fill="#38BDF8" />
            <rect x="10" y="27" width="44" height="5" rx="2.5" fill="#0284C7" />
            <circle cx="24" cy="21" r="4" fill="#E0F2FE" />
            <circle cx="33" cy="18" r="5" fill="#BAE6FD" />
          </>
        );
      case 'moth':
        return (
          <>
            <ellipse cx="21" cy="32" rx="11" ry="13" fill="#D97706" />
            <ellipse cx="43" cy="32" rx="11" ry="13" fill="#D97706" />
            <rect x="29" y="18" width="6" height="28" rx="3" fill="#78350F" />
            <circle cx="21" cy="32" r="3.5" fill="#FEF3C7" />
            <circle cx="43" cy="32" r="3.5" fill="#FEF3C7" />
          </>
        );
      case 'king':
        return (
          <>
            <path d="M12 44l5-20 15 10 15-10 5 20H12z" fill="#FBBF24" />
            <rect x="12" y="44" width="40" height="6" rx="2" fill="#D97706" />
            <circle cx="32" cy="19" r="3.5" fill="#E11D48" />
          </>
        );
      default:
        return (
          <circle cx="32" cy="32" r="18" fill="#CBD5E1" />
        );
    }
  };

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {renderArtwork()}
    </svg>
  );
};
