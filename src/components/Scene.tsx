import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ShoeModel from './ShoeModel';
import { Suspense, useState, useEffect } from 'react';

export default function Scene() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setScreenSize('mobile');
      } else if (width < 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getCameraSettings = () => {
    switch (screenSize) {
      case 'mobile':
        return { position: [25, 10, 25] as [number, number, number], fov: 10 };
      case 'tablet':
        return { position: [20, 8, 20] as [number, number, number], fov: 10 };
      default:
        return { position: [15, 5, 15] as [number, number, number], fov: 10 };
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas 
        shadows={false}
        dpr={screenSize === 'mobile' ? [0.5, 1] : [0.5, 1.5]}
        camera={getCameraSettings()}
        gl={{ preserveDrawingBuffer: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        
        <Suspense fallback={null}>
        
        {/* Interactive camera controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          minDistance={1}
          maxDistance={4}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
        />

        {/* Simplified Lighting - No shadows to reduce GPU load */}
        <ambientLight intensity={0.8} />
        
        {/* Main light only */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5}
          castShadow={false}
        />

        {/* Single fill light */}
        <pointLight position={[-3, 2, -2]} intensity={0.6} />

        {/* The Nike Shoe */}
          <ShoeModel />
        </Suspense>
      </Canvas>

      {/* Credit */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '11px',
        fontFamily: 'monospace',
        pointerEvents: 'none',
        zIndex: 100
      }}>
       © 3D Model from SofiaWolfie
      </div>
    </div>
  );
}
