import { Clone, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Circuit({perfomanceMode}) {
  const { scene } = useGLTF(perfomanceMode ? 'static/circuit-min.glb' : 'static/circuit.glb');
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: '#0000ff',
        roughness: 1,
        metalness: 0,
				emissive: "#fff",
				emissiveIntensity: 1
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
		if (child.name === 'Terrain') {
			child.material = new THREE.MeshStandardMaterial({
				color: '#d2b48c',
				roughness: 1,
				metalness: 0
			});
		}
		if (child.name === 'Plane') {
			child.material = new THREE.MeshStandardMaterial({
				color: '#2f2f2f',
				roughness: 1,
				metalness: 0
			});
		}
  });

  return (
    <>
      <Clone object={scene} position={[0, 0, 0]} />
    </>
  );
}
