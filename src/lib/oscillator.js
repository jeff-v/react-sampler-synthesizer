const createOscillator = ({ length = 1, detune = 0, frequency = 440, volume = 1, waveType = 'sine', id = 0 }) => ({
  length,
  detune,
  frequency,
  volume,
  waveType,
  id
})

export default createOscillator