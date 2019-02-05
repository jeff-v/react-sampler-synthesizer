export default function Oscillator() {
  const settings = {
    length: 1,
    detune: 0,
    frequency: 440,
    volume: 1,
    waveType: "sine"
  };
  return Object.create(settings);
}
