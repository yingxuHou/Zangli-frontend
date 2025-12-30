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
"[project]/frontend/src/components/FooterBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
// 自适应 hook - 修复：初始化时立即获取真实窗口宽度
function useWindowWidth() {
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // 在客户端初始化时立即获取真实窗口宽度
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 390; // 服务端渲染时的默认值
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 客户端挂载时再次确认宽度（处理初始化时机问题）
        setWidth(window.innerWidth);
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `flex items-center justify-center rounded-full transition-colors shadow-lg 
    bg-[#0051feff]`,
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
}),
"[project]/frontend/src/app/docs/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DocsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/FooterBar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DocsPage() {
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 藏历主题与简介映射
        const htmlFiles = [
            {
                id: 0,
                filename: 'topic0.html',
                title: '藏历是什么',
                desc: '介绍藏历的种类与流派、发展历史、地域特色与节气划分、计算体系原理、实际应用以及跨文化传播。',
                img: '/back/AI生成7.png'
            },
            {
                id: 1,
                filename: 'topic1.html',
                title: '解密藏历智慧之工具——萨雄与图珠',
                desc: '萨雄相当于藏族的算盘，用于历算；图珠（日圭）是观测太阳影长的工具，用于时间推算。',
                img: '/back/日影.gif'
            },
            {
                id: 2,
                filename: 'topic2.html',
                title: '六历对照银巴万年历说明',
                desc: '以浦尔派、极孜、楚尔派、甘登新为基础，再加上农历与公历，形成六历对照体系。',
                img: '/back/天赤道与黄道1.jpg'
            },
            {
                id: 3,
                filename: 'topic3.html',
                title: '藏历与农历的区别',
                desc: '藏历与农历同属阴阳历，但纪月与闰月设置不同，导致新年与春节有时不一致。',
                img: '/back/日历.gif'
            },
            {
                id: 4,
                filename: 'topic4.html',
                title: '藏历的纪年方法',
                desc: '包括生肖纪年、教历纪年、美卡加措纪年、饶迥纪年、夏迦纪年等多种体系。',
                img: '/back/白天黑夜.gif'
            },
            {
                id: 5,
                filename: 'topic5.html',
                title: '藏历的纪月方法',
                desc: '平年十二个月，闰年十三个月，常用数字纪月、十二望宿纪月与十二生肖纪月等方式。',
                img: '/back/月相0.jpg'
            },
            {
                id: 6,
                filename: 'topic6.html',
                title: '藏历的纪日方法',
                desc: '采用数字纪日、生肖纪日与上弦下弦配合纪日等多种方式。',
                img: '/back/日地.jpg'
            },
            {
                id: 7,
                filename: 'topic7.html',
                title: '藏历的纪时方法',
                desc: '主要包括生肖纪时与漏刻纪时两种方式。',
                img: '/back/黄道带.png'
            },
            {
                id: 8,
                filename: 'topic8.html',
                title: '历算五支——曜、日、宿、会合、作用',
                desc: '五支是时轮历的重要数值基础，用于推算天象与时间结构。',
                img: '/back/五要素.jpeg'
            },
            {
                id: 9,
                filename: 'topic9.html',
                title: '藏历的十曜体系',
                desc: '包括日月、五星（水木火金土）、罗睺、劫火和长尾彗星，用于占算与天象推测。',
                img: '/back/太阳系1.gif'
            },
            {
                id: 11,
                filename: 'topic11.html',
                title: '藏历历书的智慧',
                desc: '藏历历书不仅是天文历法成果，更是气象历书，指导农业与日常生产。',
                img: '/back/节气.jpg'
            },
            {
                id: 12,
                filename: 'topic12.html',
                title: '二十四节气的藏历表达',
                desc: '藏历节气与汉历节气并存，反映不同地域对季节变化的理解。',
                img: '/back/四季.gif'
            },
            {
                id: 13,
                filename: 'topic13.html',
                title: '藏历与季节',
                desc: '通过太阳视运动与节气推算，定义季节变化的规律。',
                img: '/back/四季.jpg'
            },
            {
                id: 15,
                filename: 'topic15.html',
                title: '五星（曜）运动与日月食预测',
                desc: '分析五星的运动特征，并通过时轮历法预报日月食与缺重日。',
                img: '/back/日月食.jpg'
            },
            {
                id: 17,
                filename: 'topic17.html',
                title: '三种日的概念',
                desc: '太阳日、太阴日与宫日共同构成藏历时间体系的重要基础。',
                img: '/back/太阳周日视运动.gif'
            },
            {
                id: 18,
                filename: 'topic18.html',
                title: '五行与五大（五源）学说',
                desc: '藏历天文历算的两种体系分别建立在五行占算与时轮五源理论之上。',
                img: '/back/七大行星1.gif'
            },
            {
                id: 19,
                filename: 'topic19.html',
                title: '2025年满月日历',
                desc: '展示2025年全年满月日期及相关天文现象。',
                img: '/back/月相.jpeg'
            },
            {
                id: 20,
                filename: 'topic20.html',
                title: '2025年17大罕见天文事件',
                desc: '涵盖彗星、日月食、流星雨等重要天文观测事件。',
                img: '/back/宇宙.png'
            },
            {
                id: 21,
                filename: 'topic21.html',
                title: '2025年天文事件总览',
                desc: '汇总全年天文活动时间表与可观测性。',
                img: '/back/恒星日与太阳日2.gif'
            },
            {
                id: 22,
                filename: 'topic22.html',
                title: '2025年彗星时间表',
                desc: '记录全年彗星出现时间与观测方位。',
                img: '/back/彗星.jpeg'
            },
            {
                id: 23,
                filename: 'topic23.html',
                title: '2025年春分与节气',
                desc: '春分时间的确定方式与节气变换规律。',
                img: '/back/节气.jpg'
            },
            {
                id: 24,
                filename: 'topic24.html',
                title: '二十八星宿与黄道十二宫',
                desc: '藏历结合二十八星宿与十二宫用于标识太阳与行星运行。',
                img: '/back/28星宿.jpg'
            },
            {
                id: 25,
                filename: 'topic25.html',
                title: '太阳周年视运动',
                desc: '解释太阳在黄道上的周年运动及其在天球上的反映。',
                img: '/back/太阳周日视运动.gif'
            },
            {
                id: 26,
                filename: 'topic26.html',
                title: '三种年的概念',
                desc: '太阳年、回归年、恒星年的区别与天文意义。',
                img: '/back/进动.gif'
            },
            {
                id: 27,
                filename: 'topic27.html',
                title: '三种月的概念',
                desc: '包括太阴月、恒星月与太阳月，构成历法周期核心。',
                img: '/back/月相0.jpg'
            },
            {
                id: 29,
                filename: 'topic29.html',
                title: '黄道十二宫与28星宿',
                desc: '天文坐标体系下的十二宫与星宿划分方法。',
                img: '/back/黄道12宫.png'
            },
            {
                id: 30,
                filename: 'topic30.html',
                title: '太阳日与地球自转周期',
                desc: '阐述太阳日的形成原理与地球自转关系。',
                img: '/back/黄道12宫.jpeg'
            },
            {
                id: 31,
                filename: 'topic31.html',
                title: '太阴月与月亮视运动',
                desc: '解释月相变化与地月日相对位置的关系。',
                img: '/back/597.jpg'
            },
            {
                id: 32,
                filename: 'topic32.html',
                title: '藏历纪年四维体系',
                desc: '纪年、纪月、纪日、纪时构成藏历时间体系的完整框架。',
                img: '/back/绕迥.png'
            },
            {
                id: 35,
                filename: 'topic35.html',
                title: '天球视角：藏历的宇宙观',
                desc: '以地球为中心的天球模型展示日月星辰运行轨迹。',
                img: '/back/天球.gif'
            },
            {
                id: 36,
                filename: 'topic36.html',
                title: '太阳年与节气体系',
                desc: '讲述太阳运动与节气变化的时间计算方法。',
                img: '/back/太阳周日视运动.gif'
            },
            {
                id: 37,
                filename: 'topic37.html',
                title: '月食与类型',
                desc: '介绍月食的形成类型、发生频率与图像示意。',
                img: '/back/朔.png'
            },
            {
                id: 41,
                filename: 'topic41.html',
                title: '时轮历中的时间与空间计量体系',
                desc: '时轮历的时间单位、空间单位与进制体系解析。',
                img: '/back/四季.gif'
            }
        ];
        // 转换为卡片数据
        const newCards = htmlFiles.map((file, index)=>({
                id: file.id,
                titleLeft: file.title,
                titleRight: ``,
                desc: file.desc,
                img: file.img || images[index % images.length]
            }));
        setCards(newCards);
        setLoading(false);
    }, []);
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
                            className: "absolute w-1 h-1 bg-white rounded-full star",
                            style: {
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }
                        }, i, false, {
                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/docs/page.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/docs/page.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 pt-3 flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-gray-300 hover:text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border-l-2 border-t-2 border-current rotate-[-45deg]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/docs/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/docs/page.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-white/10 border border-white/15 rounded-full px-4 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "搜索藏历主题...",
                                            className: "flex-1 bg-transparent outline-none text-sm placeholder-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-2 w-5 h-5 rounded-full border border-white/50 flex items-center justify-center text-xs",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/docs/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/docs/page.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/docs/page.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-4 pb-24 space-y-5",
                        children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/details/topic/${card.id}`,
                                className: "block group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-48 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: card.img,
                                                alt: card.titleLeft,
                                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/docs/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold text-white",
                                                            children: card.titleLeft
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: card.titleRight
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/docs/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 text-sm mt-2 leading-relaxed",
                                                    children: card.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/docs/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/docs/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/docs/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this)
                            }, card.id, false, {
                                fileName: "[project]/frontend/src/app/docs/page.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/docs/page.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$FooterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/docs/page.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/docs/page.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/docs/page.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__52d92a53._.js.map