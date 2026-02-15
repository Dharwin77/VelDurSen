import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

const CarBody = () => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rocking motion
            meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 4) * 0.02;
            meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 4) * 0.05;
        }
    });

    return (
        <group ref={meshRef} rotation={[0, 0, 0]} scale={0.6}>
            {/* Main Body */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <boxGeometry args={[4, 0.8, 1.8]} />
                <meshStandardMaterial color="#ec4899" metalness={0.7} roughness={0.2} />
            </mesh>

            {/* Cabin/Windows */}
            <mesh position={[-0.2, 1.1, 0]} castShadow>
                <boxGeometry args={[1.8, 0.6, 1.6]} />
                <meshStandardMaterial color="#111" metalness={1} roughness={0} transparent opacity={0.9} />
            </mesh>

            {/* Windshield */}
            <mesh position={[0.7, 1.1, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
                <planeGeometry args={[1.2, 1.6]} />
                <meshStandardMaterial color="#111" metalness={1} roughness={0} transparent opacity={0.8} side={THREE.DoubleSide} />
            </mesh>

            {/* Spoiler */}
            <mesh position={[-1.8, 1.1, 0]} castShadow>
                <boxGeometry args={[0.2, 0.4, 1.8]} />
                <meshStandardMaterial color="#ec4899" />
            </mesh>
            <mesh position={[-1.8, 1.3, 0]} castShadow>
                <boxGeometry args={[0.6, 0.1, 2]} />
                <meshStandardMaterial color="#ec4899" />
            </mesh>

            {/* Wheels */}
            {[
                [-1.2, 0.2, 0.9], [1.2, 0.2, 0.9], [-1.2, 0.2, -0.9], [1.2, 0.2, -0.9]
            ].map((pos, i) => (
                <group key={i} position={pos as [number, number, number]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                        <cylinderGeometry args={[0.4, 0.4, 0.3, 24]} />
                        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
                    </mesh>
                    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.16]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.05, 12]} />
                        <meshStandardMaterial color="#666" metalness={0.8} />
                    </mesh>
                </group>
            ))}

            {/* Headlights */}
            <mesh position={[2, 0.6, 0.6]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
            </mesh>
            <mesh position={[2, 0.6, -0.6]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={3} />
            </mesh>
        </group>
    );
};

export const ThreeDCar = () => {
    return (
        <div className="w-64 h-48 cursor-pointer">
            <Suspense fallback={<div className="w-full h-full bg-pink-100 rounded-xl animate-pulse" />}>
                <Canvas shadows gl={{ antialias: true }}>
                    <PerspectiveCamera makeDefault position={[6, 4, 8]} fov={35} />
                    <ambientLight intensity={0.7} />
                    <pointLight position={[10, 10, 10]} intensity={2} />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

                    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
                        <CarBody />
                    </Float>

                    <ContactShadows position={[0, -0.2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
                    <Environment preset="city" />
                </Canvas>
            </Suspense>
        </div>
    );
};
