import { Warp } from "@paper-design/shaders-react"

export default function WarpShaderHero() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Warp
          style={{ height: '100%', width: '100%' }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(200, 100%, 20%)", "hsl(160, 100%, 75%)", "hsl(180, 90%, 30%)", "hsl(170, 100%, 80%)"]}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
        <div style={{ maxWidth: 1024, width: '100%', textAlign: 'center', gap: '2rem' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 300, margin: 0 }}>
            Elegant Shader Backgrounds
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.6, maxWidth: 768, margin: '1rem auto 0' }}>
            Beautiful, performant shader effects that enhance your content without overwhelming it. Perfect for hero
            sections, landing pages, and modern web experiences.
          </p>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button style={{ padding: '0.75rem 2rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 9999, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              Get Started
            </button>
            <button style={{ padding: '0.75rem 2rem', background: '#fff', borderRadius: 9999, color: '#1f2937', fontWeight: 600, cursor: 'pointer' }}>
              View Examples
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
