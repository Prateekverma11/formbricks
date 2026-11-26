"use client";

import { EyeOff, MoveVertical, SlidersHorizontal } from "lucide-react";
import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { TScrollbarWidth } from "@formbricks/types/styling";
import { StylingTabs } from "@/modules/ui/components/styling-tabs";

interface ScrollbarWidthTabsProps {
  activeScrollbarWidth: TScrollbarWidth;
  setActiveScrollbarWidth: (value: TScrollbarWidth) => void;
  disabled?: boolean;
}

export const ScrollbarWidthTabs = ({
  activeScrollbarWidth,
  setActiveScrollbarWidth,
  disabled = false,
}: Readonly<ScrollbarWidthTabsProps>) => {
  const { t } = useTranslation();

  const handleScrollbarWidthChange = (scrollbarWidth: TScrollbarWidth) => {
    if (disabled) return;
    setActiveScrollbarWidth(scrollbarWidth);
  };

  const getScrollbarWidthIcon = (scrollbarWidth: TScrollbarWidth) => {
    const iconClassName = "size-4 text-slate-900";

    switch (scrollbarWidth) {
      case "auto":
        return <MoveVertical className={iconClassName} />;
      case "none":
        return <EyeOff className={iconClassName} />;
      default:
        return <SlidersHorizontal className={iconClassName} />;
    }
  };

  const options: {
    value: TScrollbarWidth;
    label: string;
    icon: ReactNode;
  }[] = [
    {
      value: "thin",
      label: t("workspace.surveys.edit.scrollbar_width_thin"),
      icon: getScrollbarWidthIcon("thin"),
    },
    {
      value: "auto",
      label: t("workspace.surveys.edit.scrollbar_width_auto"),
      icon: getScrollbarWidthIcon("auto"),
    },
    {
      value: "none",
      label: t("workspace.surveys.edit.scrollbar_width_none"),
      icon: getScrollbarWidthIcon("none"),
    },
  ];

  return (
    <StylingTabs
      options={options}
      activeValue={activeScrollbarWidth}
      onSelect={(value) => handleScrollbarWidthChange(value as TScrollbarWidth)}
      disabled={disabled}
    />
  );
};
