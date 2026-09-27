import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function BrandEcosystemCanvas({ className = '' }) {
  const mountRef = useRef(null);
  const [activeNode, setActiveNode] = useState('Branderss Core');
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;
    camera.position.y = 2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Lighting - Warm Cream and Amber highlights
    const ambientLight = new THREE.AmbientLight(0xF3E6D2, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xF3E6D2, 3.5, 30);
    pointLight1.position.set(5, 8, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xD8C0A5, 2.5, 30);
    pointLight2.position.set(-6, -5, -4);
    scene.add(pointLight2);

    // 3. Central Branderss Core (Geometric Crystal + Gyroscope Rings)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Central faceted crystal in warm cream
    const crystalGeo = new THREE.IcosahedronGeometry(2.2, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xF3E6D2,
      emissive: 0x35170B,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    // Outer wireframe shell in soft beige
    const wireGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xD8C0A5,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Gyroscope Orbit Rings around Core
    const createRing = (radius, tiltX, tiltY, color = 0xD8C0A5) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.035, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = tiltX;
      ringMesh.rotation.y = tiltY;
      return ringMesh;
    };

    const ring1 = createRing(4.2, Math.PI / 3, 0, 0xF3E6D2);
    const ring2 = createRing(5.2, -Math.PI / 4, Math.PI / 6, 0xD8C0A5);
    const ring3 = createRing(6.2, Math.PI / 6, -Math.PI / 4, 0xC89B5B);
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // 4. Orbiting Ecosystem Nodes (Story → Strategy → Design → Audience → Growth)
    const nodeData = [
      { name: 'STRATEGY', color: 0xF3E6D2, radius: 6.8, speed: 0.45, yOffset: 1.2 },
      { name: 'STORY', color: 0xD8C0A5, radius: 7.6, speed: -0.38, yOffset: -1.0 },
      { name: 'DESIGN', color: 0xC89B5B, radius: 6.2, speed: 0.52, yOffset: 2.0 },
      { name: 'AUDIENCE', color: 0xD8C0A5, radius: 8.2, speed: -0.32, yOffset: -1.8 },
      { name: 'GROWTH', color: 0xF3E6D2, radius: 7.2, speed: 0.4, yOffset: 0.2 }
    ];

    const nodes = [];

    nodeData.forEach((data, index) => {
      const nodeGroup = new THREE.Group();

      // Glowing Node Sphere
      const sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.5,
        roughness: 0.25,
        metalness: 0.4
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeGroup.add(sphere);

      // Node halo ring
      const haloGeo = new THREE.RingGeometry(0.7, 0.85, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: data.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI / 2;
      nodeGroup.add(halo);

      scene.add(nodeGroup);

      // Energy connection line from Core to Node
      const lineMat = new THREE.LineBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.3
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0)
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);

      nodes.push({
        group: nodeGroup,
        data,
        angle: (index * (Math.PI * 2)) / nodeData.length,
        line,
        sphere
      });
    });

    // 5. Ambient Floating Cosmic Particle Field (Warm Cream Stardust)
    const particlesCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = (Math.random() - 0.5) * 35;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xD8C0A5,
      size: 0.07,
      transparent: true,
      opacity: 0.45
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 6. Mouse Parallax & Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 1.5;
      targetY = y * 1.0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 7. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      camera.position.x = mouseX * 2.5;
      camera.position.y = 2 + mouseY * 1.8;
      camera.lookAt(0, 0, 0);

      // Rotate central core
      crystalMesh.rotation.y += 0.008;
      crystalMesh.rotation.x += 0.004;
      wireMesh.rotation.y -= 0.005;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.008;
      ring3.rotation.z += 0.005;

      // Animate Orbiting Nodes
      nodes.forEach((node) => {
        node.angle += node.data.speed * delta * 0.6;
        const x = Math.cos(node.angle) * node.data.radius;
        const z = Math.sin(node.angle) * node.data.radius;
        const y = node.data.yOffset + Math.sin(elapsedTime * 1.5 + node.data.radius) * 0.4;

        node.group.position.set(x, y, z);
        node.group.rotation.y += 0.01;

        // Update connection line
        const positions = node.line.geometry.attributes.position.array;
        positions[3] = x;
        positions[4] = y;
        positions[5] = z;
        node.line.geometry.attributes.position.needsUpdate = true;
      });

      // Slowly rotate background particle field
      particleField.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Memory disposal
      crystalGeo.dispose();
      crystalMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* Three.js Container */}
      <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]" />

      {/* Floating Interactive HUD labels */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-20 flex flex-wrap gap-2 items-center justify-center sm:justify-end pointer-events-auto">
        <span className="text-[11px] font-semibold text-[#D8C0A5] uppercase tracking-widest mr-2 hidden sm:inline-block">
          Interactive Ecosystem:
        </span>
        {['Strategy', 'Story', 'Design', 'Audience', 'Growth'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActiveNode(item)}
            className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer ${
              activeNode.toLowerCase() === item.toLowerCase()
                ? 'bg-[#F3E6D2] text-[#170A05] border-[#F3E6D2] font-bold shadow-[0_0_15px_rgba(243,230,210,0.4)]'
                : 'bg-[#281108]/90 backdrop-blur-md text-[#D8C0A5] border-[rgba(216,192,165,0.16)] hover:text-[#F3E6D2] hover:border-[#D8C0A5]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Active Node Tooltip Badge */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <div className="bg-[#281108]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[rgba(216,192,165,0.16)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C89B5B] animate-ping" />
          <span className="text-xs font-semibold text-[#F3E6D2]">
            {activeNode} <span className="text-[#D8C0A5] font-normal">• Active Node</span>
          </span>
        </div>
      </div>
    </div>
  );
}
