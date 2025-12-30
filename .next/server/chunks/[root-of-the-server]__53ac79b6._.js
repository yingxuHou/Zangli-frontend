module.exports = {

"[project]/frontend/.next-internal/server/app/api/lunar-holiday/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/module [external] (module, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[project]/frontend/src/app/api/lunar-holiday/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/module [external] (module, cjs)");
;
;
// 使用 createRequire 动态创建 require 函数，避免构建时解析问题
// 在 Next.js API 路由中，使用当前工作目录
const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(process.cwd() + "/package.json");
// 延迟加载模块，避免构建时解析问题
function getLunarCalendar() {
    try {
        // 使用 createRequire 创建的 require 函数加载模块
        // @ts-ignore
        const LunarCalendar = require("lunar-calendar");
        // 处理不同的导出方式
        return LunarCalendar.default || LunarCalendar || LunarCalendar.LunarCalendar;
    } catch (error) {
        console.error("无法加载 lunar-calendar 模块:", error);
        throw new Error("无法加载 lunar-calendar 模块");
    }
}
async function POST(request) {
    try {
        const { year, month, day } = await request.json();
        if (!year || !month || !day) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "缺少必要参数"
            }, {
                status: 400
            });
        }
        // 在运行时加载模块
        const calendar = getLunarCalendar();
        const selectedDate = new Date(year, month - 1, day);
        const currentYear = year;
        const currentMonth = month;
        const currentDay = day;
        // 最多查找未来2年的数据
        const maxMonths = 24;
        let monthsChecked = 0;
        // 从当前月份开始查找
        let checkYear = currentYear;
        let checkMonth = currentMonth;
        while(monthsChecked < maxMonths){
            try {
                // 获取该月的日历数据
                const monthData = calendar.calendar(checkYear, checkMonth, false);
                if (monthData && monthData.monthData && Array.isArray(monthData.monthData)) {
                    // 遍历该月的每一天
                    for (const dateInfo of monthData.monthData){
                        const dateYear = dateInfo.year;
                        const dateMonth = dateInfo.month;
                        const dateDay = dateInfo.day;
                        const lunarFestival = dateInfo.lunarFestival;
                        // 如果是当前月份，跳过选中日期之前的日期
                        if (checkYear === currentYear && checkMonth === currentMonth && dateDay < currentDay) {
                            continue;
                        }
                        // 检查是否有农历节日
                        if (lunarFestival && lunarFestival.trim() !== "") {
                            const festivalDate = new Date(dateYear, dateMonth - 1, dateDay);
                            // 将时间设置为当天的开始，避免时间比较问题
                            festivalDate.setHours(0, 0, 0, 0);
                            const selectedDateStart = new Date(selectedDate);
                            selectedDateStart.setHours(0, 0, 0, 0);
                            // 只考虑选中日期之后的节日（不包括当天）
                            if (festivalDate > selectedDateStart) {
                                // 计算剩余天数
                                const daysLeft = Math.ceil((festivalDate.getTime() - selectedDateStart.getTime()) / (1000 * 60 * 60 * 24));
                                // 格式化日期显示 - 使用公历日期（因为用户看到的是公历日期）
                                const dateStr = `${dateMonth}月${dateDay}日`;
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                                    name: lunarFestival,
                                    date: dateStr,
                                    daysLeft: daysLeft
                                });
                            }
                        }
                    }
                }
                // 移动到下一个月
                checkMonth++;
                if (checkMonth > 12) {
                    checkMonth = 1;
                    checkYear++;
                }
                monthsChecked++;
            } catch (error) {
                // 如果获取数据失败，继续查找下一个月
                checkMonth++;
                if (checkMonth > 12) {
                    checkMonth = 1;
                    checkYear++;
                }
                monthsChecked++;
            }
        }
        // 如果2年内都没找到，返回 null
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(null);
    } catch (error) {
        console.error("获取农历节日失败:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "服务器错误"
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__53ac79b6._.js.map