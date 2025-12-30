import { NextRequest, NextResponse } from "next/server";

// 延迟加载模块，避免构建时解析问题
async function getLunarCalendar() {
  try {
    // 使用动态 import() 加载模块
    const LunarCalendar = await import("lunar-calendar");
    // 处理不同的导出方式
    return LunarCalendar.default || LunarCalendar;
  } catch (error) {
    console.error("无法加载 lunar-calendar 模块:", error);
    throw new Error("无法加载 lunar-calendar 模块");
  }
}

export async function POST(request: NextRequest) {
  try {
    const { year, month, day } = await request.json();

    if (!year || !month || !day) {
      return NextResponse.json(
        { error: "缺少必要参数" },
        { status: 400 }
      );
    }

    // 在运行时加载模块
    const calendar = await getLunarCalendar();

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

    while (monthsChecked < maxMonths) {
      try {
        // 获取该月的日历数据
        const monthData = calendar.calendar(checkYear, checkMonth, false);

        if (monthData && monthData.monthData && Array.isArray(monthData.monthData)) {
          // 遍历该月的每一天
          for (const dateInfo of monthData.monthData) {
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
                const daysLeft = Math.ceil(
                  (festivalDate.getTime() - selectedDateStart.getTime()) / (1000 * 60 * 60 * 24)
                );

                // 格式化日期显示 - 使用公历日期（因为用户看到的是公历日期）
                const dateStr = `${dateMonth}月${dateDay}日`;

                return NextResponse.json({
                  name: lunarFestival,
                  date: dateStr,
                  daysLeft: daysLeft,
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
      } catch {
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
    return NextResponse.json(null);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "服务器错误";
    console.error("获取农历节日失败:", error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

