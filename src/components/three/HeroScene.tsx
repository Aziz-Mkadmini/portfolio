"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { MathUtils, type Group, type Mesh } from "three";

const AMBER = "#F5A524";

function Scene() {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { size, viewport } = useThree();
  const wide = size.width >= 1024;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.5);
    const t = state.clock.elapsedTime;

    const baseX = wide ? viewport.width * 0.28 : 0;
    const baseY = wide ? 0.05 : viewport.height * 0.2;
    const baseScale = wide ? Math.min(0.9, viewport.width * 0.15) : 0.78;

    g.position.x = MathUtils.damp(g.position.x, baseX + pointer.current.x * 0.12, 3, delta);
    g.position.y = MathUtils.damp(
      g.position.y,
      baseY - pointer.current.y * 0.1 + scroll * 0.9,
      3,
      delta,
    );
    g.rotation.x = MathUtils.damp(g.rotation.x, pointer.current.y * 0.3 + scroll * 0.5, 2.5, delta);
    g.rotation.y = MathUtils.damp(
      g.rotation.y,
      t * 0.12 + pointer.current.x * 0.45,
      2.5,
      delta,
    );
    g.scale.setScalar(MathUtils.damp(g.scale.x, baseScale * (1 - scroll * 0.18), 3, delta));

    if (ring.current) ring.current.rotation.z = t * 0.08;
  });

  return (
    <>
      <group ref={group} scale={wide ? 1 : 0.78}>
        <mesh>
          <sphereGeometry args={[1, wide ? 128 : 72, wide ? 128 : 72]} />
          <MeshDistortMaterial
            color="#6b4514"
            metalness={0.6}
            roughness={0.34}
            distort={0.36}
            speed={1.5}
            envMapIntensity={1.1}
          />
        </mesh>
        <mesh ref={ring} rotation={[1.15, 0.35, 0]}>
          <torusGeometry args={[1.62, 0.004, 8, 160]} />
          <meshBasicMaterial color={AMBER} transparent opacity={0.55} />
        </mesh>
      </group>

      <ambientLight intensity={0.15} />
      <directionalLight position={[4, 5, 3]} intensity={2.4} color="#ffc266" />
      <directionalLight position={[-5, -3, 2]} intensity={0.5} color={AMBER} />

      <Sparkles
        count={wide ? 70 : 36}
        scale={[viewport.width, viewport.height, 3]}
        size={1.6}
        speed={0.25}
        opacity={0.5}
        color={AMBER}
      />

      {/* Lighting comes from a tiny generated environment: no HDRI download. */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="circle" intensity={9} color={AMBER} position={[5, 3, 3]} scale={[7, 7, 1]} />
        <Lightformer form="circle" intensity={5} color="#ffb84d" position={[0, 6, 0]} scale={[9, 4, 1]} />
        <Lightformer form="rect" intensity={3} color="#fff3dd" position={[-6, 1, 3]} scale={[3, 9, 1]} />
        <Lightformer form="ring" intensity={4} color={AMBER} position={[-2, -5, 1]} scale={4} />
        <Lightformer form="circle" intensity={1.5} color="#ffd9a0" position={[0, 0, 7]} scale={[4, 4, 1]} />
      </Environment>
    </>
  );
}

export default function HeroScene({
  active,
  onReady,
}: {
  /** False while the hero is off-screen or the tab is hidden: rendering stops. */
  active: boolean;
  onReady: () => void;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={active ? "always" : "never"}
      resize={{ scroll: false }}
      onCreated={() => onReady()}
      style={{ pointerEvents: "none" }}
    >
      <Scene />
    </Canvas>
  );
}
