'use client'

import { Html } from '@react-three/drei'

export function OriginHelper() {
  return (
    <group position={[0, 0.01, 0]}>
      <axesHelper args={[2]} />
      <Html
        center
        occlude={false}
        position={[0, 0.2, 0]}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        zIndexRange={[20, 0]}
      >
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.82)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 6,
            color: '#f8fafc',
            fontFamily: 'monospace',
            fontSize: 11,
            padding: '3px 6px',
            whiteSpace: 'nowrap',
          }}
        >
          0,0,0
        </div>
      </Html>
    </group>
  )
}
