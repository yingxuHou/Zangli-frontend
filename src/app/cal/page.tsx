"use client";

import { useEffect, useMemo, useState } from "react";
import { DateEventsCard, AstrologicalTableCard, MoonPhaseCard, PlanetaryChartCard, CalendarBox } from "@/components";
import WidgetCarousel from "@/components/widgets/WidgetCarousel";
import FooterBar from "@/components/FooterBar";
import { fetchCalendarData } from "@/services/calendarApi";


interface AstrologicalTableRow {
  label: string;
  value: string;
  colorClass: string;
}

export default function CalendarPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [city, setCity] = useState("上海市");
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth()); // 0-11
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [calendarData, setCalendarData] = useState<Awaited<ReturnType<typeof fetchCalendarData>> | null>(null);
  const [stars, setStars] = useState<Array<{ left: number; top: number; opacity: number }>>([]);
  

  // 在客户端生成星星位置，避免 hydration mismatch
  useEffect(() => {
    setStars(
      [...Array(160)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.95,
      }))
    );
  }, []);

  const currentMonthLabel = useMemo(() => {
    const d = new Date(year, month, 1);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long" });
  }, [year, month]);

  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);
  const startOffset = useMemo(() => {
    const first = new Date(year, month, 1).getDay(); // 0-6 (Sun-Sat)
    return first;
  }, [year, month]);

  const selectedDateStr = useMemo(() => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(selectedDay).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  }, [year, month, selectedDay]);



  const loadData = async (date?: string, cityName?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCalendarData({ date, cityName });
      setCalendarData(data || null);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "加载失败";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const cityOptions = [
    "上海市", "北京市", "广州市", "深圳市", "杭州市", "南京市",
    "成都市", "武汉市", "西安市", "重庆市", "天津市", "苏州市"
  ];

  // 处理城市选择 - 坐标由后端自动处理
  const handleCityChange = (selectedCity: string) => {
    setCity(selectedCity);
    setIsCityOpen(false);
    loadData(selectedDateStr, selectedCity);
  };

  const handlePrevMonth = () => {
    const d = new Date(year, month, 1);
    d.setMonth(d.getMonth() - 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    // 调整选中日不超过当月最大日
    const dim = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const newDay = Math.min(selectedDay, dim);
    setSelectedDay(newDay);
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(newDay).padStart(2, "0");
    loadData(`${d.getFullYear()}-${mm}-${dd}`, city);
  };

  const handleNextMonth = () => {
    const d = new Date(year, month, 1);
    d.setMonth(d.getMonth() + 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    const dim = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const newDay = Math.min(selectedDay, dim);
    setSelectedDay(newDay);
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(newDay).padStart(2, "0");
    loadData(`${d.getFullYear()}-${mm}-${dd}`, city);
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    loadData(`${year}-${mm}-${dd}`, city);
  };

  useEffect(() => {
    // 初始化加载当前日期
    loadData(undefined, city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [
    <DateEventsCard
      key="date"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={4}
      header={{
        title: calendarData?.dateEvents?.lunarInfo?.fullDate || "",
        subtitle: calendarData?.dateEvents?.solarInfo?.fullDate || ""
      }}
      counters={[
        { label: "农", value: calendarData?.dateEvents?.lunarInfo?.fullDate || "", colorClass: "bg-blue-400" },
        { label: "公", value: calendarData?.dateEvents?.solarInfo?.fullDate || "", colorClass: "bg-purple-500" },
        { label: "藏", value: calendarData?.dateEvents?.tibetanInfo?.fullDate || "", colorClass: "bg-pink-400" }
      ]}
      events={[
        {
          label: `${calendarData?.dateEvents?.events?.solarHoliday?.name || ""} ${calendarData?.dateEvents?.events?.solarHoliday?.date || ""}`,
          colorClass: "bg-gray-500",
          daysLeftText: `还剩${calendarData?.dateEvents?.events?.solarHoliday?.daysLeft || 0}天`
        },
        {
          label: `${calendarData?.dateEvents?.events?.lunarHoliday?.name || ""} ${calendarData?.dateEvents?.events?.lunarHoliday?.date || ""}`,
          colorClass: "bg-gray-500",
          daysLeftText: `还剩${calendarData?.dateEvents?.events?.lunarHoliday?.daysLeft || 0}天`
        },
        {
          label: `${calendarData?.dateEvents?.events?.tibetanHoliday?.name || ""} ${calendarData?.dateEvents?.events?.tibetanHoliday?.date || ""}`,
          colorClass: "bg-gray-500",
          daysLeftText: `还剩${calendarData?.dateEvents?.events?.tibetanHoliday?.daysLeft || 0}天`
        }
      ]}
    />,
    <AstrologicalTableCard
      key="astro"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={4}
      header={{
        title: calendarData?.astrologicalTable?.tibetanDate || "",
        subtitle: "Astrological Data"
      }}
      rows={calendarData?.astrologicalTable?.tableData as AstrologicalTableRow[] || []}
    />,
    <MoonPhaseCard
      key="moon"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={4}
      header={{ title: calendarData?.moonPhase?.lunarDate || "", subtitle: "Moon Phase" }}
      timeLabel={calendarData?.moonPhase?.observationTime || ""}
      illumination={calendarData?.moonPhase?.illumination}
      culminationText={`中天 ${calendarData?.moonPhase?.culminationTime || ""}`}
      moonRise={calendarData?.moonPhase?.moonriseTime || ""}
      moonSet={calendarData?.moonPhase?.moonsetTime || ""}
      lunarDay={calendarData?.moonPhase?.lunar_day}
    />,
    <PlanetaryChartCard
      key="planet"
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={4}
      label={calendarData?.planetaryChart?.constellation || ""}
      leftTime={calendarData?.planetaryChart?.riseTime || ""}
      rightTime={calendarData?.planetaryChart?.setTime || ""}
    />
  ];

  return (
    <div className="text-white min-h-screen flex flex-col starfield-bg">
      <div className="fixed inset-0 starfield-bg">
        <div className="absolute inset-0 opacity-80">
          {stars.map((star, i) => {
            const sizeClass = i % 11 === 0 ? "star--lg" : i % 3 === 0 ? "star--md" : "star--sm";
            const toneClass = i % 7 === 0 ? "star--warm" : i % 5 === 0 ? "star--cold" : "star--neutral";
            return (
              <div
                key={i}
                className={`absolute rounded-full star ${sizeClass} ${toneClass}`}
                style={{ left: `${star.left}%`, top: `${star.top}%`, opacity: star.opacity }}
              />
            );
          })}
        </div>
      </div>

      {/* 主内容区域 - 可滚动布局 */}
      <div className="relative z-10 min-h-screen flex flex-col pb-20">
        <div className="flex flex-col p-4">
          {/* 城市选择器 */}
          <div className="flex justify-center items-center py-2 relative mt-8">{/*"上海市"距离顶部距离*/}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-lg hover:bg-gray-700/70 transition-colors cursor-pointer"
                onClick={() => setIsCityOpen((v) => !v)}
              >
                <span className="text-lg font-medium">{city}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="text-gray-300"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isCityOpen && (
                <div className="absolute left-0 right-0 mt-2 w-48 bg-gray-900/90 border border-gray-700 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                  {cityOptions.map((c) => (
                    <button
                      key={c}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-700/70 ${c === city ? "text-white bg-gray-700/50" : "text-gray-300"
                        }`}
                      onClick={() => handleCityChange(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-2">{/*日历距离顶部距离*/}
            <div className="w-[90%] sm:w-[82%] md:w-[70%] max-w-[520px]">
              <CalendarBox
                currentMonth={currentMonthLabel}
                containerClassName="rounded-20 selected-26"
                startOffset={startOffset}
                daysInMonth={daysInMonth}
                initialSelected={selectedDay}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
                onSelectDay={handleSelectDay}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 mb-6">{/*上下两个框之间的距离*/}
            <div className="w-[90%] sm:w-[82%] md:w-[70%] max-w-[520px]">
              {loading ? (
                <div className="text-center text-gray-300 py-12">加载中...</div>
              ) : error ? (
                <div className="text-center text-red-400 py-12">{error}</div>
              ) : (
                <WidgetCarousel items={items} currentIndex={currentPage} onChange={setCurrentPage} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 固定在底部的FooterBar */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <FooterBar />
      </div>
    </div>
  );
}
