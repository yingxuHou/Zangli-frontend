"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

// 定义导航项类型
interface NavItem {
  href: string;
  icon: string;
}

// 自适应 hook - 修复：初始化时立即获取真实窗口宽度
function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(() => {
    return 390; // 服务端渲染时的默认值
  });

  useEffect(() => {
    // 客户端挂载时再次确认宽度（处理初始化时机问题）
    setWidth(window.innerWidth);

    function handleResize(): void {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function FooterBar(): React.JSX.Element {
  const pathname = usePathname();
  const width = useWindowWidth();

  // 按 390px 基准做比例
  const scale: number = width / 390;
  const iconSize: number = 18.5 * scale; // 图标大小
  const footerHeight: number = 51 * scale; // 整个 footer 高度

  const navItems: NavItem[] = [
    { href: "/cal", icon: "/cond/cal.png" },
    { href: "/earth", icon: "/cond/globe.png" },
    { href: "/chat", icon: "/cond/chat.png" },
    { href: "/docs", icon: "/cond/book.png" },
    { href: "/user", icon: "/cond/user.png" },
  ];

  return (
    <div
      className="bg-gray-900/80 glass-effect border-t border-gray-700"
      style={{ height: footerHeight }}
    >
      <div className="flex justify-around items-center max-w-md mx-auto h-full">
        {navItems.map((item: NavItem, idx: number) => {
          const isActive: boolean = pathname === item.href;

          // 中间"聊天"按钮突出显示
          if (idx === 2) {
            return (
              // <Link
              //       href="/chat"
              //       className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors text-white"
              //       style={{
              //           backgroundColor: "#0051feff",  // 始终使用这个背景色
              //       }}
              //   >
              //       <Image src="/cond/chat.png" alt="聊天" width={24} height={24} />
              //       <span className="text-xs">聊天</span>
              //   </Link>
              <Link
                href={item.href}
                key={item.href}
                className={`flex items-center justify-center rounded-full transition-colors shadow-lg 
    bg-[#0051feff]`}
                style={{
                  padding: 10 * scale,
                  transform: `translateY(-${footerHeight * 0.2}px)`,
                }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={iconSize * 1.2}
                  height={iconSize * 1.2}
                  style={{ width: `${iconSize * 1.2}px`, height: `${iconSize * 1.2}px` }}
                />
              </Link>

            );
          }

          // 其他项
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`flex items-center justify-center rounded-lg transition-colors
                ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`}
              style={{ padding: 6 * scale }}
            >
              <Image
                src={item.icon}
                alt=""
                width={iconSize}
                height={iconSize}
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
