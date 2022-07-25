import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import model from "../static/dog.gltf"

export default function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF(model);
    return (
        <group position={[0,-2,0]} scale={2.5} ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Group18985.geometry}
                material={materials["default"]}
                position={[0, 1.31, 0.58]}
                scale={1.38}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Box002.geometry}
                material={materials["default"]}
                position={[0, 1.31, 0.58]}
                scale={1.38}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object001.geometry}
                material={materials["default"]}
                position={[0, 1.31, 0.58]}
                scale={1.38}
            />
        </group>
    );
}

useGLTF.preload(model);