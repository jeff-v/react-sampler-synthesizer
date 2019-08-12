import React from 'react'

const Effects = () => <div>I will be an effects module</div>

export default Effects

// interface EffectsProps {
//   delayTime: number;
//   handleEffectChange: () => void;
//   id: string;
//   panning: Panning;
//   position: Position;
//   reverb: string;
// }

// interface Panning {
//   panningModel: "equalpower" | "HRTF";
//   distanceModel: "linear" | "inverse" | "exponential";
//   refDistance: number;
//   maxDistance: number;
//   rolloffFactor: number;
//   coneInnerAngle: number;
//   coneOuterAngle: number;
//   coneOuterGain: number;
// }

// interface Position {
//   positionX: number;
//   positionY: number;
//   positionZ: number;
//   forwardX: number;
//   forwardY: number;
//   forwardZ: number;
//   upX: number;
//   upY: number;
//   upZ: number;
// }

// const Effects = ({  }: EffectsProps) => {
//   return (
//     <form>
//       <label>
//         Delay
//         <input
//           id={id}
//           name="delay"
//           type="text"
//           value={delayTime}
//           onChange={handleEffectChange}
//         />
//       </label>
//       <label>
//         Position
//         <input
//           id={id}
//           name="position"
//           value={position}
//           onChange={handleEffectChange}
//         />
//       </label>
//       <label>
//         Panning
//         <input
//           id={id}
//           name="panning"
//           type="text"
//           value={panning}
//           onChange={handleEffectChange}
//         />
//       </label>
//       <ol>
//         Reverb
//         <li>
//           <label>
//             Room Size
//             <input
//               id={id}
//               name="reverb.roomSize"
//               type="text"
//               value={reverb.roomSize}
//               onChange={handleEffectChange}
//             />
//           </label>
//         </li>
//         <li>
//           <label>
//             Dampening
//             <input
//               id={this.props.id}
//               name="reverb.dampening"
//               type="text"
//               value={this.props.reverb.dampening}
//               onChange={this.props.handleEffectChange}
//             />
//           </label>
//         </li>
//         <li>
//           <label>
//             Wet
//             <input
//               id={this.props.id}
//               name="reverb.wet"
//               type="text"
//               value={this.props.reverb.wet}
//               onChange={this.props.handleEffectChange}
//             />
//           </label>
//         </li>
//         <li>
//           <label>
//             Dry
//             <input
//               id={this.props.id}
//               name="reverb.dry"
//               type="text"
//               value={this.props.reverb.dry}
//               onChange={this.props.handleEffectChange}
//             />
//           </label>
//         </li>
//       </ol>
//     </form>
//   );
// };

// export default Effects;
