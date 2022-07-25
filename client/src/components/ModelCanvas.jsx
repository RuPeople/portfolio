import React from 'react';
import {Suspense} from "react";
import {ContactShadows, OrbitControls, OrthographicCamera, PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Model from "./Model";

const ModelCanvas = () => {
    return (
        <Canvas style={{height:300}}>
            <Suspense fallback={null}>
                <spotLight angle={1} position={[10, 10, 10]} intensity={2} />
                <spotLight angle={1} position={[-10, 0, 0]} color="#816797" intensity={0.5}  />
                <spotLight angle={1} position={[0, -2, 2]} color="#816797" intensity={0.5} />
                <ambientLight intensity={0.015} />
                <Model/>
                <ContactShadows position={[0,-2,0]} renderOrder={2} frames={1} resolution={1024} scale={10} blur={2} opacity={0.6} far={100} />

                <OrbitControls autoRotate zoom={10} />
            </Suspense>
        </Canvas>
    );
};

export default ModelCanvas;