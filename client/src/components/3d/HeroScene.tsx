import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ElegantGeometry = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.05;
            meshRef.current.rotation.y = t * 0.1;
        }
        if (groupRef.current) {
            groupRef.current.rotation.z = t * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Icosahedron args={[2.5, 0]} ref={meshRef}>
                    <meshStandardMaterial
                        color="#cfb53b"
                        wireframe
                        transparent
                        opacity={0.3}
                        roughness={0}
                        metalness={1}
                    />
                </Icosahedron>
            </Float>
        </group>
    );
};

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-b from-ajce-dark to-[#050510]">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <spotLight position={[-10, -10, -5]} intensity={1} color="#cfb53b" />

                <ElegantGeometry />

                {/* Background Particles - Elegant Stars */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />

                {/* Subtle Fog for depth */}
                <fog attach="fog" args={['#0a0a0a', 5, 20]} />
            </Canvas>
        </div>
    );
};

export default HeroScene;
