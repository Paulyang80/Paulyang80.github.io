"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Stars, Sparkles } from "@react-three/drei";

// --- Color Palettes ---
// User provided: ["#0466c8","#0353a4","#023e7d","#002855","#001845","#001233","#33415c","#5c677d","#7d8597","#979dac"]

const USER_PALETTE = [
  "#0466c8", // Bright Blue
  "#0353a4", // Blue
  "#023e7d", // Darker Blue
  "#002855", // Navy
  "#001845", // Deep Navy
  "#001233", // Darkest Navy (Background/Base)
  "#33415c", // Slate Blue
  "#5c677d", // Gray Blue
  "#7d8597", // Light Slate
  "#979dac"  // Silver/Gray
];

// Darkest color for background to make stars pop
const BACKGROUND_COLOR = "#001233"; 

function Building({ position, scale, emissiveColor }: { position: [number, number, number]; scale: [number, number, number]; emissiveColor: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={scale} />
      {/* 
         Base color is very dark navy (#001845) to blend with background.
         Emissive color provides the "window/light" effect using the brighter palette colors.
      */}
      <meshStandardMaterial 
        color="#001845"
        roughness={0.1}
        metalness={0.9}
        emissive={emissiveColor}
        emissiveIntensity={1.5} 
      />
    </mesh>
  );
}

function BuildingCluster({ position, count = 15, area = 10 }: { position: [number, number, number]; count?: number; area?: number }) {
  const buildings = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
        const h = Math.random() * 8 + 4; // Height 4-12
        const w = Math.random() * 1.5 + 1;
        const d = Math.random() * 1.5 + 1;
        const x = (Math.random() - 0.5) * area;
        const z = (Math.random() - 0.5) * area;
        
        // Pick a color from the pallet (excluding the darkest base colors to ensure lights pop)
        // We use the brighter half of the palette for lights
        const brightPalette = [ USER_PALETTE[0], USER_PALETTE[1], USER_PALETTE[7], USER_PALETTE[8], USER_PALETTE[9] ];
        const emissiveColor = brightPalette[Math.floor(Math.random() * brightPalette.length)];
        
        items.push({ 
            position: [x, h / 2, z] as [number, number, number], 
            scale: [w, h, d] as [number, number, number],
            emissiveColor
        });
    }
    return items;
  }, [count, area]);

  const [mountedBuildings, setMountedBuildings] = useState<typeof buildings>([]);

  useEffect(() => {
      setMountedBuildings(buildings);
  }, [buildings]);

  return (
    <group position={position}>
        {mountedBuildings.map((b, i) => (
            <Building key={i} position={b.position} scale={b.scale} emissiveColor={b.emissiveColor} />
        ))}
    </group>
  );
}

function Taipei101({ position }: { position: [number, number, number] }) {
    const sections = 8;
    const baseSize = 4;
    const sectionHeight = 2;
    // Matching the palette but slightly distinct - using the brightest blue
    const MAIN_COLOR = "#0466c8"; // Bright Blue
    
    return (
        <group position={position}>
            {/* Base */}
            <mesh position={[0, 3, 0]}>
                <boxGeometry args={[baseSize * 1.2, 6, baseSize * 1.2]} />
                 <meshStandardMaterial 
                    color="#002855" 
                    roughness={0.1} 
                    metalness={0.9} 
                 />
            </mesh>
            
            {/* Sections */}
            {Array.from({ length: sections }).map((_, i) => (
                <mesh key={i} position={[0, 6 + 3 + (i * sectionHeight), 0]}>
                     <boxGeometry args={[baseSize * (1 - i*0.02), sectionHeight * 0.9, baseSize * (1 - i*0.02)]} />
                     <meshStandardMaterial 
                        color={MAIN_COLOR} 
                        roughness={0.1} 
                        metalness={0.6} 
                        emissive={MAIN_COLOR} 
                        emissiveIntensity={1.0} 
                        transparent
                        opacity={0.95}
                     />
                </mesh>
            ))}
            
            {/* Clean top spire */}
             <mesh position={[0, 6 + 3 + (sections * sectionHeight) + 2, 0]}>
                 <cylinderGeometry args={[0.1, 0.5, 4, 8]} />
                 <meshStandardMaterial color="#979dac" emissive="#ffffff" emissiveIntensity={1.0} />
            </mesh>
        </group>
    )
}

function Scene() {
    const mouse = useRef({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        const targetX = mouse.current.x * 5;
        const targetY = mouse.current.y * 2 + 5; 
        
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
        state.camera.lookAt(0, 2, 0);
    });

    return (
        <>
            <ambientLight intensity={0.1} />
            
            {/* Cinematic Blue Lights */}
            <pointLight position={[10, 10, 10]} color="#0466c8" intensity={50} distance={50} />
            <pointLight position={[-10, 10, -10]} color="#0353a4" intensity={50} distance={50} />

            {/* Brighter, denser stars for visibility */}
            <Stars radius={100} depth={50} count={10000} factor={6} saturation={0} fade speed={1.5} />
            
            {/* Strong Sparkles - Matching the palette */}
            <Sparkles count={400} scale={40} size={6} speed={0.4} opacity={0.8} color="#0466c8" />
            <Sparkles count={200} scale={30} size={8} speed={0.3} opacity={0.6} color="#979dac" />
            <Sparkles count={100} scale={40} size={10} speed={0.5} opacity={0.4} color="#ffffff" />

            <fog attach="fog" args={[BACKGROUND_COLOR, 5, 90]} />

            {/* Clusters */}
            <BuildingCluster position={[-15, 0, 10]} count={20} />
            <BuildingCluster position={[15, 0, 10]} count={20} />
            <BuildingCluster position={[-12, 0, -10]} count={25} /> 

            {/* 101 Tower */}
            <Taipei101 position={[12, 0, -15]} />
            <BuildingCluster position={[18, 0, -12]} count={12} />

            {/* Deep Blue Glossy Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                <planeGeometry args={[200, 200]} />
                <meshStandardMaterial color={BACKGROUND_COLOR} roughness={0.05} metalness={0.8} />
            </mesh>
        </>
    );
}

export function CityBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Canvas camera={{ position: [0, 5, 25], fov: 50 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
