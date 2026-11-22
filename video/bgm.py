# 배경음악: Amazing Grace (작자 미상 전통 찬송, 저작권 없음) — 플루트 + 피아노 + 현악 패드를 직접 합성
# 실행: python3 bgm.py 95.3   → bgm.wav
import sys, wave, numpy as np
SR = 44100; TOTAL = float(sys.argv[1]) if len(sys.argv) > 1 else 95.0
BPM = 76.0; BEAT = 60 / BPM; BAR = 3 * BEAT
rng = np.random.default_rng(3)
N = int(SR * (TOTAL + 5)); L = np.zeros(N); R = np.zeros(N)
def midi(n): return 440 * 2 ** ((n - 69) / 12)
def add(x, t, pan=0.0, g=1.0):
    i = int(t * SR); 
    if i >= N: return
    x = x[: N - i]; L[i:i + len(x)] += x * g * (1 - pan) ; R[i:i + len(x)] += x * g * (1 + pan)
def flute(f, dur, vel):
    n = int(SR * (dur + .25)); t = np.arange(n) / SR
    vib = 1 + 0.004 * np.sin(2 * np.pi * 5.2 * t) * np.minimum(1, t / .35)
    ph = 2 * np.pi * f * np.cumsum(vib) / SR
    tone = np.sin(ph) + .22 * np.sin(2 * ph) + .07 * np.sin(3 * ph)
    breath = rng.normal(0, 1, n) * .025
    breath = np.convolve(breath, np.ones(20) / 20, 'same')
    env = np.minimum(1, t / .07) * np.clip((dur + .2 - t) / .25, 0, 1)
    return vel * (tone + breath) * env
def piano(f, dur, vel):
    n = int(SR * dur); t = np.arange(n) / SR; tone = np.zeros(n)
    for k, a in enumerate([1, .45, .2, .1, .05], 1):
        tone += a * np.sin(2 * np.pi * f * k * (1 + .0004 * k * k) * t) * np.exp(-t * (1.6 + .9 * k))
    env = np.minimum(1, t / .006) * (.7 * np.exp(-t * 2) + .3 * np.exp(-t * .4)) * np.clip((dur - t) / .3, 0, 1)
    return vel * tone * env
def pad(fs, dur, vel):
    n = int(SR * dur); t = np.arange(n) / SR; out = np.zeros(n)
    for f in fs:
        for d in (-.1, 0, .1): out += np.sin(2 * np.pi * f * 2 ** (d / 48) * t + rng.uniform(0, 6.28))
    out /= len(fs) * 3
    return vel * out * np.minimum(1, t / 1.2) * np.clip((dur - t) / 1.2, 0, 1)

# 멜로디 (G장조, 3/4박자): (박 길이, 음) — 못갖춘마디 D로 시작
G4, A4, B4, D5, E4, D4 = 67, 69, 71, 74, 64, 62
mel = [(1, D4), (2, G4), (.5, B4), (.5, G4), (2, B4), (1, A4), (2, G4), (1, E4), (2, D4), (1, D4),
       (2, G4), (.5, B4), (.5, G4), (2, B4), (1, A4), (2, D5), (1, B4),
       (2, D5), (.5, B4), (.5, D5), (2, B4), (1, A4), (2, G4), (1, E4), (2, D4), (1, D4),
       (2, G4), (.5, B4), (.5, G4), (2, B4), (1, A4), (3, G4)]
# 마디별 화음 (16마디)
C = {'G': [43, 55, 59, 62], 'C': [48, 55, 60, 64], 'D': [50, 54, 57, 62], 'Em': [40, 55, 59, 64], 'D7': [50, 54, 57, 60]}
prog = ['G', 'G', 'C', 'G', 'G', 'G', 'D', 'D7', 'G', 'G', 'C', 'G', 'Em', 'D7', 'G', 'G']
VERSE = 16 * BAR
start = 2 * BAR                     # 앞 2마디는 화음만
end_music = TOTAL - 5.5
def verse(t0, octave, vel, first):
    # 화음 (피아노 아르페지오 + 패드)
    for b, ch in enumerate(prog):
        tb = t0 + b * BAR
        if tb >= end_music: break
        notes = C[ch]
        add(pad([midi(n + 12) for n in notes[1:]], BAR + 1, .16), tb - .3)
        for i, n in enumerate([notes[0], notes[1], notes[2], notes[3], notes[2], notes[1]]):
            tt = tb + i * BEAT / 2
            if tt < end_music: add(piano(midi(n + (12 if i else 0)), 2.2, .16 if i else .24), tt, pan=-.2 + .08 * i)
    # 멜로디 (못갖춘마디는 앞 마디 끝에)
    t = t0 - BEAT
    for ln, n in mel:
        if t + .2 < end_music and not (first is None):
            add(flute(midi(n + octave), ln * BEAT * .96, vel), t, pan=.12)
        t += ln * BEAT
# 전주 (화음만)
for b in range(2):
    notes = C['G' if b == 0 else 'D7']; tb = b * BAR
    add(pad([midi(n + 12) for n in notes[1:]], BAR + 1, .14), tb)
    for i, n in enumerate([notes[0], notes[1], notes[2], notes[3]]): add(piano(midi(n + 12), 2.4, .15), tb + i * BEAT * .75)
t0 = start; k = 0
while t0 < end_music:
    verse(t0, 12 if k % 2 == 0 else 24, .20 if k % 2 == 0 else .15, True); t0 += VERSE; k += 1
# 끝 화음
fin = end_music + .3
for i, n in enumerate([43, 55, 59, 62, 67, 71, 74]): add(piano(midi(n), 5.5, .2), fin + i * .1)
add(pad([midi(n) for n in [55, 59, 62, 67]], 5.5, .2), fin)
add(flute(midi(79), 3.5, .14), fin + .4)
# 리버브
def reverb(x, secs=2.6, mix=.3):
    n = int(SR * secs); t = np.arange(n) / SR; ir = rng.normal(0, 1, n) * np.exp(-t * 3); ir[0] = 0; ir /= np.sqrt((ir ** 2).sum())
    size = 1 << int(np.ceil(np.log2(len(x) + n)))
    y = np.fft.irfft(np.fft.rfft(x, size) * np.fft.rfft(ir, size), size)[: len(x)]
    return (1 - mix) * x + mix * y
L, R = reverb(L), reverb(R)
n = int(SR * TOTAL); L, R = L[:n], R[:n]; t = np.arange(n) / SR
fade = np.minimum(1, t / 1.5) * np.clip((TOTAL - t) / 3, 0, 1); L *= fade; R *= fade
pk = max(abs(L).max(), abs(R).max()); L, R = L / pk * .36, R / pk * .36   # 배경음악은 작게 (말소리 없는 안내 영상이지만 조용히)
with wave.open('bgm.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((np.stack([L, R], 1) * 32767).astype('<i2').tobytes())
print('bgm.wav', round(TOTAL, 1), 's')
