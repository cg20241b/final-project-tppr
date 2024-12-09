import { useRef, useEffect } from 'react';
import { Instances, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import useGame from './stores/Game';
import waypointsLeft from '../public/static/waypoints-left';
import waypointsRight from '../public/static/waypoints-right';
import Cube from './Cube';
import gsap from 'gsap';
import Waypoint from './Waypoint';
import Arrow from './Arrow';

const objectsMaterial = new MeshStandardMaterial({
  color: "#fff",
  roughness: 1,
  metalness: -0.3
});

export default function Objects({ cubesData, cubesCount, perfomanceMode }) {
  const [{ nodes: cubeNodes }, { nodes: waypointRight }, { nodes: waypointLeft }, { nodes: arrowRight }, { nodes: arrowLeft }, { scene: treeScene }] = useGLTF([
    perfomanceMode ? './static/cube-min.glb' : './static/cube.glb',
    './static/waypoint-right.glb',
    './static/waypoint-left.glb',
    './static/arrow-right.glb',
    './static/arrow-left.glb',
    './static/tree.glb'
  ]);

  const waypointsRightData = waypointsRight;
  const waypointsLeftData = waypointsLeft;
  const colors = ['#fff', '#deadae'];
  const scale = [1, 1, 1];

  const cubeInstanceRefs = useRef([]);
  const arrowRightInstanceRefs = useRef([]);
  const arrowLeftInstanceRefs = useRef([]);
  const enableCollisionHandlingRef = useRef(false);

  const { phase } = useGame((state) => state);
  useEffect(() => {
    phase === 'playing' ? (enableCollisionHandlingRef.current = true) : (enableCollisionHandlingRef.current = false);
  }, [phase]);

  const handleCollide = (e, index) => {
    if (!enableCollisionHandlingRef.current) {
      return;
    }
    const cubeColor = cubeInstanceRefs.current[index].color;
    animateColor(cubeColor, { r: 1, g: 0, b: 0.03 }, { r: 1, g: 1, b: 1 });
  };

  const animateColor = (color, startColor, endColor) => {
    gsap.to(color, {
      r: startColor.r,
      g: startColor.g,
      b: startColor.b,
      duration: 1,
      ease: 'power4',
      onComplete: () => {
        gsap.to(color, {
          r: endColor.r,
          g: endColor.g,
          b: endColor.b,
          duration: 1
        });
      },
    });
  };

  return (
    <>
      <Instances range={cubesCount} material={objectsMaterial} geometry={cubeNodes?.Cube?.geometry} receiveShadow castShadow>
        <group position={[0, 0, 0]}>
          {cubesData.map((props, i) => (
            <Cube
              key={i}
              position={[props[0], 0.5, -props[1]]}
              rotation={[0, props[2], 0]}
              args={[1, 1, 1]}
              color="#fff"
              onCollide={(e) => handleCollide(e, i)}
              cubeInstanceRefs={cubeInstanceRefs}
              index={i}
            />
          ))}
        </group>
      </Instances>

      {[waypointsRightData, waypointsLeftData].map((waypointsData, sideIndex) => (
        <Instances key={sideIndex} range={waypointsData.length} material={objectsMaterial} geometry={sideIndex === 0 ? waypointRight?.Waypoint?.geometry : waypointLeft?.Waypoint?.geometry} castShadow>
          <group position={[0, 0, 0]}>
            {waypointsData.map((props, i) => (
              <Waypoint
                key={i}
                position={[props[0], 1, -props[1]]}
                rotation={[0, (props[2] * Math.PI) / 180, 0]}
                index={i}
              />
            ))}
          </group>
        </Instances>
      ))}

      {/* Render Pohon di Sepanjang Circuit */}
      {waypointsRightData.length > 0 && (
        <primitive
          key="right-tree"
          object={treeScene.clone()}
          position={[
            waypointsRightData[0][0] + 10,
            0,
            -waypointsRightData[0][1],
          ]}
          scale={[0.1, 0.1, 0.1]}
        />
      )}

      {waypointsLeftData.length > 0 && (
        <primitive
          key="left-tree"
          object={treeScene.clone()}
          position={[
            waypointsLeftData[0][0] + 2,
            0,
            -waypointsLeftData[0][1],
          ]}
          scale={[0.1, 0.1, 0.1]} 
        />
      )}

      {/* Tambahkan pohon lagi di tempat kosong lain */}
      {waypointsRightData.length > 1 && (
        <primitive
          key="right-tree-2"
          object={treeScene.clone()} 
          position={[
            waypointsRightData[1][0] - 60, 
            0, 
            -waypointsRightData[1][1],
          ]}
          scale={[0.1, 0.1, 0.1]} 
        />
      )}
    </>
  );
}
