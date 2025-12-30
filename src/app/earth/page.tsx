"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SevenStars from "@/components/seven-stars/page";
import SevenData from "@/components/seven-data/page";
import Zodiac from "@/components/zodiac/page";
import TibetanCycle from "@/components/tibetan-cycle/page";
import WidgetCarousel from "@/components/widgets/WidgetCarousel";
import EarthNav from "@/components/EarthNav/EarthNav";
import FooterBar from "@/components/FooterBar";
import { fetchPlanetsData, PlanetsData } from "@/services/planeApi";
export default function EarthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");

  // 根据URL参数设置初始页面
  const getInitialPage = () => {
    if (tabParam === "seven-stars") return 1;
    if (tabParam === "tibetan-cycle") return 2;
    return 0; // 默认显示zodiac
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [showSevenData, setShowSevenData] = useState(false);
  const [planetsData, setPlanetsData] = useState<PlanetsData | null>(null);

  // 当URL参数变化时更新当前页面
  useEffect(() => {
    setCurrentPage(getInitialPage());
  }, [tabParam]);

  // Fetch planets data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const now = new Date();
        const params = {
          year: now.getFullYear(),
          month: now.getMonth() + 1,
          day: now.getDate(),
          hour: now.getHours(),
          minute: now.getMinutes(),
          longitude: 121.47, // Default to Shanghai longitude
          latitude: 31.23,   // Default to Shanghai latitude
        };
        const data = await fetchPlanetsData(params);
        setPlanetsData(data || null);
        console.log("Planets data:", data);
      } catch (error) {
        console.error("Error fetching planets data:", error);
      }
    };

    fetchData();
  }, []);

  // 切换七星轨迹 ↔ 七星数据
  const handleToggleSeven = () => {
    setShowSevenData((prev) => !prev);
  };

  // 切换页卡时修改 URL
  const handleChangePage = (index: number) => {
    setCurrentPage(index);
    if (index === 0) router.push("/earth?tab=zodiac");
    if (index === 1) router.push("/earth?tab=seven-stars");
    if (index === 2) router.push("/earth?tab=tibetan-cycle");
  };

  // 显示的页面内容
  const items = [
    <Zodiac key="zodiac" />,
    showSevenData ? <SevenData key="seven-data" /> : <SevenStars key="seven-stars" />,
    <TibetanCycle key="tibetan-cycle" />,
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* 背景层 */}
      <div className="fixed inset-0 bg-black"></div>

      {/* 主体部分 */}
      <div className="relative z-10 flex flex-col h-screen">
        <div className="flex-1 flex flex-col p-4">
          {/* 顶部导航 */}
          <div className="mb-4 text-sm">
            <EarthNav
              currentPage={
                tabParam === "seven-stars"
                  ? "七星轨迹"
                  : tabParam === "tibetan-cycle"
                    ? "藏历绕迥纪年"
                    : "十二宫图"
              }
            />
          </div>

          {/* 中间内容 */}
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
            <WidgetCarousel
              items={items}
              currentIndex={currentPage}
              onChange={handleChangePage}
            />
          </div>

          {/* 切换按钮：仅在七星页显示 */}
          {currentPage === 1 && (
            <button
              onClick={handleToggleSeven}
              className="fixed bottom-24 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition duration-300 hover:scale-105"
            >
              {showSevenData ? "*v*" : "*_*"}
            </button>
          )}
        </div>
      </div>

      {/* 底部栏 */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <FooterBar />
      </div>
    </div>
  );
}
