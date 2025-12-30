"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import Link from "next/link";
import BottomNav from "@/components/Footer/BottomNav";
import EarthNav from "@/components/EarthNav/EarthNav";


export default function ZodiacPage() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Scene, Camera, Renderer ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);
        containerRef.current.appendChild(renderer.domElement);

        // --- CSS2DRenderer for labels ---
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(window.innerWidth, window.innerHeight);
        labelRenderer.domElement.style.position = "absolute";
        labelRenderer.domElement.style.top = "0";
        containerRef.current.appendChild(labelRenderer.domElement);

        // --- OrbitControls ---
        const controls = new OrbitControls(camera, labelRenderer.domElement);
        controls.enableDamping = true;

        // --- Star field ---
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 2000;
        const positions = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 100;
        }
        starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const starField = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true }));
        scene.add(starField);

        // --- Load Textures ---
        const textureLoader = new THREE.TextureLoader();
        const sunTexture = textureLoader.load("/pho/sun1.png");
        const earthTexture = textureLoader.load("/pho/earth.png");

        const constellationImages = [
            "libra.png", "scorpio.png", "sagittarius.png", "capricorn.png",
            "aquarius.png", "pisces.png", "aries.png", "taurus.png",
            "gemini.png", "cancer.png", "leo.png", "virgo.png"
        ];
        const loadedConstellationTextures = constellationImages.map(img => textureLoader.load(`/pho/${img}`));

        // --- Solar System Group ---
        const solarSystem = new THREE.Group();
        scene.add(solarSystem);

        // --- Sun ---
        const sun = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 32, 32),
            new THREE.MeshBasicMaterial({ map: sunTexture, transparent: true })
        );
        solarSystem.add(sun);

        // --- Earth ---
        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 32, 32),
            new THREE.MeshBasicMaterial({ map: earthTexture, transparent: true })
        );
        solarSystem.add(earth);

        // --- Earth-Sun line ---
        const lineMaterial = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.2, gapSize: 0.1 });
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(6);
        lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        const earthSunLine = new THREE.Line(lineGeometry, lineMaterial);
        earthSunLine.computeLineDistances();
        solarSystem.add(earthSunLine);

        // --- Orbit ---
        const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x4169e1, transparent: true, opacity: 0.8 });
        const orbit = new THREE.Mesh(new THREE.TorusGeometry(1, 0.007, 16, 200), orbitMaterial);
        solarSystem.add(orbit);

        // --- Zodiac Labels + Images ---
        const zodiacNames = ["天秤宫", "天蝎宫", "射手宫", "摩羯宫", "水瓶宫", "双鱼宫", "白羊宫", "金牛宫", "双子宫", "巨蟹宫", "狮子宫", "处女宫"];
        const zodiacPlanes: THREE.Mesh[] = [];

        for (let i = 0; i < 12; i++) {
            const angle = (i * Math.PI * 2) / 12;
            const radius = 2.2;

            // --- Constellation image ---
            const tex = loadedConstellationTextures[i];
            const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
            const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), mat);
            plane.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
            solarSystem.add(plane);
            zodiacPlanes.push(plane);

            // --- Text label ---
            const div = document.createElement("div");
            div.className = "label";
            div.textContent = zodiacNames[i];
            div.style.color = "white";
            div.style.fontSize = "14px";
            div.style.fontWeight = "bold";
            const label = new CSS2DObject(div);
            label.position.set(Math.cos(angle) * (radius + 0.5), Math.sin(angle) * (radius + 0.5), 0);
            solarSystem.add(label);
        }

        // 整体上移
        solarSystem.position.y = 1.5;

        // --- Julian Date ---
        const julianDate = (date: Date) => {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const a = Math.floor((14 - month) / 12);
            const y = year + 4800 - a;
            const m = month + 12 * a - 3;
            return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045 + 0.5;
        };

        const calculatePositions = (date: Date) => {
            const JD = julianDate(date);
            const J2000 = 2451545.0;
            const n = JD - J2000;
            const L0 = (280.46646 + 0.98564736 * n) % 360;
            const M = (357.52911 + 0.98560028 * n) % 360;
            const M_rad = (M * Math.PI) / 180;
            const C = (1.914602 - 0.004817 * (n / 36525) - 0.000014 * (n / 36525) ** 2) * Math.sin(M_rad) +
                (0.019993 - 0.000101 * (n / 36525)) * Math.sin(2 * M_rad) + 0.000289 * Math.sin(3 * M_rad);
            const L_E = (L0 + C) % 360;
            const L_S = (L_E + 180) % 360;
            return {
                earthLongitude: L_E,
                sunLongitude: L_S,
                earthX: Math.cos(L_E * Math.PI / 180),
                earthY: Math.sin(L_E * Math.PI / 180)
            };
        };

        const updateEarthAndLine = (date: Date) => {
            const pos = calculatePositions(date);
            earth.position.set(pos.earthX, pos.earthY, 0);

            const sunDir = new THREE.Vector3(-pos.earthX, -pos.earthY, 0).normalize().multiplyScalar(3);
            const arr = earthSunLine.geometry.attributes.position.array as Float32Array;
            arr[0] = pos.earthX; arr[1] = pos.earthY; arr[2] = 0;
            arr[3] = sunDir.x; arr[4] = sunDir.y; arr[5] = 0;
            earthSunLine.geometry.attributes.position.needsUpdate = true;
            earthSunLine.computeLineDistances();

            const info = document.getElementById("info");
            if (info) {
                const zodiacIndex = Math.floor(pos.sunLongitude / 30);
                info.textContent = `观测日期: ${date.toLocaleDateString()}\n地球黄经: ${pos.earthLongitude.toFixed(2)}°\n太阳视黄经: ${pos.sunLongitude.toFixed(2)}°\n太阳位于: ${zodiacNames[zodiacIndex]}`;
            }
        };

        camera.position.set(0, 0, 9);
        camera.lookAt(0, 0, 0);

        updateEarthAndLine(currentDate);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            zodiacPlanes.forEach(plane => plane.lookAt(camera.position));
            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        };
        animate();

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            labelRenderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", onResize);

        // @ts-ignore
        window.updateEarthAndLine = updateEarthAndLine;

        return () => {
            window.removeEventListener("resize", onResize);
            containerRef.current?.removeChild(renderer.domElement);
            containerRef.current?.removeChild(labelRenderer.domElement);
        };
    }, []);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (!val) return;
        const newDate = new Date(val);
        setCurrentDate(newDate);
        const updateEvent = new CustomEvent("updateEarth", { detail: newDate });
        window.dispatchEvent(updateEvent);
    };

    useEffect(() => {
        const listener = (e: any) => {
            const date: Date = e.detail;
            // @ts-ignore
            window.updateEarthAndLine && window.updateEarthAndLine(date);
        };
        window.addEventListener("updateEarth", listener);
        return () => window.removeEventListener("updateEarth", listener);
    }, []);

    const formatDateInput = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col">


            <div className="relative z-10 flex flex-col h-screen">
                {/* <EarthNav currentPage="十二宫图" /> */}

                <div ref={containerRef} style={{ width: "100vw", height: "100vh", position: "relative" }}>
                    <div id="info" style={{ position: "absolute", top: "10px", left: "10px", color: "yellow", fontFamily: "monospace", fontSize: "14px", whiteSpace: "pre", textShadow: "1px 1px 1px black" }}></div>
                    <div style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.6)", padding: "15px", borderRadius: "8px" }}>
                        <label style={{ color: "white", fontSize: "14px" }}></label>
                        <input type="datetime-local" value={formatDateInput(currentDate)} onChange={handleDateChange} style={{ padding: "5px", borderRadius: "10px", border: "1px solid #666", background: "rgba(255,255,255,0.9)" }} />
                    </div>
                </div>

                <BottomNav active="earth" />
            </div>
        </div>
    );
}
