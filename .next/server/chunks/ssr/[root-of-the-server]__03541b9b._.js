module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/FooterBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>FooterBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// 自适应 hook
function useWindowWidth() {
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(390); // 初始=设计稿宽
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return width;
}
function FooterBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/80 glass-effect border-t border-gray-700",
        style: {
            height: footerHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around items-center max-w-md mx-auto h-full",
            children: navItems.map((item, idx)=>{
                const isActive = pathname === item.href;
                // 中间"聊天"按钮突出显示
                if (idx === 2) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `flex items-center justify-center rounded-full transition-colors shadow-lg 
                  ${isActive ? "bg-blue-500" : "bg-blue-400/80"}`,
                        style: {
                            padding: 10 * scale,
                            transform: `translateY(-${footerHeight * 0.2}px)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: item.icon,
                            alt: "",
                            width: iconSize * 1.2,
                            height: iconSize * 1.2,
                            style: {
                                width: `${iconSize * 1.2}px`,
                                height: `${iconSize * 1.2}px`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/FooterBar.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this)
                    }, item.href, false, {
                        fileName: "[project]/src/components/FooterBar.tsx",
                        lineNumber: 61,
                        columnNumber: 15
                    }, this);
                }
                // 其他项
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `flex items-center justify-center rounded-lg transition-colors
                ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`,
                    style: {
                        padding: 6 * scale
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: item.icon,
                        alt: "",
                        width: iconSize,
                        height: iconSize,
                        style: {
                            width: `${iconSize}px`,
                            height: `${iconSize}px`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/FooterBar.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/src/components/FooterBar.tsx",
                    lineNumber: 84,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/FooterBar.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FooterBar.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/earth/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>EarthPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FooterBar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// 通过 CDN 动态加载脚本
function loadScript(src) {
    return new Promise((resolve, reject)=>{
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = ()=>resolve();
        s.onerror = ()=>reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
    });
}
function ZodiacScene() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const labelContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const infoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cleanup;
        const init = async ()=>{
            // 加载 THREE 及拓展
            await loadScript("https://unpkg.com/three@0.132.2/build/three.min.js");
            await loadScript("https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js");
            await loadScript("https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/renderers/CSS2DRenderer.js");
            // @ts-ignore
            const THREE = window.THREE;
            if (!THREE || !containerRef.current || !labelContainerRef.current) return;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.setClearColor(0x000000, 1);
            containerRef.current.appendChild(renderer.domElement);
            // @ts-ignore
            const labelRenderer = new THREE.CSS2DRenderer();
            labelRenderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            labelRenderer.domElement.style.position = "absolute";
            labelRenderer.domElement.style.top = "0";
            labelContainerRef.current.appendChild(labelRenderer.domElement);
            // 星空
            const starsGeometry = new THREE.BufferGeometry();
            const starsCount = 1200;
            const positions = new Float32Array(starsCount * 3);
            for(let i = 0; i < starsCount * 3; i += 3){
                positions[i] = (Math.random() - 0.5) * 100;
                positions[i + 1] = (Math.random() - 0.5) * 100;
                positions[i + 2] = (Math.random() - 0.5) * 100;
            }
            starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            const starsMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.08,
                transparent: true,
                opacity: 0.9,
                sizeAttenuation: true
            });
            const starField = new THREE.Points(starsGeometry, starsMaterial);
            scene.add(starField);
            // 控制器
            // @ts-ignore
            const controls = new THREE.OrbitControls(camera, labelRenderer.domElement);
            controls.enableDamping = true;
            // 太阳
            const sunGeometry = new THREE.SphereGeometry(0.2, 32, 32);
            const sunMaterial = new THREE.MeshBasicMaterial({
                color: 0xffc107
            });
            const sun = new THREE.Mesh(sunGeometry, sunMaterial);
            sun.position.set(0, 0, 0);
            scene.add(sun);
            // 地球
            const earthGeometry = new THREE.SphereGeometry(0.1, 32, 32);
            const earthMaterial = new THREE.MeshBasicMaterial({
                color: 0x3aa7ff
            });
            const earth = new THREE.Mesh(earthGeometry, earthMaterial);
            scene.add(earth);
            // 地球到太阳的虚线
            const lineMaterial = new THREE.LineDashedMaterial({
                color: 0xffffff,
                dashSize: 0.2,
                gapSize: 0.1
            });
            const lineGeometry = new THREE.BufferGeometry();
            const linePositions = new Float32Array(6);
            lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
            const earthSunLine = new THREE.Line(lineGeometry, lineMaterial);
            earthSunLine.computeLineDistances();
            scene.add(earthSunLine);
            // 轨道与黄道
            const orbit = new THREE.Mesh(new THREE.TorusGeometry(1, 0.007, 16, 200), new THREE.MeshBasicMaterial({
                color: 0x4169e1,
                transparent: true,
                opacity: 0.8
            }));
            scene.add(orbit);
            const orbitGlow = new THREE.Mesh(new THREE.TorusGeometry(1, 0.02, 16, 200), new THREE.MeshBasicMaterial({
                color: 0x4169e1,
                transparent: true,
                opacity: 0.2
            }));
            scene.add(orbitGlow);
            const ecliptic = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.007, 16, 200), new THREE.MeshBasicMaterial({
                color: 0xffd700,
                transparent: true,
                opacity: 0.8
            }));
            scene.add(ecliptic);
            const eclipticGlow = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.02, 16, 200), new THREE.MeshBasicMaterial({
                color: 0xffd700,
                transparent: true,
                opacity: 0.2
            }));
            scene.add(eclipticGlow);
            // 黄道十二宫中文
            const zodiacNames = [
                "天秤宫",
                "天蝎宫",
                "射手宫",
                "摩羯宫",
                "水瓶宫",
                "双鱼宫",
                "白羊宫",
                "金牛宫",
                "双子宫",
                "巨蟹宫",
                "狮子宫",
                "处女宫"
            ];
            for(let i = 0; i < 12; i++){
                const angle = i * Math.PI / 6;
                const x = 1.5 * Math.cos(angle);
                const y = 1.5 * Math.sin(angle);
                const div = document.createElement("div");
                div.className = "label";
                div.textContent = zodiacNames[i];
                // @ts-ignore
                const label = new THREE.CSS2DObject(div);
                label.position.set(x * 1.1, y * 1.1, 0);
                scene.add(label);
            }
            // 二分二至点
            const seasonPoints = [
                {
                    name: "春分",
                    angle: 0,
                    color: 0x00ff00,
                    glowColor: 0x66ff66
                },
                {
                    name: "夏至",
                    angle: Math.PI / 2,
                    color: 0xff6666,
                    glowColor: 0xff9999
                },
                {
                    name: "秋分",
                    angle: Math.PI,
                    color: 0xffcc00,
                    glowColor: 0xffeb99
                },
                {
                    name: "冬至",
                    angle: 3 * Math.PI / 2,
                    color: 0x99ccff,
                    glowColor: 0xccebff
                }
            ];
            seasonPoints.forEach((p)=>{
                const core = new THREE.Mesh(new THREE.SphereGeometry(0.06, 32, 32), new THREE.MeshBasicMaterial({
                    color: p.color,
                    transparent: true,
                    opacity: 1
                }));
                core.position.set(Math.cos(p.angle), Math.sin(p.angle), 0);
                scene.add(core);
                const inner = new THREE.Mesh(new THREE.SphereGeometry(0.08, 32, 32), new THREE.MeshBasicMaterial({
                    color: p.glowColor,
                    transparent: true,
                    opacity: 0.6
                }));
                inner.position.copy(core.position);
                scene.add(inner);
                const middle = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), new THREE.MeshBasicMaterial({
                    color: p.glowColor,
                    transparent: true,
                    opacity: 0.3
                }));
                middle.position.copy(core.position);
                scene.add(middle);
                const outer = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 32), new THREE.MeshBasicMaterial({
                    color: p.glowColor,
                    transparent: true,
                    opacity: 0.1
                }));
                outer.position.copy(core.position);
                scene.add(outer);
                const div = document.createElement("div");
                div.className = "label";
                div.textContent = p.name;
                // @ts-ignore
                const label = new THREE.CSS2DObject(div);
                label.position.set(Math.cos(p.angle) * 1.2, Math.sin(p.angle) * 1.2, 0);
                scene.add(label);
            });
            // 相机
            camera.position.set(0, 0, 5);
            camera.lookAt(0, 0, 0);
            // 日期计算
            const julianDate = (date)=>{
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const a = Math.floor((14 - month) / 12);
                const y = year + 4800 - a;
                const m = month + 12 * a - 3;
                return day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045 + 0.5;
            };
            const calculatePositions = (date)=>{
                const JD = julianDate(date);
                const J2000 = 2451545.0;
                const n = JD - J2000;
                const L0 = (280.46646 + 0.98564736 * n) % 360;
                const M = (357.52911 + 0.98560028 * n) % 360;
                const Mr = M * Math.PI / 180;
                const C = (1.914602 - 0.004817 * (n / 36525) - 0.000014 * Math.pow(n / 36525, 2)) * Math.sin(Mr) + (0.019993 - 0.000101 * (n / 36525)) * Math.sin(2 * Mr) + 0.000289 * Math.sin(3 * Mr);
                const LE = (L0 + C) % 360;
                const LS = (LE + 180) % 360;
                return {
                    earthLongitude: LE,
                    sunLongitude: LS,
                    earthX: Math.cos(LE * Math.PI / 180),
                    earthY: Math.sin(LE * Math.PI / 180)
                };
            };
            // 日期 UI 初始化
            const setToday = ()=>{
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, "0");
                const day = String(now.getDate()).padStart(2, "0");
                const hours = String(now.getHours()).padStart(2, "0");
                const minutes = String(now.getMinutes()).padStart(2, "0");
                if (inputRef.current) inputRef.current.value = `${year}-${month}-${day}T${hours}:${minutes}`;
            };
            let currentDate = new Date();
            setToday();
            const updatePositions = ()=>{
                const pos = calculatePositions(currentDate);
                earth.position.set(pos.earthX, pos.earthY, 0);
                const sunDir = new THREE.Vector3(-pos.earthX, -pos.earthY, 0).normalize();
                const extended = sunDir.multiplyScalar(3);
                const arr = earthSunLine.geometry.attributes.position.array;
                arr[0] = pos.earthX;
                arr[1] = pos.earthY;
                arr[2] = 0;
                arr[3] = extended.x;
                arr[4] = extended.y;
                arr[5] = 0;
                earthSunLine.geometry.attributes.position.needsUpdate = true;
                earthSunLine.computeLineDistances();
                const zodiacIndex = Math.floor(pos.sunLongitude / 30);
                const currentZodiac = [
                    "天秤宫",
                    "天蝎宫",
                    "射手宫",
                    "摩羯宫",
                    "水瓶宫",
                    "双鱼宫",
                    "白羊宫",
                    "金牛宫",
                    "双子宫",
                    "巨蟹宫",
                    "狮子宫",
                    "处女宫"
                ][zodiacIndex];
                if (infoRef.current) {
                    infoRef.current.textContent = `观测日期: ${currentDate.toLocaleDateString()}\n地球的黄经: ${pos.earthLongitude.toFixed(2)}°\n太阳的视黄经: ${pos.sunLongitude.toFixed(2)}°\n太阳位于: ${currentZodiac}`;
                }
            };
            inputRef.current?.addEventListener("change", ()=>{
                if (inputRef.current?.value) currentDate = new Date(inputRef.current.value);
                updatePositions();
            });
            const onResize = ()=>{
                if (!containerRef.current) return;
                camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
                labelRenderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            };
            window.addEventListener("resize", onResize);
            camera.position.set(0, 0, 5);
            camera.lookAt(0, 0, 0);
            updatePositions();
            let raf = 0;
            const animate = ()=>{
                raf = requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
                labelRenderer.render(scene, camera);
            };
            animate();
            cleanup = ()=>{
                cancelAnimationFrame(raf);
                window.removeEventListener("resize", onResize);
                try {
                    containerRef.current?.removeChild(renderer.domElement);
                    labelContainerRef.current?.removeChild(labelRenderer.domElement);
                } catch  {}
            };
        };
        init();
        return ()=>{
            cleanup && cleanup();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-60ab5743d4013604" + " " + "flex-1 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: infoRef,
                id: "info",
                className: "jsx-60ab5743d4013604" + " " + "absolute left-2 top-2 text-yellow-300 text-xs font-mono whitespace-pre z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-60ab5743d4013604" + " " + "absolute right-2 top-2 bg-black/60 p-3 rounded-lg z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "jsx-60ab5743d4013604" + " " + "block text-white text-xs mb-1",
                        children: "选择日期："
                    }, void 0, false, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "datetime-local",
                        className: "jsx-60ab5743d4013604" + " " + "px-2 py-1 rounded-md bg-white/90 text-black text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: labelContainerRef,
                className: "jsx-60ab5743d4013604" + " " + "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "jsx-60ab5743d4013604" + " " + "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "60ab5743d4013604",
                children: ".label.jsx-60ab5743d4013604{color:#fff;background:#0009;border-radius:4px;padding:2px 4px;font-family:sans-serif}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/earth/page.tsx",
        lineNumber: 423,
        columnNumber: 5
    }, this);
}
function SevenStarsScene() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const infoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hemisphere, setHemisphere] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("north");
    const [latitude, setLatitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(35);
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2024);
    const [month, setMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6);
    const [day, setDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(21);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cleanup;
        const init = async ()=>{
            await loadScript("https://unpkg.com/three@0.132.2/build/three.min.js");
            await loadScript("https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js");
            // @ts-ignore
            const THREE = window.THREE;
            if (!THREE || !containerRef.current || !overlayRef.current) return;
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);
            const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            containerRef.current.appendChild(renderer.domElement);
            // @ts-ignore
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            camera.position.set(4, 4, 4);
            controls.update();
            const radius = 2;
            const segments = 30;
            const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, segments), new THREE.MeshBasicMaterial({
                color: 0xffffff,
                wireframe: true,
                opacity: 0.1,
                transparent: true
            }));
            scene.add(sphere);
            const equatorialPlane = new THREE.Mesh(new THREE.CircleGeometry(radius, segments), new THREE.MeshBasicMaterial({
                color: 0x4169e1,
                transparent: true,
                opacity: 0.2,
                side: THREE.DoubleSide
            }));
            equatorialPlane.rotation.x = Math.PI / 2;
            scene.add(equatorialPlane);
            const equatorLine = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.003, 16, 100), new THREE.MeshBasicMaterial({
                color: 0xffffff
            }));
            equatorLine.rotation.x = Math.PI / 2;
            scene.add(equatorLine);
            scene.add(new THREE.AxesHelper(radius * 1.2));
            // 方位点与标签
            const orientation = [
                "东",
                "东北",
                "北",
                "西北",
                "西",
                "西南",
                "南",
                "东南"
            ];
            const orientPts = [];
            orientation.forEach((name, i)=>{
                const angle = i * Math.PI * 2 / 8;
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);
                const y = 0;
                const point = new THREE.Mesh(new THREE.SphereGeometry(0.02), new THREE.MeshBasicMaterial({
                    color: 0x00ffff
                }));
                point.position.set(x, y, z);
                scene.add(point);
                const label = document.createElement("div");
                label.className = "label";
                label.textContent = name;
                label.style.position = "absolute";
                label.style.color = "white";
                label.style.padding = "2px";
                label.style.backgroundColor = "rgba(0,0,0,0.5)";
                overlayRef.current.appendChild(label);
                orientPts.push({
                    point,
                    label
                });
            });
            let objectsToRemove = [];
            let northPoleLabel = null;
            let southPoleLabel = null;
            const rebuild = ()=>{
                objectsToRemove.forEach((obj)=>{
                    try {
                        scene.remove(obj);
                        obj.geometry?.dispose?.();
                        obj.material?.dispose?.();
                    } catch  {}
                });
                objectsToRemove = [];
                // 清除之前的极点标签
                if (northPoleLabel) {
                    northPoleLabel.remove();
                    northPoleLabel = null;
                }
                if (southPoleLabel) {
                    southPoleLabel.remove();
                    southPoleLabel = null;
                }
                const lat = Math.abs(latitude) * (hemisphere === "north" ? 1 : -1);
                const delta = 23.45 * Math.sin(2 * Math.PI * (284 + (month - 1) * 30 + day) / 365) * Math.PI / 180;
                const latitudeRad = lat * Math.PI / 180;
                // 计算北天极点位置
                const northPole = new THREE.Vector3(0, Math.sin(latitudeRad) * radius * 1.2, Math.cos(latitudeRad) * radius * 1.2);
                const southPole = northPole.clone().multiplyScalar(-1);
                const poleGeom = new THREE.SphereGeometry(0.03);
                const poleMat = new THREE.MeshBasicMaterial({
                    color: 0xffffff
                });
                const northPoleMark = new THREE.Mesh(poleGeom, poleMat);
                northPoleMark.position.copy(northPole);
                scene.add(northPoleMark);
                const southPoleMark = new THREE.Mesh(poleGeom, poleMat);
                southPoleMark.position.copy(southPole);
                scene.add(southPoleMark);
                // 天轴
                const axis = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
                    northPole,
                    southPole
                ]), new THREE.LineDashedMaterial({
                    color: 0xff0000,
                    dashSize: 0.1,
                    gapSize: 0.05
                }));
                axis.computeLineDistances();
                scene.add(axis);
                objectsToRemove.push(northPoleMark, southPoleMark, axis);
                // 创建极点标签
                northPoleLabel = document.createElement("div");
                northPoleLabel.className = "label";
                northPoleLabel.style.position = "absolute";
                northPoleLabel.style.color = "white";
                northPoleLabel.style.padding = "2px";
                northPoleLabel.style.backgroundColor = "rgba(0,0,0,0.5)";
                northPoleLabel.textContent = "北天极";
                overlayRef.current.appendChild(northPoleLabel);
                southPoleLabel = document.createElement("div");
                southPoleLabel.className = "label";
                southPoleLabel.style.position = "absolute";
                southPoleLabel.style.color = "white";
                southPoleLabel.style.padding = "2px";
                southPoleLabel.style.backgroundColor = "rgba(0,0,0,0.5)";
                southPoleLabel.textContent = "南天极";
                overlayRef.current.appendChild(southPoleLabel);
                // 太阳轨迹（依赤纬）
                const points = [];
                const timePoints = 100;
                for(let i = 0; i < timePoints; i++){
                    const t = i / (timePoints - 1) * Math.PI * 2;
                    const d = radius * Math.sin(delta);
                    const circleR = Math.sqrt(radius * radius - d * d);
                    const x = circleR * Math.cos(t);
                    const y = circleR * Math.sin(t);
                    const z = d;
                    const zAxis = new THREE.Vector3(0, 0, 1);
                    const northPoleDir = new THREE.Vector3(0, Math.sin(latitudeRad), Math.cos(latitudeRad)).normalize();
                    const rotationAxis = new THREE.Vector3().crossVectors(zAxis, northPoleDir).normalize();
                    const rotationAngle = Math.acos(zAxis.dot(northPoleDir));
                    const rotationMatrix = new THREE.Matrix4().makeRotationAxis(rotationAxis, rotationAngle);
                    const p = new THREE.Vector3(x, y, z).applyMatrix4(rotationMatrix);
                    points.push(p);
                }
                const curve = new THREE.CatmullRomCurve3(points);
                const sunPath = new THREE.Mesh(new THREE.TubeGeometry(curve, 50, 0.01, 20, false), new THREE.MeshBasicMaterial({
                    color: 0xffff00
                }));
                scene.add(sunPath);
                objectsToRemove.push(sunPath);
                // 计算日长、日出日落
                const tanDelta = Math.tan(delta);
                const tanLat = Math.tan(latitudeRad);
                const product = -tanDelta * tanLat;
                let Ts = 0;
                let sunrise = "--:--";
                let sunset = "--:--";
                let isExtreme = false;
                if (product > 1) {
                    Ts = 0;
                    isExtreme = true;
                } else if (product < -1) {
                    Ts = 24;
                    isExtreme = true;
                } else {
                    Ts = 2 / 15 * Math.acos(product) * (180 / Math.PI);
                    const Tc = 12;
                    const r1 = Tc - Ts / 2;
                    const r2 = Tc + Ts / 2;
                    sunrise = `${Math.floor(r1)}:${String(Math.floor(r1 % 1 * 60)).padStart(2, "0")}`;
                    sunset = `${Math.floor(r2)}:${String(Math.floor(r2 % 1 * 60)).padStart(2, "0")}`;
                }
                if (infoRef.current) {
                    infoRef.current.innerHTML = `太阳周日视运动可视化<br/>观测位置：${hemisphere === "north" ? "北纬" : "南纬"} ${Math.abs(lat)}°<br/>观测日期：${year}年${month}月${day}日<br/>赤纬角：${(delta * 180 / Math.PI).toFixed(2)}°<br/>日照时长：${isExtreme ? Ts === 24 ? "24小时0分钟" : "0小时0分钟" : `${Math.floor(Ts)}小时${Math.floor(Ts % 1 * 60)}分钟`}<br/>日出时间：${isExtreme ? Ts === 24 ? "极昼" : "极夜" : sunrise}<br/>日落时间：${isExtreme ? Ts === 24 ? "极昼" : "极夜" : sunset}`;
                }
            };
            const onResize = ()=>{
                if (!containerRef.current) return;
                camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            };
            window.addEventListener("resize", onResize);
            let raf = 0;
            const animate = ()=>{
                raf = requestAnimationFrame(animate);
                controls.update();
                // 更新方位标签位置
                orientPts.forEach(({ point, label })=>{
                    const vector = point.position.clone().project(camera);
                    const x2d = (vector.x * 0.5 + 0.5) * (containerRef.current?.clientWidth || 0);
                    const y2d = (-vector.y * 0.5 + 0.5) * (containerRef.current?.clientHeight || 0);
                    label.style.left = `${x2d}px`;
                    label.style.top = `${y2d}px`;
                });
                // 更新极点标签位置
                if (northPoleLabel && southPoleLabel) {
                    const northPole = objectsToRemove.find((obj)=>obj.position && obj.position.y > 0);
                    const southPole = objectsToRemove.find((obj)=>obj.position && obj.position.y < 0);
                    if (northPole) {
                        const vector = northPole.position.clone().project(camera);
                        const x2d = (vector.x * 0.5 + 0.5) * (containerRef.current?.clientWidth || 0);
                        const y2d = (-vector.y * 0.5 + 0.5) * (containerRef.current?.clientHeight || 0);
                        northPoleLabel.style.left = `${x2d}px`;
                        northPoleLabel.style.top = `${y2d}px`;
                    }
                    if (southPole) {
                        const vector = southPole.position.clone().project(camera);
                        const x2d = (vector.x * 0.5 + 0.5) * (containerRef.current?.clientWidth || 0);
                        const y2d = (-vector.y * 0.5 + 0.5) * (containerRef.current?.clientHeight || 0);
                        southPoleLabel.style.left = `${x2d}px`;
                        southPoleLabel.style.top = `${y2d}px`;
                    }
                }
                renderer.render(scene, camera);
            };
            rebuild();
            animate();
            cleanup = ()=>{
                cancelAnimationFrame(raf);
                window.removeEventListener("resize", onResize);
                try {
                    containerRef.current?.removeChild(renderer.domElement);
                } catch  {}
                overlayRef.current?.querySelectorAll(".label").forEach((n)=>n.remove());
            };
        };
        init();
        return ()=>{
            cleanup && cleanup();
        };
    }, [
        hemisphere,
        latitude,
        year,
        month,
        day
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-ec0d61eff66e4518" + " " + "flex-1 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ec0d61eff66e4518" + " " + "absolute left-2 top-2 bg-black/60 text-white p-3 rounded z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ec0d61eff66e4518" + " " + "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "jsx-ec0d61eff66e4518" + " " + "mr-2 text-xs",
                                children: "半球"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 814,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: hemisphere,
                                onChange: (e)=>setHemisphere(e.target.value),
                                className: "jsx-ec0d61eff66e4518" + " " + "bg-black/40 border border-white/20 rounded px-2 py-1 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "north",
                                        className: "jsx-ec0d61eff66e4518",
                                        children: "北半球"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/earth/page.tsx",
                                        lineNumber: 820,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "south",
                                        className: "jsx-ec0d61eff66e4518",
                                        children: "南半球"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/earth/page.tsx",
                                        lineNumber: 821,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 815,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 813,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ec0d61eff66e4518" + " " + "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "jsx-ec0d61eff66e4518" + " " + "mr-2 text-xs",
                                children: "纬度"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 825,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 0,
                                max: 90,
                                step: 0.1,
                                value: latitude,
                                onChange: (e)=>setLatitude(Number(e.target.value)),
                                className: "jsx-ec0d61eff66e4518" + " " + "w-16 bg-black/40 border border-white/20 rounded px-2 py-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 826,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 824,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ec0d61eff66e4518" + " " + "flex space-x-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: year,
                                onChange: (e)=>setYear(Number(e.target.value)),
                                className: "jsx-ec0d61eff66e4518" + " " + "w-16 bg-black/40 border border-white/20 rounded px-2 py-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 837,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                max: 12,
                                value: month,
                                onChange: (e)=>setMonth(Number(e.target.value)),
                                className: "jsx-ec0d61eff66e4518" + " " + "w-12 bg-black/40 border border-white/20 rounded px-2 py-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 843,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                max: 31,
                                value: day,
                                onChange: (e)=>setDay(Number(e.target.value)),
                                className: "jsx-ec0d61eff66e4518" + " " + "w-12 bg-black/40 border border-white/20 rounded px-2 py-1 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 851,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            // Trigger rebuild by updating state
                            setLatitude(latitude);
                        },
                        className: "jsx-ec0d61eff66e4518" + " " + "mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors",
                        children: "更新"
                    }, void 0, false, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 860,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: infoRef,
                id: "info",
                className: "jsx-ec0d61eff66e4518" + " " + "absolute right-2 top-20 bg-black/50 text-white p-3 rounded text-xs z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: "jsx-ec0d61eff66e4518" + " " + "absolute inset-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 877,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "jsx-ec0d61eff66e4518" + " " + "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 879,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ec0d61eff66e4518",
                children: ".label.jsx-ec0d61eff66e4518{color:#fff;background:#00000080;border-radius:4px;padding:2px 4px;font-size:12px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/earth/page.tsx",
        lineNumber: 810,
        columnNumber: 5
    }, this);
}
function TibetanCyclicYear() {
    const [year, setYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2025);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        tg: 0,
        dz: 0
    }); // 旋转角度
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
    const calculate = ()=>{
        if (!Number.isFinite(year)) return;
        const index = (year + 56 + 60) % 60;
        const tgIndex = index % 10;
        const dzIndex = index % 12;
        const tgAngle = tgIndex * 36 - 54; // 360/10
        const dzAngle = dzIndex * 30 + 15; // 360/12
        // 多转几圈再停
        setRotation({
            tg: rotation.tg + 360 * 3 + -tgAngle,
            dz: rotation.dz + 360 * 3 + -dzAngle
        });
        setResult(`${year} 年是 【${ganzhiList[index]}】年`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        calculate(); // 初始化
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[800px] flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "藏历“绕迥”纪年"
                }, void 0, false, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 945,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        width: 400,
                        height: 400
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                top: "25%",
                                left: 0,
                                width: 400,
                                height: 400,
                                padding: 30,
                                transformOrigin: "center center",
                                transform: `rotate(${rotation.dz}deg)`,
                                transition: "transform 3s ease-out"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/pho/dizhi.png",
                                alt: "地支盘",
                                className: "w-full h-full select-none pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 962,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/earth/page.tsx",
                            lineNumber: 949,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                top: "25%",
                                left: 0,
                                width: 400,
                                height: 400,
                                padding: 30,
                                transformOrigin: "center center",
                                transform: `rotate(${rotation.tg}deg)`,
                                transition: "transform 3s ease-out"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/pho/tiangan.png",
                                alt: "天干盘",
                                className: "w-full h-full select-none pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 983,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/earth/page.tsx",
                            lineNumber: 970,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute",
                            style: {
                                top: "25%",
                                left: 0,
                                width: 400,
                                height: 400,
                                padding: 30,
                                transformOrigin: "center center"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/pho/needle.png",
                                alt: "指针",
                                className: "w-full h-full select-none pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1002,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/earth/page.tsx",
                            lineNumber: 991,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 947,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            value: year,
                            onChange: (e)=>setYear(Number(e.target.value)),
                            className: "text-black rounded border border-white px-3 py-2 h-9 w-40",
                            placeholder: "输入年份"
                        }, void 0, false, {
                            fileName: "[project]/src/app/earth/page.tsx",
                            lineNumber: 1011,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: calculate,
                            className: "ml-3 px-4 py-2 bg-fuchsia-700 rounded text-white h-9 flex items-center justify-center",
                            children: "计算"
                        }, void 0, false, {
                            fileName: "[project]/src/app/earth/page.tsx",
                            lineNumber: 1018,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 1010,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-lg h-[30px] text-center w-full",
                    children: result
                }, void 0, false, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 1026,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/earth/page.tsx",
            lineNumber: 944,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/earth/page.tsx",
        lineNumber: 943,
        columnNumber: 5
    }, this);
}
function EarthPage() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("十二宫");
    // 三个不同的内容组件
    const renderContent = ()=>{
        switch(activeTab){
            case "十二宫":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ZodiacScene, {}, void 0, false, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 1040,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 1039,
                    columnNumber: 11
                }, this);
            case "七星轨迹":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SevenStarsScene, {}, void 0, false, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 1047,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 1046,
                    columnNumber: 11
                }, this);
            case "藏历绕迥纪年":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TibetanCyclicYear, {}, void 0, false, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 1052,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black text-white min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-30",
                    children: [
                        ...Array(100)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute w-1 h-1 bg-white rounded-full star`,
                            style: {
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }
                        }, i, false, {
                            fileName: "[project]/src/app/earth/page.tsx",
                            lineNumber: 1065,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/earth/page.tsx",
                    lineNumber: 1063,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 1062,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center p-4 border-b border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2 text-blue-400 hover:text-blue-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-l-2 border-t-2 border-current transform rotate-[-45deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/earth/page.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "返回"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/earth/page.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1080,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold mb-2",
                                        children: "2025"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/earth/page.tsx",
                                        lineNumber: 1089,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-b-2 border-r-2 border-white transform rotate-45"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/earth/page.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1088,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1092,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 1079,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center space-x-4 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("十二宫"),
                                className: `px-6 py-2 rounded-lg transition-all duration-300 ${activeTab === "十二宫" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`,
                                children: "十二宫"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1097,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("七星轨迹"),
                                className: `px-6 py-2 rounded-lg transition-all duration-300 ${activeTab === "七星轨迹" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`,
                                children: "七星轨迹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("藏历绕迥纪年"),
                                className: `px-6 py-2 rounded-lg transition-all duration-300 ${activeTab === "藏历绕迥纪年" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`,
                                children: "藏历绕迥纪年"
                            }, void 0, false, {
                                fileName: "[project]/src/app/earth/page.tsx",
                                lineNumber: 1117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 1096,
                        columnNumber: 9
                    }, this),
                    renderContent(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/earth/page.tsx",
                        lineNumber: 1133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/earth/page.tsx",
                lineNumber: 1077,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/earth/page.tsx",
        lineNumber: 1060,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__03541b9b._.js.map