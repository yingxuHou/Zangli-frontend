(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/frontend/src/components/seven-stars/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import Link from "next/link";
// import BottomNav from "@/components/Footer/BottomNav";
// import EarthNav from "@/components/EarthNav/EarthNav";
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
// const AstronomyVisualization: React.FC = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [latitude, setLatitude] = useState('31.23');
//     const [longitude, setLongitude] = useState('121.47');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [result, setResult] = useState('');
//     // Three.js相关引用
//     const sceneRef = useRef<THREE.Scene | null>(null);
//     const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//     const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//     const labelRendererRef = useRef<CSS2DRenderer | null>(null);
//     const controlsRef = useRef<OrbitControls | null>(null);
//     const celestialObjectsRef = useRef<any[]>([]);
//     const labelsRef = useRef<any[]>([]);
//     const animationIdRef = useRef<number>();
//     // 初始化Three.js场景
//     const initThree = () => {
//         if (!canvasRef.current) return;
//         // 创建场景
//         const scene = new THREE.Scene();
//         scene.background = new THREE.Color(0x000000);
//         sceneRef.current = scene;
//         // 添加星空效果
//         const starsGeometry = new THREE.BufferGeometry();
//         const starsCount = 2000;
//         const positions = new Float32Array(starsCount * 3);
//         for (let i = 0; i < starsCount * 3; i += 3) {
//             positions[i] = (Math.random() - 0.5) * 100;
//             positions[i + 1] = (Math.random() - 0.5) * 100;
//             positions[i + 2] = (Math.random() - 0.5) * 100;
//         }
//         starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//         const starsMaterial = new THREE.PointsMaterial({
//             color: 0xffffff,
//             size: 0.13,
//             transparent: true,
//             sizeAttenuation: true,
//             opacity: 0.8,
//         });
//         const starField = new THREE.Points(starsGeometry, starsMaterial);
//         scene.add(starField);
//         celestialObjectsRef.current.push(starField);
//         // 创建相机
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight,
//             0.1,
//             1000
//         );
//         cameraRef.current = camera;
//         // 创建WebGL渲染器
//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvasRef.current,
//             antialias: true,
//         });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         rendererRef.current = renderer;
//         // 创建CSS2D渲染器
//         const labelRenderer = new CSS2DRenderer();
//         labelRenderer.setSize(window.innerWidth, window.innerHeight);
//         labelRenderer.domElement.style.position = 'absolute';
//         labelRenderer.domElement.style.top = '0';
//         labelRenderer.domElement.style.pointerEvents = 'none';
//         if (containerRef.current) {
//             containerRef.current.appendChild(labelRenderer.domElement);
//         }
//         labelRendererRef.current = labelRenderer;
//         // 基础天球
//         const celestialSphere = new THREE.Mesh(
//             new THREE.SphereGeometry(2, 30, 30),
//             new THREE.MeshBasicMaterial({
//                 wireframe: true,
//                 transparent: true,
//                 opacity: 0.1,
//             })
//         );
//         scene.add(celestialSphere);
//         // 赤道平面
//         const equatorialPlane = new THREE.Mesh(
//             new THREE.CircleGeometry(2, 30),
//             new THREE.MeshBasicMaterial({
//                 color: 0x4169e1,
//                 transparent: true,
//                 opacity: 0.2,
//                 side: THREE.DoubleSide,
//             })
//         );
//         equatorialPlane.rotation.x = Math.PI / 2;
//         scene.add(equatorialPlane);
//         // 赤道圆圈
//         const equatorLine = new THREE.Mesh(
//             new THREE.TorusGeometry(2, 0.003, 16, 100),
//             new THREE.MeshBasicMaterial({ color: 0xffffff })
//         );
//         equatorLine.rotation.x = Math.PI / 2;
//         scene.add(equatorLine);
//         // 坐标轴
//         const axesHelper = new THREE.AxesHelper(2.4);
//         scene.add(axesHelper);
//         // 方位标签
//         const orientationLabels = ['东', '北', '西', '南'];
//         for (let i = 0; i < 4; i++) {
//             const angle = (i * Math.PI * 2) / 4;
//             const x = 2 * Math.cos(angle);
//             const z = 2 * Math.sin(angle);
//             const y = 0;
//             const labelDiv = document.createElement('div');
//             labelDiv.className = 'orientation-label';
//             labelDiv.textContent = orientationLabels[i];
//             labelDiv.style.color = '#ffffff';
//             labelDiv.style.fontSize = '14px';
//             labelDiv.style.fontWeight = 'bold';
//             labelDiv.style.textShadow = '0 0 3px rgba(0,0,0,0.8)';
//             const label = new CSS2DObject(labelDiv);
//             label.position.set(x * 1.1, y, z * 1.1);
//             scene.add(label);
//             labelsRef.current.push(label);
//         }
//         // 初始化控制器
//         const controls = new OrbitControls(camera, renderer.domElement);
//         camera.position.set(4, 4, 4);
//         controls.update();
//         controlsRef.current = controls;
//     };
//     // 更新可视化
//     const updateVisualization = (data: any, planetsData: any) => {
//         if (!sceneRef.current) return;
//         const scene = sceneRef.current;
//         // 保存星空对象
//         const starField = celestialObjectsRef.current.find(
//             (obj) => obj instanceof THREE.Points
//         );
//         // 清除旧对象
//         celestialObjectsRef.current.forEach((obj) => {
//             if (!(obj instanceof THREE.Points)) {
//                 scene.remove(obj);
//             }
//         });
//         celestialObjectsRef.current = starField ? [starField] : [];
//         // 清除旧标签
//         labelsRef.current.forEach((label) => scene.remove(label));
//         labelsRef.current = [];
//         const sunDeclination = parseFloat(data.sun_declination.replace('°', ''));
//         const moonDeclination = parseFloat(data.moon_declination.replace('°', ''));
//         const latitudeValue = parseFloat(latitude);
//         // 创建太阳和月亮轨迹
//         createCelestialBodyTrajectory('sun', sunDeclination, latitudeValue, 0xffff00, data);
//         createCelestialBodyTrajectory('moon', moonDeclination, latitudeValue, 0xc0c0c0, data);
//         // 创建行星轨迹
//         if (planetsData) {
//             const planetConfigs = {
//                 '水星': { color: 0x498bff, englishName: 'mercury' },
//                 '金星': { color: 0xcec2a8, englishName: 'venus' },
//                 '火星': { color: 0xb92123, englishName: 'mars' },
//                 '木星': { color: 0x60b633, englishName: 'jupiter' },
//                 '土星': { color: 0xf4d727, englishName: 'saturn' },
//             };
//             Object.entries(planetConfigs).forEach(([chineseName, config]) => {
//                 if (planetsData[chineseName]) {
//                     const declination = parseFloat(planetsData[chineseName].declination.replace('°', ''));
//                     createCelestialBodyTrajectory(
//                         config.englishName,
//                         declination,
//                         latitudeValue,
//                         config.color,
//                         data,
//                         true
//                     );
//                 }
//             });
//         }
//         // 更新结果显示
//         setResult(`
//       <p>日出时间: ${data.sunrise}</p>
//       <p>日落时间: ${data.sunset}</p>
//       <p>月出时间: ${data.moonrise}</p>
//       <p>月落时间: ${data.moonset}</p>
//       <p>日照时长: ${data.daylight_duration}</p>
//       <p>太阳赤纬角: ${data.sun_declination}</p>
//       <p>月亮赤纬角: ${data.moon_declination}</p>
//       <hr>
//     `);
//     };
//     // 创建天体轨迹
//     const createCelestialBodyTrajectory = (
//         bodyType: string,
//         declination: number,
//         latitude: number,
//         color: number,
//         data: any,
//         isPlanet: boolean = false
//     ) => {
//         if (!sceneRef.current) return;
//         const scene = sceneRef.current;
//         const radius = 2;
//         const timePoints = 86400;
//         const points = [];
//         const delta = (declination * Math.PI) / 180;
//         const latitudeRad = (latitude * Math.PI) / 180;
//         // 生成轨迹点
//         for (let i = 0; i < timePoints; i++) {
//             const t = (i / (timePoints - 1)) * Math.PI * 2;
//             const d = radius * Math.sin(delta);
//             const circleRadius = Math.sqrt(radius * radius - d * d);
//             const x = circleRadius * Math.cos(t);
//             const y = circleRadius * Math.sin(t);
//             const z = d;
//             // 计算旋转
//             const zAxis = new THREE.Vector3(0, 0, 1);
//             const northPoleDir = new THREE.Vector3(
//                 0,
//                 Math.sin(latitudeRad),
//                 Math.cos(latitudeRad)
//             ).normalize();
//             const rotationAxis = new THREE.Vector3();
//             rotationAxis.crossVectors(zAxis, northPoleDir).normalize();
//             const rotationAngle = Math.acos(zAxis.dot(northPoleDir));
//             const rotationMatrix = new THREE.Matrix4();
//             rotationMatrix.makeRotationAxis(rotationAxis, rotationAngle);
//             const point = new THREE.Vector3(x, y, z);
//             point.applyMatrix4(rotationMatrix);
//             points.push(point);
//         }
//         // 创建轨迹管道
//         const curve = new THREE.CatmullRomCurve3(points);
//         const pathGeometry = new THREE.TubeGeometry(curve, 50, 0.01, 20, false);
//         const pathMaterial = new THREE.MeshBasicMaterial({ color });
//         const path = new THREE.Mesh(pathGeometry, pathMaterial);
//         path.userData = { type: bodyType };
//         path.visible = !isPlanet; // 行星默认不可见
//         scene.add(path);
//         celestialObjectsRef.current.push(path);
//         // 添加时间标记和交点
//         createTimeMarkers(bodyType, points, data, color, declination > 0);
//     };
//     // 创建时间标记
//     const createTimeMarkers = (
//         bodyType: string,
//         points: THREE.Vector3[],
//         data: any,
//         color: number,
//         isDeclinationPositive: boolean
//     ) => {
//         if (!sceneRef.current) return;
//         const scene = sceneRef.current;
//         // 时间转换函数
//         const timeToSeconds = (timeStr: string) => {
//             const [h, m] = timeStr.split(':').map(Number);
//             return h * 3600 + m * 60;
//         };
//         // 查找与赤道平面的交点
//         const findIntersections = () => {
//             const intersections: THREE.Vector3[] = [];
//             const indices: number[] = [];
//             for (let i = 0; i < points.length - 1; i++) {
//                 const point = points[i];
//                 const nextPoint = points[i + 1];
//                 if (point.y * nextPoint.y <= 0) {
//                     const t = -point.y / (nextPoint.y - point.y);
//                     const intersectX = point.x + t * (nextPoint.x - point.x);
//                     const intersectZ = point.z + t * (nextPoint.z - point.z);
//                     intersections.push(new THREE.Vector3(intersectX, 0, intersectZ));
//                     indices.push(i);
//                 }
//             }
//             return { points: intersections, indices };
//         };
//         const { points: intersectionPoints, indices: intersectionIndices } = findIntersections();
//         // 创建交点标记
//         intersectionPoints.forEach((point, index) => {
//             const marker = new THREE.Mesh(
//                 new THREE.SphereGeometry(0.03),
//                 new THREE.MeshBasicMaterial({
//                     color: bodyType === 'sun' ? 0xff0000 : 0x008b8b
//                 })
//             );
//             marker.position.copy(point);
//             scene.add(marker);
//             celestialObjectsRef.current.push(marker);
//             // 添加标签
//             const labelDiv = document.createElement('div');
//             labelDiv.className = bodyType === 'sun' ? 'intersection-label' : 'moon-intersection-label';
//             const label = new CSS2DObject(labelDiv);
//             label.position.copy(point);
//             scene.add(label);
//             labelsRef.current.push(label);
//         });
//         // 获取升起时间
//         const riseTime = bodyType === 'sun' ? data.sunrise : data.moonrise;
//         const riseSec = timeToSeconds(riseTime);
//         const riseIndex = isDeclinationPositive ? intersectionIndices[1] : intersectionIndices[0];
//         // 创建整点时间标记
//         const riseHour = Math.ceil(riseSec / 3600);
//         const firstHourMarker = riseHour * 3600;
//         const timeDiff = firstHourMarker - riseSec;
//         const firstHourIndex = (riseIndex + Math.round((timeDiff / 86400) * points.length)) % points.length;
//         const markerColor = bodyType === 'sun' ? 0xffa500 : 0x20b2aa;
//         const markerGeometry = new THREE.SphereGeometry(0.03);
//         const markerMaterial = new THREE.MeshBasicMaterial({ color: markerColor });
//         for (let h = 0; h < 24; h++) {
//             const targetSec = firstHourMarker + h * 3600;
//             const markerIndex = (firstHourIndex + Math.round((h * points.length) / 24)) % points.length;
//             const position = points[markerIndex];
//             // 创建标记点
//             const marker = new THREE.Mesh(markerGeometry, markerMaterial);
//             marker.position.copy(position);
//             marker.userData = { type: bodyType };
//             scene.add(marker);
//             celestialObjectsRef.current.push(marker);
//             // 添加时间标签
//             const labelDiv = document.createElement('div');
//             labelDiv.className = bodyType === 'sun' ? 'time-marker' : 'moon-time-marker';
//             labelDiv.textContent = `${Math.floor(targetSec / 3600).toString().padStart(2, '0')}`;
//             const label = new CSS2DObject(labelDiv);
//             label.userData = { type: bodyType };
//             const direction = position.clone().normalize();
//             const labelPosition = position.clone().add(direction.multiplyScalar(0.15));
//             label.position.copy(labelPosition);
//             scene.add(label);
//             labelsRef.current.push(label);
//         }
//         // 添加当前时间标记
//         const [currentHour, currentMinute] = time.split(':').map(Number);
//         const currentSeconds = currentHour * 3600 + currentMinute * 60;
//         const pointsPerSecond = points.length / 86400;
//         const timeDiffFromRise = currentSeconds - riseSec;
//         const offsetPoints = Math.floor(timeDiffFromRise * pointsPerSecond);
//         const validIndex = (((riseIndex + offsetPoints) % points.length) + points.length) % points.length;
//         const currentMarker = new THREE.Mesh(
//             new THREE.SphereGeometry(0.08),
//             new THREE.MeshBasicMaterial({
//                 color: bodyType === 'sun' ? 0xff4500 : 0x87ceeb
//             })
//         );
//         currentMarker.position.copy(points[validIndex]);
//         currentMarker.userData = { type: bodyType };
//         scene.add(currentMarker);
//         celestialObjectsRef.current.push(currentMarker);
//         const currentLabel = document.createElement('div');
//         currentLabel.className = bodyType === 'sun' ? 'time-marker' : 'moon-time-marker';
//         currentLabel.style.color = bodyType === 'sun' ? '#ff4500' : '#87ceeb';
//         currentLabel.style.fontSize = '16px';
//         currentLabel.textContent = `${currentHour}:${currentMinute.toString().padStart(2, '0')}`;
//         const timeLabel = new CSS2DObject(currentLabel);
//         const direction = currentMarker.position.clone().normalize();
//         const labelPosition = currentMarker.position.clone().add(direction.multiplyScalar(0.2));
//         timeLabel.position.copy(labelPosition);
//         timeLabel.userData = { type: bodyType };
//         scene.add(timeLabel);
//         labelsRef.current.push(timeLabel);
//     };
//     // 动画循环
//     const animate = () => {
//         if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !labelRendererRef.current) return;
//         controlsRef.current?.update();
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//         labelRendererRef.current.render(sceneRef.current, cameraRef.current);
//         animationIdRef.current = requestAnimationFrame(animate);
//     };
//     // 窗口大小调整
//     const handleResize = () => {
//         if (!cameraRef.current || !rendererRef.current || !labelRendererRef.current) return;
//         const container = containerRef.current;
//         if (!container) return;
//         const width = container.clientWidth;
//         const height = container.clientHeight;
//         cameraRef.current.aspect = width / height;
//         cameraRef.current.updateProjectionMatrix();
//         rendererRef.current.setSize(width, height);
//         labelRendererRef.current.setSize(width, height);
//     };
//     // 表单提交处理
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         // 验证中国范围内的经纬度
//         const minLatitude = 3.5;
//         const maxLatitude = 53.4;
//         const minLongitude = 73.3;
//         const maxLongitude = 135.1;
//         const lat = parseFloat(latitude);
//         const lng = parseFloat(longitude);
//         if (lat < minLatitude || lat > maxLatitude || lng < minLongitude || lng > maxLongitude) {
//             setResult('请输入中国范围内的经纬度');
//             return;
//         }
//         try {
//             // 获取日月数据
//             const sunMoonResponse = await fetch('/api/calculate', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ latitude: lat, longitude: lng, date, time }),
//             });
//             const sunMoonData = await sunMoonResponse.json();
//             // 获取行星数据
//             const planetsResponse = await fetch('/api/planets', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ latitude: lat, longitude: lng, date, time }),
//             });
//             const planetsData = await planetsResponse.json();
//             updateVisualization(sunMoonData, planetsData);
//         } catch (error) {
//             console.error('Error:', error);
//             setResult('获取数据时出错，请重试');
//         }
//     };
//     // 天体显示控制
//     const handleCelestialToggle = (celestialBody: string, isChecked: boolean) => {
//         // 控制天体对象显示
//         celestialObjectsRef.current.forEach((obj) => {
//             if (obj.userData && obj.userData.type === celestialBody) {
//                 obj.visible = isChecked;
//             }
//         });
//         // 控制标签显示
//         labelsRef.current.forEach((label) => {
//             if (label.userData && label.userData.type === celestialBody) {
//                 label.visible = isChecked;
//             }
//         });
//     };
//     // 组件挂载和卸载
//     useEffect(() => {
//         // 设置默认日期和时间
//         const today = new Date();
//         const year = today.getFullYear();
//         const month = String(today.getMonth() + 1).padStart(2, '0');
//         const day = String(today.getDate()).padStart(2, '0');
//         const hours = String(today.getHours()).padStart(2, '0');
//         const minutes = String(today.getMinutes()).padStart(2, '0');
//         setDate(`${year}-${month}-${day}`);
//         setTime(`${hours}:${minutes}`);
//         // 初始化Three.js
//         initThree();
//         window.addEventListener('resize', handleResize);
//         animate();
//         // 自动提交表单
//         const submitForm = async () => {
//             if (latitude && longitude && date && time) {
//                 await handleSubmit(new Event('submit') as any);
//             }
//         };
//         submitForm();
//         // 清理函数
//         return () => {
//             window.removeEventListener('resize', handleResize);
//             if (animationIdRef.current) {
//                 cancelAnimationFrame(animationIdRef.current);
//             }
//             // 清理Three.js资源
//             if (rendererRef.current) {
//                 rendererRef.current.dispose();
//             }
//             if (labelRendererRef.current) {
//                 labelRendererRef.current.domElement.remove();
//             }
//         };
//     }, []);
//     // 复选框事件处理
//     useEffect(() => {
//         const checkboxes = document.querySelectorAll('.celestial-checkbox');
//         const handleCheckboxChange = (e: Event) => {
//             const target = e.target as HTMLInputElement;
//             const celestialBody = target.dataset.celestial;
//             if (celestialBody) {
//                 handleCelestialToggle(celestialBody, target.checked);
//             }
//         };
//         checkboxes.forEach(checkbox => {
//             checkbox.addEventListener('change', handleCheckboxChange);
//         });
//         return () => {
//             checkboxes.forEach(checkbox => {
//                 checkbox.removeEventListener('change', handleCheckboxChange);
//             });
//         };
//     }, []);
//     return (
//         <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             minHeight: '100vh',
//             backgroundColor: '#1c023f',
//             color: 'white',
//             fontFamily: 'Arial, sans-serif',
//             margin: 0,
//             padding: 0,
//             overflowX: 'hidden'
//         }}>
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "minmax(240px, 280px) 1fr",
//                     minHeight: "100vh",
//                 }}
//             >
//                 {/* 输入面板 */}
//                 <div
//                     style={{
//                         background: "rgba(0, 0, 0, 0.6)",
//                         boxShadow: "1px 0 3px rgba(0, 0, 0, 0.3)",
//                         overflowY: "auto",
//                         position: "fixed" as const,
//                         top: "2vw",
//                         left: "2vw",
//                         borderRadius: "8px",
//                         zIndex: 1000,
//                         width: "20vw", // ← 自动根据屏幕宽度调整
//                         minWidth: "120px", // 保证小屏时不会太小
//                         maxWidth: "200px", // 大屏时不会太大
//                         border: "none",
//                         padding: "1vw", // 自适应内边距
//                         fontSize: "clamp(12px, 1vw, 16px)", // 字体随屏幕变化
//                     }}
//                 >
//                     <form
//                         onSubmit={handleSubmit}
//                         style={{ display: "flex", flexDirection: "column", gap: "0.8vw" }}
//                     >
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <label htmlFor="latitude" style={{ marginBottom: "0.3em" }}>
//                                 纬度
//                             </label>
//                             <input
//                                 type="number"
//                                 id="latitude"
//                                 step="0.01"
//                                 required
//                                 placeholder="例如：31.35"
//                                 value={latitude}
//                                 onChange={(e) => setLatitude(e.target.value)}
//                                 style={{
//                                     width: "100%",
//                                     padding: "0.5em",
//                                     borderRadius: "4px",
//                                     border: "1px solid #ccc",
//                                 }}
//                             />
//                         </div>
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <label htmlFor="longitude" style={{ marginBottom: "0.3em" }}>
//                                 经度
//                             </label>
//                             <input
//                                 type="number"
//                                 id="longitude"
//                                 step="0.01"
//                                 required
//                                 placeholder="例如：121.43"
//                                 value={longitude}
//                                 onChange={(e) => setLongitude(e.target.value)}
//                                 style={{
//                                     width: "100%",
//                                     padding: "0.5em",
//                                     borderRadius: "4px",
//                                     border: "1px solid #ccc",
//                                 }}
//                             />
//                         </div>
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <label htmlFor="date" style={{ marginBottom: "0.3em" }}>
//                                 日期
//                             </label>
//                             <input
//                                 type="date"
//                                 id="date"
//                                 required
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                                 style={{
//                                     width: "100%",
//                                     padding: "0.5em",
//                                     borderRadius: "4px",
//                                     border: "1px solid #ccc",
//                                 }}
//                             />
//                         </div>
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <label htmlFor="time" style={{ marginBottom: "0.3em" }}>
//                                 时间
//                             </label>
//                             <input
//                                 type="time"
//                                 id="time"
//                                 required
//                                 value={time}
//                                 onChange={(e) => setTime(e.target.value)}
//                                 style={{
//                                     width: "100%",
//                                     padding: "0.5em",
//                                     borderRadius: "4px",
//                                     border: "1px solid #ccc",
//                                 }}
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             style={{
//                                 padding: "0.7em",
//                                 backgroundColor: "#6b55b4",
//                                 color: "white",
//                                 border: "none",
//                                 borderRadius: "2px",
//                                 cursor: "pointer",
//                                 transition: "background-color 0.3s",
//                             }}
//                         >
//                             查询并可视化
//                         </button>
//                     </form>
//                 </div>
//                 {/* 结果显示 */}
//                 <div id="result" style={{
//                     position: 'fixed' as const,
//                     top: '20px',
//                     right: '20px',
//                     width: '220px',
//                     padding: '10px',
//                     background: 'rgba(0, 0, 0, 0.3)',
//                     borderRadius: '10px',
//                     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//                     color: 'white',
//                     fontSize: '0.9rem'
//                 }} dangerouslySetInnerHTML={{ __html: result }} />
//                 {/* 可视化面板 */}
//                 <div ref={containerRef} className="visualization-panel" style={{
//                     position: 'relative' as const,
//                     background: '#000',
//                     overflow: 'hidden',
//                     gridColumn: '1 / -1'
//                 }}>
//                     <canvas ref={canvasRef} id="threeCanvas" />
//                     <div id="info" style={{
//                         position: 'absolute',
//                         top: '225px',
//                         right: '300px',
//                         color: 'yellow',
//                         fontFamily: 'monospace',
//                         fontSize: '14px',
//                         whiteSpace: 'pre' as const,
//                         textShadow: '1px 1px 1px black',
//                         background: 'rgba(0, 0, 0, 0.2)',
//                         padding: '0.1rem 0.1rem',
//                         borderRadius: '6px',
//                         zIndex: 1000
//                     }}></div>
//                 </div>
//                 {/* 天体轨迹控制 */}
//                 <div id="celestialControls" style={{
//                     position: 'fixed' as const,
//                     right: '8px',
//                     top: '15%',
//                     transform: 'translateY(-50%)',
//                     background: 'rgba(0, 0, 0, 0.7)',
//                     padding: '8px',
//                     borderRadius: '8px',
//                     display: 'flex',
//                     flexDirection: 'column' as const,
//                     gap: '8px',
//                     zIndex: 1000,
//                     border: '1px solid rgba(255, 255, 255, 0.1)'
//                 }}>
//                     <div className="control-title" style={{
//                         color: '#fff',
//                         fontWeight: 'bold',
//                         marginBottom: '5px',
//                         borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
//                         paddingBottom: '5px'
//                     }}></div>
//                     {[
//                         { id: 'sun', name: '太阳', color: '#ffff00' },
//                         { id: 'moon', name: '月亮', color: '#c0c0c0' },
//                         { id: 'mercury', name: '水星', color: '#498bff' },
//                         { id: 'venus', name: '金星', color: '#cec2a8' },
//                         { id: 'mars', name: '火星', color: '#ff5153' },
//                         { id: 'jupiter', name: '木星', color: '#60b633' },
//                         { id: 'saturn', name: '土星', color: '#f4d727' }
//                     ].map((body) => (
//                         <label
//                             key={body.id}
//                             data-celestial={body.id}
//                             style={{
//                                 color: body.color,
//                                 fontFamily: 'Arial, sans-serif',
//                                 fontSize: '12px',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '4px',
//                                 cursor: 'pointer'
//                             }}
//                         >
//                             <input
//                                 type="checkbox"
//                                 className="celestial-checkbox"
//                                 data-celestial={body.id}
//                                 defaultChecked={body.id === 'sun' || body.id === 'moon'}
//                             />
//                             {body.name}
//                         </label>
//                     ))}
//                 </div>
//             </div>
//             <style>{`
//         * {
//           box-sizing: border-box;
//         }
//         canvas {
//           display: block;
//         }
//         .label {
//           color: #ffffff;
//           font-family: sans-serif;
//           padding: 2px;
//           background: rgba(0, 0, 0, 0.6);
//         }
//         .button:hover {
//           background: #5b4aa3;
//         }
//         .footer svg {
//           color: white;
//           font-size: 24px;
//         }
//         .back-btn:hover,
//         .location-btn:hover,
//         .calendar-btn:hover,
//         .moon-btn:hover,
//         .data-btn:hover,
//         .index-btn:hover {
//           opacity: 0.8;
//         }
//         .time-marker {
//           font-size: 12px;
//           background: rgba(0, 0, 0, 0);
//           padding: 2px 5px;
//           border-radius: 3px;
//           transform: translateY(-10px);
//           white-space: nowrap;
//           color: #ffb347;
//           font-weight: bold;
//         }
//         .intersection-label {
//           color: #ff0000;
//           font-size: 14px;
//           font-weight: bold;
//         }
//         .marker-point {
//           border-radius: 50%;
//           width: 6px;
//           height: 6px;
//           background-color: #ffa500;
//         }
//         .intersection-point {
//           border-radius: 50%;
//           width: 8px;
//           height: 8px;
//           background-color: #ff0000;
//         }
//         .moon-time-marker {
//           font-size: 12px;
//           background: rgba(0, 0, 0, 0);
//           padding: 2px 5px;
//           border-radius: 3px;
//           transform: translateY(-10px);
//           white-space: nowrap;
//           color: #20b2aa !important;
//           font-weight: bold;
//         }
//         .moon-intersection-label {
//           color: #044343 !important;
//           font-size: 13px;
//           text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
//         }
//         .nav-button {
//           background: rgba(107, 85, 180, 0.2);
//           border: none;
//           border-radius: 20px;
//           padding: 10px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 80px;
//         }
//         .nav-button:hover {
//           background: rgba(255, 255, 255, 0.9);
//           transform: scale(1.1);
//         }
//         @media (max-width: 768px) {
//           .input-panel, #result {
//             width: calc(40%);
//             font-size: 0.9rem;
//           }
//           .input-panel h2 {
//             font-size: 1.2rem;
//             margin-bottom: 1rem;
//           }
//           .container {
//             grid-template-columns: 1fr;
//           }
//           .input-panel {
//             width: calc(50%);
//             max-height: 60vh;
//           }
//           .visualization-panel {
//             height: 100vh;
//           }
//         }
//       `}</style>
//         </div>
//     );
// };
// export default AstronomyVisualization;
// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
// import BottomNav from "@/components/Footer/BottomNav";
// export default function ZodiacPage() {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const animRef = useRef<number | null>(null);
//     const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//     const labelRendererRef = useRef<CSS2DRenderer | null>(null);
//     const controlsRef = useRef<OrbitControls | null>(null);
//     const [currentDate, setCurrentDate] = useState(new Date());
//     useEffect(() => {
//         if (!containerRef.current) return;
//         const container = containerRef.current;
//         // --- 如果页面已有旧的 canvas / labelRenderer DOM，先移除它们（避免重复附加） ---
//         const EXISTING_CANVAS_ID = "threejs-canvas";
//         const EXISTING_LABELS_ID = "threejs-labels";
//         const removeIfExist = (id: string) => {
//             const el = container.querySelector(`#${id}`);
//             if (el) el.remove();
//         };
//         removeIfExist(EXISTING_CANVAS_ID);
//         removeIfExist(EXISTING_LABELS_ID);
//         // --- Scene, Camera, Renderer ---
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setClearColor(0x000000);
//         // 给 canvas 一个稳定 id（方便清理）
//         renderer.domElement.id = EXISTING_CANVAS_ID;
//         container.appendChild(renderer.domElement);
//         rendererRef.current = renderer;
//         // --- CSS2DRenderer for labels ---
//         const labelRenderer = new CSS2DRenderer();
//         labelRenderer.setSize(window.innerWidth, window.innerHeight);
//         // append renderer + labelRenderer (顺序无关，label 在上)
//         renderer.domElement.id = EXISTING_CANVAS_ID;
//         container.appendChild(renderer.domElement);
//         labelRenderer.domElement.style.position = "absolute";
//         labelRenderer.domElement.style.top = "0";
//         labelRenderer.domElement.style.pointerEvents = "none"; // 让事件穿透到 canvas
//         labelRenderer.domElement.id = EXISTING_LABELS_ID;
//         container.appendChild(labelRenderer.domElement);
//         // bind controls to canvas
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.05;
//         // --- Star field ---
//         const starsGeometry = new THREE.BufferGeometry();
//         const starsCount = 2000;
//         const positions = new Float32Array(starsCount * 3);
//         for (let i = 0; i < starsCount * 3; i++) {
//             positions[i] = (Math.random() - 0.5) * 100;
//         }
//         starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//         const starField = new THREE.Points(
//             starsGeometry,
//             new THREE.PointsMaterial({ size: 0.1, transparent: true })
//         );
//         scene.add(starField);
//         // --- Load Textures ---
//         const textureLoader = new THREE.TextureLoader();
//         const sunTexture = textureLoader.load("/pho/sun1.png");
//         const earthTexture = textureLoader.load("/pho/earth.png");
//         const constellationImages = [
//             "libra.png", "scorpio.png", "sagittarius.png", "capricorn.png",
//             "aquarius.png", "pisces.png", "aries.png", "taurus.png",
//             "gemini.png", "cancer.png", "leo.png", "virgo.png"
//         ];
//         const loadedConstellationTextures = constellationImages.map(img => textureLoader.load(`/pho/${img}`));
//         // --- Solar System Group ---
//         const solarSystem = new THREE.Group();
//         scene.add(solarSystem);
//         // --- Sun ---
//         const sun = new THREE.Mesh(
//             new THREE.SphereGeometry(0.2, 32, 32),
//             new THREE.MeshBasicMaterial({ map: sunTexture, transparent: true })
//         );
//         solarSystem.add(sun);
//         // --- Earth ---
//         const earth = new THREE.Mesh(
//             new THREE.SphereGeometry(0.1, 32, 32),
//             new THREE.MeshBasicMaterial({ map: earthTexture, transparent: true })
//         );
//         solarSystem.add(earth);
//         // --- Earth-Sun line ---
//         const lineMaterial = new THREE.LineDashedMaterial({ dashSize: 0.2, gapSize: 0.1 });
//         const lineGeometry = new THREE.BufferGeometry();
//         const linePositions = new Float32Array(6);
//         lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
//         const earthSunLine = new THREE.Line(lineGeometry, lineMaterial);
//         earthSunLine.computeLineDistances();
//         solarSystem.add(earthSunLine);
//         // --- Orbit ---
//         const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x4169e1, transparent: true, opacity: 0.8 });
//         const orbit = new THREE.Mesh(new THREE.TorusGeometry(1, 0.007, 16, 200), orbitMaterial);
//         solarSystem.add(orbit);
//         // --- Zodiac Labels + Images ---
//         const zodiacNames = ["天秤宫", "天蝎宫", "射手宫", "摩羯宫", "水瓶宫", "双鱼宫", "白羊宫", "金牛宫", "双子宫", "巨蟹宫", "狮子宫", "处女宫"];
//         const zodiacPlanes: THREE.Mesh[] = [];
//         for (let i = 0; i < 12; i++) {
//             const angle = (i * Math.PI * 2) / 12;
//             const radius = 2.2;
//             const tex = loadedConstellationTextures[i];
//             const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
//             const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), mat);
//             plane.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
//             solarSystem.add(plane);
//             zodiacPlanes.push(plane);
//             // --- Text label (CSS2DObject) ---
//             const div = document.createElement("div");
//             div.className = "label";
//             div.textContent = zodiacNames[i];
//             div.style.color = "white";
//             div.style.fontSize = "14px";
//             div.style.fontWeight = "bold";
//             // pointerEvents none (不拦截鼠标)
//             div.style.pointerEvents = "none";
//             const label = new CSS2DObject(div);
//             label.position.set(Math.cos(angle) * (radius + 0.5), Math.sin(angle) * (radius + 0.5), 0);
//             solarSystem.add(label);
//         }
//         // 整体上移
//         solarSystem.position.y = 1.5;
//         // --- Julian Date & position calculations ---
//         const julianDate = (date: Date) => {
//             const year = date.getFullYear();
//             const month = date.getMonth() + 1;
//             const day = date.getDate();
//             const a = Math.floor((14 - month) / 12);
//             const y = year + 4800 - a;
//             const m = month + 12 * a - 3;
//             return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045 + 0.5;
//         };
//         const calculatePositions = (date: Date) => {
//             const JD = julianDate(date);
//             const J2000 = 2451545.0;
//             const n = JD - J2000;
//             const L0 = (280.46646 + 0.98564736 * n) % 360;
//             const M = (357.52911 + 0.98560028 * n) % 360;
//             const M_rad = (M * Math.PI) / 180;
//             const C = (1.914602 - 0.004817 * (n / 36525) - 0.000014 * (n / 36525) ** 2) * Math.sin(M_rad) +
//                 (0.019993 - 0.000101 * (n / 36525)) * Math.sin(2 * M_rad) + 0.000289 * Math.sin(3 * M_rad);
//             const L_E = (L0 + C) % 360;
//             const L_S = (L_E + 180) % 360;
//             return {
//                 earthLongitude: L_E,
//                 sunLongitude: L_S,
//                 earthX: Math.cos(L_E * Math.PI / 180),
//                 earthY: Math.sin(L_E * Math.PI / 180)
//             };
//         };
//         const updateEarthAndLine = (date: Date) => {
//             const pos = calculatePositions(date);
//             earth.position.set(pos.earthX, pos.earthY, 0);
//             const sunDir = new THREE.Vector3(-pos.earthX, -pos.earthY, 0).normalize().multiplyScalar(3);
//             const arr = (earthSunLine.geometry.attributes.position.array as Float32Array);
//             arr[0] = pos.earthX; arr[1] = pos.earthY; arr[2] = 0;
//             arr[3] = sunDir.x; arr[4] = sunDir.y; arr[5] = 0;
//             earthSunLine.geometry.attributes.position.needsUpdate = true;
//             earthSunLine.computeLineDistances();
//             const info = document.getElementById("info");
//             if (info) {
//                 const zodiacIndex = Math.floor(pos.sunLongitude / 30) % 12;
//                 info.textContent = `观测日期: ${date.toLocaleDateString()}\n地球黄经: ${pos.earthLongitude.toFixed(2)}°\n太阳视黄经: ${pos.sunLongitude.toFixed(2)}°\n太阳位于: ${zodiacNames[zodiacIndex]}`;
//             }
//         };
//         // 把 update 方法挂到 window（谨慎用，仅为兼容你原逻辑）
//         // @ts-ignore
//         window.updateEarthAndLine = updateEarthAndLine;
//         camera.position.set(0, 0, 9);
//         camera.lookAt(0, 0, 0);
//         updateEarthAndLine(currentDate);
//         // --- Animation loop ---
//         const animate = () => {
//             animRef.current = requestAnimationFrame(animate);
//             controls.update();
//             zodiacPlanes.forEach(plane => plane.lookAt(camera.position));
//             renderer.render(scene, camera);
//             labelRenderer.render(scene, camera);
//         };
//         animate();
//         // --- Handle resize ---
//         const onResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             labelRenderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener("resize", onResize);
//         // --- Cleanup on unmount ---
//         return () => {
//             window.removeEventListener("resize", onResize);
//             // cancel animation
//             if (animRef.current) {
//                 cancelAnimationFrame(animRef.current);
//                 animRef.current = null;
//             }
//             // dispose controls
//             try {
//                 controls.dispose();
//             } catch (e) { /* ignore */ }
//             // remove global attach
//             // @ts-ignore
//             if (window.updateEarthAndLine) delete window.updateEarthAndLine;
//             // remove appended DOM nodes if still present
//             removeIfExist(EXISTING_CANVAS_ID);
//             removeIfExist(EXISTING_LABELS_ID);
//             // dispose geometries / materials to avoid memory leaks
//             try {
//                 starField.geometry.dispose();
//                 // dispose textures/materials we created
//                 sun.geometry.dispose();
//                 (sun.material as THREE.Material).dispose();
//                 earth.geometry.dispose();
//                 (earth.material as THREE.Material).dispose();
//                 orbit.geometry.dispose();
//                 (orbit.material as THREE.Material).dispose();
//                 lineGeometry.dispose();
//                 (lineMaterial as THREE.Material).dispose();
//                 // dispose loaded constellation textures and materials
//                 loadedConstellationTextures.forEach((t) => { if (t) t.dispose && (t as any).dispose(); });
//             } catch (e) {
//                 // 某些对象可能已被 GC 或不同实现，忽略错误
//             }
//             // ensure renderer disposed
//             try {
//                 renderer.dispose();
//             } catch (e) { /* ignore */ }
//             rendererRef.current = null;
//             labelRendererRef.current = null;
//             controlsRef.current = null;
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []); // 仅在挂载/卸载时运行
//     const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = e.target.value;
//         if (!val) return;
//         const newDate = new Date(val);
//         setCurrentDate(newDate);
//         const updateEvent = new CustomEvent("updateEarth", { detail: newDate });
//         window.dispatchEvent(updateEvent);
//     };
//     useEffect(() => {
//         const listener = (e: any) => {
//             const date: Date = e.detail;
//             // @ts-ignore
//             window.updateEarthAndLine && window.updateEarthAndLine(date);
//         };
//         window.addEventListener("updateEarth", listener);
//         return () => window.removeEventListener("updateEarth", listener);
//     }, []);
//     const formatDateInput = (date: Date) => {
//         const year = date.getFullYear();
//         const month = String(date.getMonth() + 1).padStart(2, "0");
//         const day = String(date.getDate()).padStart(2, "0");
//         const hours = String(date.getHours()).padStart(2, "0");
//         const minutes = String(date.getMinutes()).padStart(2, "0");
//         return `${year}-${month}-${day}T${hours}:${minutes}`;
//     };
//     return (
//         <div className="bg-black text-white min-h-screen flex flex-col">
//             <div className="relative z-10 flex flex-col h-screen">
//                 <div ref={containerRef} style={{ width: "100vw", height: "100vh", position: "relative" }}>
//                     <div id="info" style={{ position: "absolute", top: "10px", left: "10px", color: "yellow", fontFamily: "monospace", fontSize: "14px", whiteSpace: "pre", textShadow: "1px 1px 1px black" }} />
//                     <div style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.6)", padding: "15px", borderRadius: "8px" }}>
//                         <label style={{ color: "white", fontSize: "14px" }} />
//                         <input type="datetime-local" value={formatDateInput(currentDate)} onChange={handleDateChange} style={{ padding: "5px", borderRadius: "10px", border: "1px solid #666", background: "rgba(255,255,255,0.9)" }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ZodiacEmbed = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100vh",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "/js/moon.html",
            title: "qixingguiji",
            style: {
                width: "100%",
                height: "100%",
                border: "none"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/seven-stars/page.tsx",
            lineNumber: 1281,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/seven-stars/page.tsx",
        lineNumber: 1280,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ZodiacEmbed;
const __TURBOPACK__default__export__ = ZodiacEmbed;
var _c;
__turbopack_context__.k.register(_c, "ZodiacEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/components/seven-data/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PlanetCalculator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PlanetCalculator() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        latitude: "30.67",
        longitude: "104.06",
        date: "",
        time: "",
        altitude: "500"
    });
    const [planetsData, setPlanetsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // ✅ 演示数据
    const demoData = {
        "太阳": {
            rise: "05 : 11 : 52",
            transit: "12 : 00 : 21",
            set: "18 : 40 : 12",
            declination: "17.582549"
        },
        "月球": {
            rise: "04 : 05 : 23",
            transit: "11 : 12 : 48",
            set: "17 : 54 : 09",
            declination: "19.482000"
        },
        "水星": {
            rise: "05 : 45 : 13",
            transit: "12 : 09 : 42",
            set: "18 : 33 : 21",
            declination: "8.923451"
        },
        "金星": {
            rise: "06 : 15 : 01",
            transit: "12 : 33 : 12",
            set: "18 : 51 : 22",
            declination: "-2.145325"
        },
        "火星": {
            rise: "02 : 12 : 41",
            transit: "09 : 21 : 09",
            set: "16 : 29 : 37",
            declination: "4.231123"
        },
        "木星": {
            rise: "19 : 22 : 15",
            transit: "01 : 55 : 34",
            set: "08 : 28 : 53",
            declination: "-15.678901"
        },
        "土星": {
            rise: "22 : 11 : 34",
            transit: "04 : 35 : 01",
            set: "10 : 58 : 28",
            declination: "-10.234789"
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlanetCalculator.useEffect": ()=>{
            const now = new Date();
            const dateStr = now.toISOString().split("T")[0];
            const timeStr = now.toTimeString().slice(0, 5);
            setFormData({
                "PlanetCalculator.useEffect": (prev)=>({
                        ...prev,
                        date: dateStr,
                        time: timeStr
                    })
            }["PlanetCalculator.useEffect"]);
            setPlanetsData(demoData);
        }
    }["PlanetCalculator.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        setPlanetsData(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/planets", {
                latitude: parseFloat(formData.latitude),
                longitude: parseFloat(formData.longitude),
                date: formData.date,
                time: formData.time
            });
            if (res.data && res.data.success) {
                const responseData = res.data.data;
                // ✅ 转换为 demoData 格式
                const formattedData = {};
                for (const planet of Object.keys(responseData)){
                    var _p_declination_toFixed, _p_declination;
                    const p = responseData[planet];
                    formattedData[planet] = {
                        rise: p.rise || "-- : -- : --",
                        transit: p.transit || "-- : -- : --",
                        set: p.set || "-- : -- : --",
                        declination: ((_p_declination = p.declination) === null || _p_declination === void 0 ? void 0 : (_p_declination_toFixed = _p_declination.toFixed) === null || _p_declination_toFixed === void 0 ? void 0 : _p_declination_toFixed.call(_p_declination, 6)) || "0.000000"
                    };
                }
                setPlanetsData(formattedData);
            } else {
                var _res_data_error, _res_data;
                throw new Error(((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_error = _res_data.error) === null || _res_data_error === void 0 ? void 0 : _res_data_error.message) || "获取行星数据失败");
            }
        } catch (err) {
            var _err_response_data_error, _err_response_data, _err_response;
            const errorMessage = ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : (_err_response_data_error = _err_response_data.error) === null || _err_response_data_error === void 0 ? void 0 : _err_response_data_error.message) || err.message || "获取行星数据失败，请稍后再试。";
            setError(errorMessage);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-black text-white flex flex-col items-center justify-start pt-4 pb-2 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-40 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "relative z-10 mt-2 w-[92%] max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-0 py-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4/5 space-y-1 px-3",
                            children: [
                                [
                                    "纬度 Latitude",
                                    "latitude"
                                ],
                                [
                                    "经度 Longitude",
                                    "longitude"
                                ],
                                [
                                    "日期 Date",
                                    "date"
                                ],
                                [
                                    "时间 Time(HH:MM)",
                                    "time"
                                ],
                                [
                                    "海拔 Altitude",
                                    "altitude"
                                ]
                            ].map((param)=>{
                                let [label, name] = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs mb-1 opacity-80",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: name === "date" ? "date" : name === "time" ? "time" : "text",
                                            name: name,
                                            value: formData[name] || "",
                                            onChange: handleChange,
                                            className: "w-full bg-white/10 border border-white/20 rounded-full px-2 py-1.5 text-left text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm",
                                            required: name !== "altitude"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, name, true, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/5 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "p-0 bg-transparent border-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/pho/箭头.png",
                                    alt: loading ? "计算中..." : "开始计算",
                                    className: "w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 my-2 w-[92%] max-w-md border-t border-white/20"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 gap-2 text-center mb-2",
                children: [
                    "行星",
                    "升起",
                    "中天",
                    "落下",
                    "赤纬角"
                ].map((title)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[rgb(90,89,122)] text-white text-xs py-1 px-3 rounded-full cursor-default select-none",
                        children: title
                    }, title, false, {
                        fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            planetsData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-0.5 text-xs text-gray-100",
                    children: Object.entries(planetsData).map((param)=>{
                        let [planet, d] = param;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 gap-0.5 text-center py-0.5 rounded hover:bg-white/5 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap",
                                    children: planet
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap",
                                    children: d.rise
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap",
                                    children: d.transit
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap",
                                    children: d.set
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap",
                                    children: [
                                        d.declination,
                                        "°"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, planet, true, {
                            fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                            lineNumber: 157,
                            columnNumber: 29
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                    lineNumber: 155,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                lineNumber: 144,
                columnNumber: 17
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 mt-2 text-red-400 bg-red-900/30 px-3 py-1.5 rounded-lg text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/seven-data/page.tsx",
                lineNumber: 175,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/seven-data/page.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(PlanetCalculator, "M8YRWNOiqjU3XWQcZDCniJ+TaYE=");
_c = PlanetCalculator;
var _c;
__turbopack_context__.k.register(_c, "PlanetCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/components/zodiac/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
// import BottomNav from "@/components/Footer/BottomNav";
// export default function ZodiacPage() {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const animRef = useRef<number | null>(null);
//     const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//     const labelRendererRef = useRef<CSS2DRenderer | null>(null);
//     const controlsRef = useRef<OrbitControls | null>(null);
//     const [currentDate, setCurrentDate] = useState(new Date());
//     useEffect(() => {
//         if (!containerRef.current) return;
//         const container = containerRef.current;
//         // --- 如果页面已有旧的 canvas / labelRenderer DOM，先移除它们（避免重复附加） ---
//         const EXISTING_CANVAS_ID = "threejs-canvas";
//         const EXISTING_LABELS_ID = "threejs-labels";
//         const removeIfExist = (id: string) => {
//             const el = container.querySelector(`#${id}`);
//             if (el) el.remove();
//         };
//         removeIfExist(EXISTING_CANVAS_ID);
//         removeIfExist(EXISTING_LABELS_ID);
//         // --- Scene, Camera, Renderer ---
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setClearColor(0x000000);
//         // 给 canvas 一个稳定 id（方便清理）
//         renderer.domElement.id = EXISTING_CANVAS_ID;
//         container.appendChild(renderer.domElement);
//         rendererRef.current = renderer;
//         // --- CSS2DRenderer for labels ---
//         const labelRenderer = new CSS2DRenderer();
//         labelRenderer.setSize(window.innerWidth, window.innerHeight);
//         // append renderer + labelRenderer (顺序无关，label 在上)
//         renderer.domElement.id = EXISTING_CANVAS_ID;
//         container.appendChild(renderer.domElement);
//         labelRenderer.domElement.style.position = "absolute";
//         labelRenderer.domElement.style.top = "0";
//         labelRenderer.domElement.style.pointerEvents = "none"; // 让事件穿透到 canvas
//         labelRenderer.domElement.id = EXISTING_LABELS_ID;
//         container.appendChild(labelRenderer.domElement);
//         // bind controls to canvas
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.05;
//         // --- Star field ---
//         const starsGeometry = new THREE.BufferGeometry();
//         const starsCount = 2000;
//         const positions = new Float32Array(starsCount * 3);
//         for (let i = 0; i < starsCount * 3; i++) {
//             positions[i] = (Math.random() - 0.5) * 100;
//         }
//         starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//         const starField = new THREE.Points(
//             starsGeometry,
//             new THREE.PointsMaterial({ size: 0.1, transparent: true })
//         );
//         scene.add(starField);
//         // --- Load Textures ---
//         const textureLoader = new THREE.TextureLoader();
//         const sunTexture = textureLoader.load("/pho/sun1.png");
//         const earthTexture = textureLoader.load("/pho/earth.png");
//         const constellationImages = [
//             "libra.png", "scorpio.png", "sagittarius.png", "capricorn.png",
//             "aquarius.png", "pisces.png", "aries.png", "taurus.png",
//             "gemini.png", "cancer.png", "leo.png", "virgo.png"
//         ];
//         const loadedConstellationTextures = constellationImages.map(img => textureLoader.load(`/pho/${img}`));
//         // --- Solar System Group ---
//         const solarSystem = new THREE.Group();
//         scene.add(solarSystem);
//         // --- Sun ---
//         const sun = new THREE.Mesh(
//             new THREE.SphereGeometry(0.2, 32, 32),
//             new THREE.MeshBasicMaterial({ map: sunTexture, transparent: true })
//         );
//         solarSystem.add(sun);
//         // --- Earth ---
//         const earth = new THREE.Mesh(
//             new THREE.SphereGeometry(0.1, 32, 32),
//             new THREE.MeshBasicMaterial({ map: earthTexture, transparent: true })
//         );
//         solarSystem.add(earth);
//         // --- Earth-Sun line ---
//         const lineMaterial = new THREE.LineDashedMaterial({ dashSize: 0.2, gapSize: 0.1 });
//         const lineGeometry = new THREE.BufferGeometry();
//         const linePositions = new Float32Array(6);
//         lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
//         const earthSunLine = new THREE.Line(lineGeometry, lineMaterial);
//         earthSunLine.computeLineDistances();
//         solarSystem.add(earthSunLine);
//         // --- Orbit ---
//         const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x4169e1, transparent: true, opacity: 0.8 });
//         const orbit = new THREE.Mesh(new THREE.TorusGeometry(1, 0.007, 16, 200), orbitMaterial);
//         solarSystem.add(orbit);
//         // --- Zodiac Labels + Images ---
//         const zodiacNames = ["天秤宫", "天蝎宫", "射手宫", "摩羯宫", "水瓶宫", "双鱼宫", "白羊宫", "金牛宫", "双子宫", "巨蟹宫", "狮子宫", "处女宫"];
//         const zodiacPlanes: THREE.Mesh[] = [];
//         for (let i = 0; i < 12; i++) {
//             const angle = (i * Math.PI * 2) / 12;
//             const radius = 2.2;
//             const tex = loadedConstellationTextures[i];
//             const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
//             const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), mat);
//             plane.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
//             solarSystem.add(plane);
//             zodiacPlanes.push(plane);
//             // --- Text label (CSS2DObject) ---
//             const div = document.createElement("div");
//             div.className = "label";
//             div.textContent = zodiacNames[i];
//             div.style.color = "white";
//             div.style.fontSize = "14px";
//             div.style.fontWeight = "bold";
//             // pointerEvents none (不拦截鼠标)
//             div.style.pointerEvents = "none";
//             const label = new CSS2DObject(div);
//             label.position.set(Math.cos(angle) * (radius + 0.5), Math.sin(angle) * (radius + 0.5), 0);
//             solarSystem.add(label);
//         }
//         // 整体上移
//         solarSystem.position.y = 1.5;
//         // --- Julian Date & position calculations ---
//         const julianDate = (date: Date) => {
//             const year = date.getFullYear();
//             const month = date.getMonth() + 1;
//             const day = date.getDate();
//             const a = Math.floor((14 - month) / 12);
//             const y = year + 4800 - a;
//             const m = month + 12 * a - 3;
//             return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045 + 0.5;
//         };
//         const calculatePositions = (date: Date) => {
//             const JD = julianDate(date);
//             const J2000 = 2451545.0;
//             const n = JD - J2000;
//             const L0 = (280.46646 + 0.98564736 * n) % 360;
//             const M = (357.52911 + 0.98560028 * n) % 360;
//             const M_rad = (M * Math.PI) / 180;
//             const C = (1.914602 - 0.004817 * (n / 36525) - 0.000014 * (n / 36525) ** 2) * Math.sin(M_rad) +
//                 (0.019993 - 0.000101 * (n / 36525)) * Math.sin(2 * M_rad) + 0.000289 * Math.sin(3 * M_rad);
//             const L_E = (L0 + C) % 360;
//             const L_S = (L_E + 180) % 360;
//             return {
//                 earthLongitude: L_E,
//                 sunLongitude: L_S,
//                 earthX: Math.cos(L_E * Math.PI / 180),
//                 earthY: Math.sin(L_E * Math.PI / 180)
//             };
//         };
//         const updateEarthAndLine = (date: Date) => {
//             const pos = calculatePositions(date);
//             earth.position.set(pos.earthX, pos.earthY, 0);
//             const sunDir = new THREE.Vector3(-pos.earthX, -pos.earthY, 0).normalize().multiplyScalar(3);
//             const arr = (earthSunLine.geometry.attributes.position.array as Float32Array);
//             arr[0] = pos.earthX; arr[1] = pos.earthY; arr[2] = 0;
//             arr[3] = sunDir.x; arr[4] = sunDir.y; arr[5] = 0;
//             earthSunLine.geometry.attributes.position.needsUpdate = true;
//             earthSunLine.computeLineDistances();
//             const info = document.getElementById("info");
//             if (info) {
//                 const zodiacIndex = Math.floor(pos.sunLongitude / 30) % 12;
//                 info.textContent = `观测日期: ${date.toLocaleDateString()}\n地球黄经: ${pos.earthLongitude.toFixed(2)}°\n太阳视黄经: ${pos.sunLongitude.toFixed(2)}°\n太阳位于: ${zodiacNames[zodiacIndex]}`;
//             }
//         };
//         // 把 update 方法挂到 window（谨慎用，仅为兼容你原逻辑）
//         // @ts-ignore
//         window.updateEarthAndLine = updateEarthAndLine;
//         camera.position.set(0, 0, 9);
//         camera.lookAt(0, 0, 0);
//         updateEarthAndLine(currentDate);
//         // --- Animation loop ---
//         const animate = () => {
//             animRef.current = requestAnimationFrame(animate);
//             controls.update();
//             zodiacPlanes.forEach(plane => plane.lookAt(camera.position));
//             renderer.render(scene, camera);
//             labelRenderer.render(scene, camera);
//         };
//         animate();
//         // --- Handle resize ---
//         const onResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//             labelRenderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener("resize", onResize);
//         // --- Cleanup on unmount ---
//         return () => {
//             window.removeEventListener("resize", onResize);
//             // cancel animation
//             if (animRef.current) {
//                 cancelAnimationFrame(animRef.current);
//                 animRef.current = null;
//             }
//             // dispose controls
//             try {
//                 controls.dispose();
//             } catch (e) { /* ignore */ }
//             // remove global attach
//             // @ts-ignore
//             if (window.updateEarthAndLine) delete window.updateEarthAndLine;
//             // remove appended DOM nodes if still present
//             removeIfExist(EXISTING_CANVAS_ID);
//             removeIfExist(EXISTING_LABELS_ID);
//             // dispose geometries / materials to avoid memory leaks
//             try {
//                 starField.geometry.dispose();
//                 // dispose textures/materials we created
//                 sun.geometry.dispose();
//                 (sun.material as THREE.Material).dispose();
//                 earth.geometry.dispose();
//                 (earth.material as THREE.Material).dispose();
//                 orbit.geometry.dispose();
//                 (orbit.material as THREE.Material).dispose();
//                 lineGeometry.dispose();
//                 (lineMaterial as THREE.Material).dispose();
//                 // dispose loaded constellation textures and materials
//                 loadedConstellationTextures.forEach((t) => { if (t) t.dispose && (t as any).dispose(); });
//             } catch (e) {
//                 // 某些对象可能已被 GC 或不同实现，忽略错误
//             }
//             // ensure renderer disposed
//             try {
//                 renderer.dispose();
//             } catch (e) { /* ignore */ }
//             rendererRef.current = null;
//             labelRendererRef.current = null;
//             controlsRef.current = null;
//         };
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []); // 仅在挂载/卸载时运行
//     const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = e.target.value;
//         if (!val) return;
//         const newDate = new Date(val);
//         setCurrentDate(newDate);
//         const updateEvent = new CustomEvent("updateEarth", { detail: newDate });
//         window.dispatchEvent(updateEvent);
//     };
//     useEffect(() => {
//         const listener = (e: any) => {
//             const date: Date = e.detail;
//             // @ts-ignore
//             window.updateEarthAndLine && window.updateEarthAndLine(date);
//         };
//         window.addEventListener("updateEarth", listener);
//         return () => window.removeEventListener("updateEarth", listener);
//     }, []);
//     const formatDateInput = (date: Date) => {
//         const year = date.getFullYear();
//         const month = String(date.getMonth() + 1).padStart(2, "0");
//         const day = String(date.getDate()).padStart(2, "0");
//         const hours = String(date.getHours()).padStart(2, "0");
//         const minutes = String(date.getMinutes()).padStart(2, "0");
//         return `${year}-${month}-${day}T${hours}:${minutes}`;
//     };
//     return (
//         <div className="bg-black text-white min-h-screen flex flex-col">
//             <div className="relative z-10 flex flex-col h-screen">
//                 <div ref={containerRef} style={{ width: "100vw", height: "100vh", position: "relative" }}>
//                     <div id="info" style={{ position: "absolute", top: "10px", left: "10px", color: "yellow", fontFamily: "monospace", fontSize: "14px", whiteSpace: "pre", textShadow: "1px 1px 1px black" }} />
//                     <div style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.6)", padding: "15px", borderRadius: "8px" }}>
//                         <label style={{ color: "white", fontSize: "14px" }} />
//                         <input type="datetime-local" value={formatDateInput(currentDate)} onChange={handleDateChange} style={{ padding: "5px", borderRadius: "10px", border: "1px solid #666", background: "rgba(255,255,255,0.9)" }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ZodiacEmbed = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100vh",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "/js/十二宫图.html",
            title: "十二宫图",
            style: {
                width: "100%",
                height: "100%",
                border: "none"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/zodiac/page.tsx",
            lineNumber: 326,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/zodiac/page.tsx",
        lineNumber: 325,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ZodiacEmbed;
const __TURBOPACK__default__export__ = ZodiacEmbed;
var _c;
__turbopack_context__.k.register(_c, "ZodiacEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/components/tibetan-cycle/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>TibetanCyclePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TibetanCyclePage() {
    _s();
    const baseYear = 2025;
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(baseYear);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tg: 18,
        dz: 195
    });
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 天干地支计算表
    const tiangan = [
        "铁",
        "铁",
        "水",
        "水",
        "木",
        "木",
        "火",
        "火",
        "土",
        "土"
    ];
    const dizhi = [
        "虎",
        "兔",
        "龙",
        "蛇",
        "马",
        "羊",
        "猴",
        "鸡",
        "狗",
        "猪",
        "鼠",
        "牛"
    ];
    const ganzhiList = [];
    for(let i = 0; i < 60; i++){
        ganzhiList.push(tiangan[(i - 6 + 10) % 10] + dizhi[(i - 2 + 12) % 12]);
    }
    // 年份列表
    const years = Array.from({
        length: 201
    }, (_, i)=>baseYear - 100 + i);
    // 计算干支与旋转角
    const calculate = function() {
        let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : year;
        const offsetYear = (y - 2025) % 60;
        const dzAngle = -offsetYear * 30;
        const tgAngle = -offsetYear * 36;
        setRotation({
            dz: 240 + 360 + dzAngle,
            tg: -54 + 360 + tgAngle
        });
        const index = (y + 56 + 60) % 60;
        setResult("".concat(y, " 年是 【").concat(ganzhiList[index], "】年"));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TibetanCyclePage.useEffect": ()=>{
            calculate(baseYear);
        }
    }["TibetanCyclePage.useEffect"], []);
    // 打开下拉时滚动至当前年份顶部
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TibetanCyclePage.useEffect": ()=>{
            if (isOpen && scrollRef.current) {
                const index = years.indexOf(year);
                const itemHeight = 40;
                const top = index * itemHeight;
                setTimeout({
                    "TibetanCyclePage.useEffect": ()=>{
                        scrollRef.current.scrollTo({
                            top: top > 0 ? top : 0,
                            behavior: "auto"
                        });
                    }
                }["TibetanCyclePage.useEffect"], 30);
            }
        }
    }["TibetanCyclePage.useEffect"], [
        isOpen
    ]);
    // 点击外部关闭
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TibetanCyclePage.useEffect": ()=>{
            const handleClickOutside = {
                "TibetanCyclePage.useEffect.handleClickOutside": (e)=>{
                    if (!e.target.closest(".year-selector")) setIsOpen(false);
                }
            }["TibetanCyclePage.useEffect.handleClickOutside"];
            document.addEventListener("click", handleClickOutside);
            return ({
                "TibetanCyclePage.useEffect": ()=>document.removeEventListener("click", handleClickOutside)
            })["TibetanCyclePage.useEffect"];
        }
    }["TibetanCyclePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen flex flex-col items-center pt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "\n                @keyframes fadeInUp {\n                    from { opacity: 0; transform: translateY(8px); }\n                    to { opacity: 1; transform: translateY(0); }\n                }\n                .animate-fadeInUp { animation: fadeInUp 200ms ease-out; }\n                .no-scrollbar::-webkit-scrollbar { width: 6px; }\n                .no-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 8px; }\n            "
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 year-selector",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen((v)=>!v),
                        className: "relative z-10 px-6 py-3 text-xl font-semibold rounded-xl transition-all ".concat(isOpen ? "opacity-0 pointer-events-none" : "opacity-100"),
                        children: [
                            year,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                className: "inline-block ml-2 text-gray-300 transition-transform duration-300 ".concat(isOpen ? "rotate-180" : ""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 6l4 4 4-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 p-[2px] rounded-2xl bg-white/40 border border-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-fadeInUp z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            className: "w-28 h-[200px] rounded-2xl backdrop-blur-md    bg-white/10 border border-gray-600/60 shadow-inner    text-center overflow-y-auto no-scrollbar",
                            children: years.map((y)=>{
                                const isActive = y === year;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setYear(y);
                                        calculate(y);
                                        setIsOpen(false);
                                    },
                                    className: "block w-full h-[40px] text-lg transition-all duration-200 \n                                            ".concat(isActive ? "text-blue-400 scale-110" : "text-gray-200 scale-105"),
                                    children: y
                                }, y, false, {
                                    fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 37
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                            lineNumber: 109,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-8 w-80 h-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        style: {
                            transform: "rotate(".concat(rotation.dz, "deg)"),
                            transition: "transform 1s ease-out"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/pho/地支.png",
                            alt: "地支盘",
                            className: "w-full h-full select-none pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        style: {
                            transform: "rotate(".concat(rotation.tg, "deg)"),
                            transition: "transform 1s ease-out"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/pho/天干.png",
                            alt: "天干盘",
                            className: "w-full h-full select-none pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                            lineNumber: 160,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/pho/指针.png",
                            alt: "指针",
                            className: "w-full h-full select-none pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 mb-4 text-lg h-[30px] text-center w-full",
                children: result
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/tibetan-cycle/page.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(TibetanCyclePage, "OUWgIYCph1w1V3cqXfgoZMt/9b0=");
_c = TibetanCyclePage;
var _c;
__turbopack_context__.k.register(_c, "TibetanCyclePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/components/widgets/WidgetCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/**
 * WidgetCarousel
 * - 用途：包装滑动手势与页面指示点，切换传入的 items。
 * - 使用：见 README 里的示例。
 */ const WidgetCarousel = (param)=>{
    let { items, currentIndex, onChange, swipeThreshold = 50 } = param;
    _s();
    const touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const touchEndRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const onTouchStart = (e)=>{
        touchEndRef.current = 0;
        touchStartRef.current = e.targetTouches[0].clientX;
    };
    const onTouchMove = (e)=>{
        touchEndRef.current = e.targetTouches[0].clientX;
    };
    const onTouchEnd = ()=>{
        const start = touchStartRef.current;
        const end = touchEndRef.current;
        if (!start || !end) return;
        const distance = start - end;
        if (distance > swipeThreshold) onChange((currentIndex + 1) % items.length);
        if (distance < -swipeThreshold) onChange((currentIndex - 1 + items.length) % items.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full transition-all duration-500 ease-in-out",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl",
                    onTouchStart: onTouchStart,
                    onTouchMove: onTouchMove,
                    onTouchEnd: onTouchEnd,
                    children: items[currentIndex]
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/widgets/WidgetCarousel.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/widgets/WidgetCarousel.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/widgets/WidgetCarousel.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/widgets/WidgetCarousel.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WidgetCarousel, "63vRBQN7iKQ+CTB7eFSSicmjGLE=");
_c = WidgetCarousel;
const __TURBOPACK__default__export__ = WidgetCarousel;
var _c;
__turbopack_context__.k.register(_c, "WidgetCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/components/EarthNav/EarthNav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>EarthNav
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function EarthNav(param) {
    let { currentPage } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // 根据当前路径确定激活状态
    const getActiveTab = ()=>{
        if (pathname.includes("zodiac")) return "十二宫";
        if (pathname.includes("seven-stars")) return "七星轨迹";
        if (pathname.includes("tibetan-cycle")) return "藏历绕迥纪年";
        return currentPage || "十二宫";
    };
    const activeTab = getActiveTab();
    const tabs = [
        {
            name: "十二宫图",
            path: "/earth?tab=zodiac"
        },
        {
            name: "七星轨迹",
            path: "/earth?tab=seven-stars"
        },
        {
            name: "藏历绕迥纪年",
            path: "/earth?tab=tibetan-cycle"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center space-x-10 p-6 whitespace-nowrap",
        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: tab.path,
                className: "px-3 py-1 rounded-md text-sm transition-all duration-300 ".concat(activeTab === tab.name ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-white hover:bg-gray-600"),
                children: tab.name
            }, tab.name, false, {
                fileName: "[project]/frontend/src/components/EarthNav/EarthNav.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/EarthNav/EarthNav.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(EarthNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = EarthNav;
var _c;
__turbopack_context__.k.register(_c, "EarthNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/components/FooterBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FooterBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// 自适应 hook - 修复：初始化时立即获取真实窗口宽度
function useWindowWidth() {
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useWindowWidth.useState": ()=>{
            // 在客户端初始化时立即获取真实窗口宽度
            if ("TURBOPACK compile-time truthy", 1) {
                return window.innerWidth;
            }
            //TURBOPACK unreachable
            ;
        }
    }["useWindowWidth.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowWidth.useEffect": ()=>{
            // 客户端挂载时再次确认宽度（处理初始化时机问题）
            setWidth(window.innerWidth);
            function handleResize() {
                setWidth(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            return ({
                "useWindowWidth.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["useWindowWidth.useEffect"];
        }
    }["useWindowWidth.useEffect"], []);
    return width;
}
_s(useWindowWidth, "oSvW4Uw8dHdJi/Pc28gvzePjT0w=");
function FooterBar() {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const width = useWindowWidth();
    // 按 390px 基准做比例
    const scale = width / 390;
    const iconSize = 18.5 * scale; // 图标大小
    const footerHeight = 51 * scale; // 整个 footer 高度
    const navItems = [
        {
            href: "/cal",
            icon: "/cond/cal.png"
        },
        {
            href: "/earth",
            icon: "/cond/globe.png"
        },
        {
            href: "/chat",
            icon: "/cond/chat.png"
        },
        {
            href: "/docs",
            icon: "/cond/book.png"
        },
        {
            href: "/user",
            icon: "/cond/user.png"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/80 glass-effect border-t border-gray-700",
        style: {
            height: footerHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around items-center max-w-md mx-auto h-full",
            children: navItems.map((item, idx)=>{
                const isActive = pathname === item.href;
                // 中间"聊天"按钮突出显示
                if (idx === 2) {
                    return(// <Link
                    //       href="/chat"
                    //       className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors text-white"
                    //       style={{
                    //           backgroundColor: "#0051feff",  // 始终使用这个背景色
                    //       }}
                    //   >
                    //       <Image src="/cond/chat.png" alt="聊天" width={24} height={24} />
                    //       <span className="text-xs">聊天</span>
                    //   </Link>
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "flex items-center justify-center rounded-full transition-colors shadow-lg \n    bg-[#0051feff]",
                        style: {
                            padding: 10 * scale,
                            transform: "translateY(-".concat(footerHeight * 0.2, "px)")
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.icon,
                            alt: "",
                            width: iconSize * 1.2,
                            height: iconSize * 1.2,
                            style: {
                                width: "".concat(iconSize * 1.2, "px"),
                                height: "".concat(iconSize * 1.2, "px")
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/FooterBar.tsx",
                            lineNumber: 89,
                            columnNumber: 17
                        }, this)
                    }, item.href, false, {
                        fileName: "[project]/frontend/src/components/FooterBar.tsx",
                        lineNumber: 79,
                        columnNumber: 15
                    }, this));
                }
                // 其他项
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: "flex items-center justify-center rounded-lg transition-colors\n                ".concat(isActive ? "bg-gray-700" : "hover:bg-gray-700"),
                    style: {
                        padding: 6 * scale
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: item.icon,
                        alt: "",
                        width: iconSize,
                        height: iconSize,
                        style: {
                            width: "".concat(iconSize, "px"),
                            height: "".concat(iconSize, "px")
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/FooterBar.tsx",
                        lineNumber: 110,
                        columnNumber: 15
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/frontend/src/components/FooterBar.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/FooterBar.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/FooterBar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s1(FooterBar, "hv2+uMBS2ypopnFEGh5bdsNjTl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        useWindowWidth
    ];
});
_c = FooterBar;
var _c;
__turbopack_context__.k.register(_c, "FooterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/services/planeApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Describes the data for a single planet
__turbopack_context__.s({
    "fetchPlanetsData": ()=>fetchPlanetsData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = ("TURBOPACK compile-time value", "http://127.0.0.1:5000/api") || "http://127.0.0.1:5000/api";
async function fetchPlanetsData(params) {
    // 转换为后端期望的格式：date 字符串和 time 字符串
    const body = {
        date: "".concat(params.year, "-").concat(String(params.month).padStart(2, '0'), "-").concat(String(params.day).padStart(2, '0')),
        time: "".concat(String(params.hour).padStart(2, '0'), ":").concat(String(params.minute).padStart(2, '0')),
        longitude: params.longitude,
        latitude: params.latitude
    };
    const res = await fetch("".concat(API_BASE, "/planets"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        throw new Error("HTTP ".concat(res.status));
    }
    const json = await res.json();
    if (!json.success) {
        var _json_error;
        throw new Error(((_json_error = json.error) === null || _json_error === void 0 ? void 0 : _json_error.message) || "请求失败");
    }
    return json.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/frontend/src/app/earth/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>EarthPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$seven$2d$stars$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/seven-stars/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$seven$2d$data$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/seven-data/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$zodiac$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/zodiac/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$tibetan$2d$cycle$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/tibetan-cycle/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$widgets$2f$WidgetCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/widgets/WidgetCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$EarthNav$2f$EarthNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/EarthNav/EarthNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/FooterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$planeApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/planeApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function EarthPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const tabParam = searchParams.get("tab");
    // 根据URL参数设置初始页面
    const getInitialPage = ()=>{
        if (tabParam === "seven-stars") return 1;
        if (tabParam === "tibetan-cycle") return 2;
        return 0; // 默认显示zodiac
    };
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialPage());
    const [showSevenData, setShowSevenData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [planetsData, setPlanetsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 当URL参数变化时更新当前页面
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EarthPage.useEffect": ()=>{
            setCurrentPage(getInitialPage());
        }
    }["EarthPage.useEffect"], [
        tabParam
    ]);
    // Fetch planets data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EarthPage.useEffect": ()=>{
            const fetchData = {
                "EarthPage.useEffect.fetchData": async ()=>{
                    try {
                        const now = new Date();
                        const params = {
                            year: now.getFullYear(),
                            month: now.getMonth() + 1,
                            day: now.getDate(),
                            hour: now.getHours(),
                            minute: now.getMinutes(),
                            longitude: 121.47,
                            latitude: 31.23
                        };
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$planeApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPlanetsData"])(params);
                        setPlanetsData(data || null);
                        console.log("Planets data:", data);
                    } catch (error) {
                        console.error("Error fetching planets data:", error);
                    }
                }
            }["EarthPage.useEffect.fetchData"];
            fetchData();
        }
    }["EarthPage.useEffect"], []);
    // 切换七星轨迹 ↔ 七星数据
    const handleToggleSeven = ()=>{
        setShowSevenData((prev)=>!prev);
    };
    // 切换页卡时修改 URL
    const handleChangePage = (index)=>{
        setCurrentPage(index);
        if (index === 0) router.push("/earth?tab=zodiac");
        if (index === 1) router.push("/earth?tab=seven-stars");
        if (index === 2) router.push("/earth?tab=tibetan-cycle");
    };
    // 显示的页面内容
    const items = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$zodiac$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, "zodiac", false, {
            fileName: "[project]/frontend/src/app/earth/page.tsx",
            lineNumber: 74,
            columnNumber: 5
        }, this),
        showSevenData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$seven$2d$data$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, "seven-data", false, {
            fileName: "[project]/frontend/src/app/earth/page.tsx",
            lineNumber: 75,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$seven$2d$stars$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, "seven-stars", false, {
            fileName: "[project]/frontend/src/app/earth/page.tsx",
            lineNumber: 75,
            columnNumber: 54
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$tibetan$2d$cycle$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, "tibetan-cycle", false, {
            fileName: "[project]/frontend/src/app/earth/page.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, this)
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/earth/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$EarthNav$2f$EarthNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                currentPage: tabParam === "seven-stars" ? "七星轨迹" : tabParam === "tibetan-cycle" ? "藏历绕迥纪年" : "十二宫图"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/earth/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/earth/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center justify-center p-2 sm:p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$widgets$2f$WidgetCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: items,
                                currentIndex: currentPage,
                                onChange: handleChangePage
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/earth/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/earth/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        currentPage === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleToggleSeven,
                            className: "fixed bottom-24 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition duration-300 hover:scale-105",
                            children: showSevenData ? "*v*" : "*_*"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/earth/page.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/earth/page.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/earth/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/frontend/src/app/earth/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/earth/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/earth/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(EarthPage, "DOQcjDRXKRrIfiEtb88TGux+Cyc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EarthPage;
var _c;
__turbopack_context__.k.register(_c, "EarthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=frontend_src_afe3e322._.js.map