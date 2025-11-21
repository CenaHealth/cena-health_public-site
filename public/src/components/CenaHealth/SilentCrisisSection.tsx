import React, { useRef } from "react";
import Slider from "react-slick";

const slickStyles = `
.slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list:focus {
    outline: none;
}
.slick-list.dragging {
    cursor: pointer;
    cursor: hand;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slick-track:before,
.slick-track:after {
    display: table;
    content: '';
}
.slick-track:after {
    clear: both;
}
.slick-loading .slick-track {
    visibility: hidden;
}
.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide {
    float: right;
}
.slick-slide img {
    display: block;
}
.slick-slide.slick-loading img {
    display: none;
}
.slick-slide.dragging img {
    pointer-events: none;
}
.slick-initialized .slick-slide {
    display: block;
}
.slick-loading .slick-slide {
    visibility: hidden;
}
.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}
`;

import svgPaths from "../../imports/svg-jy1omwifs1";
import svgPaths2 from "../../imports/svg-naza2vtcjk";

import imgImage60 from "figma:asset/cf7e9725073d2b9674104950ccc5879b550cc4b7.png";
import imgImage61 from "figma:asset/8b3384adbc6b49ce7bb9c27365b0a5def4132791.png";
import imgImage62 from "figma:asset/1ebd12158f0b17c8f495be602003a5d020d2cec8.png";
import imgImage63 from "figma:asset/9293c510320034d4e33ad060efbdb11a454a1e3e.png";
import svgPaths3 from "../../imports/svg-k6myndkb6q";

function MovingBedsIcon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 36 36"
      >
        <path d={svgPaths3.p35f19880} fill="#418F82" />
      </svg>
    </div>
  );
}

function LocalHospitalIcon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 36 36"
      >
        <path d={svgPaths3.p3d70d000} fill="#C26346" />
      </svg>
    </div>
  );
}

function DiversityIcon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 36 36"
      >
        <path d={svgPaths3.pe17e580} fill="#418F82" />
      </svg>
    </div>
  );
}

function FoodIcon() {
  return (
    <div className="relative h-[120px] w-full overflow-hidden">
      <svg
        className="absolute top-[8.33%] left-[8.33%] w-[41.67%] h-[45.83%]"
        viewBox="0 0 50 55"
        fill="none"
      >
        <path
          d={svgPaths2.p29e76000}
          stroke="#42351F"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[8.33%] left-[29.17%] w-[8.33%] h-[91.67%]"
        viewBox="0 0 10 110"
        fill="none"
      >
        <path
          d="M5 5V105"
          stroke="#42351F"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[8.33%] left-[66.67%] w-[29.17%] h-[91.67%]"
        viewBox="0 0 35 110"
        fill="none"
      >
        <path
          d={svgPaths2.p14412600}
          stroke="#42351F"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="relative h-[120px] w-full overflow-hidden">
      <svg
        className="absolute top-[12.5%] left-[8.33%] w-[91.67%] h-[80%]"
        viewBox="0 0 110 96"
        fill="none"
      >
        <path
          d={svgPaths2.p10672280}
          stroke="#42351F"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PulseIcon() {
  return (
    <div className="relative h-[120px] w-full overflow-hidden">
      <svg
        className="absolute top-[8.33%] left-[8.33%] w-[91.67%] h-[91.67%]"
        viewBox="0 0 110 110"
        fill="none"
      >
        <path
          d={svgPaths2.p29d34c00}
          stroke="#42351F"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PersonIcon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[22px] h-[11px] top-[12.5%] left-[8.33%]">
        <svg
          className="w-full h-full"
          viewBox="0 0 22 11"
          fill="none"
        >
          <path
            d={svgPaths2.p94d2af0}
            stroke="#52A395"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute w-[7px] h-[13px] top-[54.7%] left-[66.67%]">
        <svg
          className="w-full h-full"
          viewBox="0 0 7 13"
          fill="none"
        >
          <path
            d={svgPaths2.p13f8000}
            stroke="#52A395"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute w-[7px] h-[11px] top-[12.5%] left-[79.17%]">
        <svg
          className="w-full h-full"
          viewBox="0 0 7 11"
          fill="none"
        >
          <path
            d={svgPaths2.p21b04700}
            stroke="#52A395"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute w-[14px] h-[14px] top-[54.17%] left-[20.83%]">
        <svg
          className="w-full h-full"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d={svgPaths2.pc2f8c00}
            stroke="#52A395"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function HospitalIcon() {
  return (
    <div className="relative w-full h-full">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[3px]"
        viewBox="0 0 8 3"
        fill="none"
      >
        <path
          d="M1.33333 1.33333H6.66667"
          stroke="#C26346"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[66.67%] left-[41.67%] w-[8px] h-[3px]"
        viewBox="0 0 8 3"
        fill="none"
      >
        <path
          d="M1.33333 1.33333H6.66667"
          stroke="#C26346"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[12.5%] left-[41.67%] w-[8px] h-[10px]"
        viewBox="0 0 8 10"
        fill="none"
      >
        <path
          d={svgPaths2.p17955880}
          stroke="#C26346"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[12.5%] left-[8.33%] w-[30px] h-[22px]"
        viewBox="0 0 30 22"
        fill="none"
      >
        <path
          d={svgPaths2.p1ea09c80}
          stroke="#C26346"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[12.5%] left-[25%] w-[19px] h-[27px]"
        viewBox="0 0 19 27"
        fill="none"
      >
        <path
          d={svgPaths2.p10b77500}
          stroke="#C26346"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CommunityIcon() {
  return (
    <div className="relative w-full h-full">
      <svg
        className="absolute top-[45.83%] left-[66.67%] w-[11px] h-[11px]"
        viewBox="0 0 11 11"
        fill="none"
      >
        <path
          d={svgPaths2.p3bd90b80}
          stroke="#52A395"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-[29.17%] left-[8.33%] w-[30px] h-[16px]"
        viewBox="0 0 30 16"
        fill="none"
      >
        <path
          d={svgPaths2.p18f5a1c0}
          stroke="#52A395"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg
      className="w-6 h-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d={svgPaths2.p54e7200} fill="#E67E5F" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      className="w-6 h-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      className="w-6 h-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <div className="relative shrink-0 size-[54px] rounded-full bg-white flex items-center justify-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border border-[rgba(212,196,176,0.25)]">
      <svg
        className="w-6 h-6 text-[#E67E5F]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="6" y="3" width="12" height="18" rx="6" />
        <path
          d="M12 7v4"
          className="animate-bounce"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function CheckIcon({ color = "#4E8751" }: { color?: string }) {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
      <path d={svgPaths.pba02a00} fill={color} />
    </svg>
  );
}

function MedicationIcon() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
      <path d={svgPaths.p25ab9180} fill="#4E8751" />
    </svg>
  );
}

function AddReactionIcon() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
      <path d={svgPaths.p3dd2980} fill="#4E8751" />
    </svg>
  );
}

function SentimentStressedIcon() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
      <path d={svgPaths.p1b310680} fill="#B1573B" />
    </svg>
  );
}

function DestructionIcon() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
      <path d={svgPaths.p32c43600} fill="#B1573B" />
    </svg>
  );
}

function SickIcon() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
      <path d={svgPaths.p2b895300} fill="#B1573B" />
    </svg>
  );
}

function DashedLine({ color }: { color: string }) {
  return (
    <div className="h-6 w-[52px] relative shrink-0 flex justify-center">
      <svg
        width="2"
        height="24"
        viewBox="0 0 2 24"
        fill="none"
        className="h-full"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="24"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function SolutionCard({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex-1 bg-white rounded-[24px] border border-[#d8cec0] p-9 flex flex-col gap-9 relative overflow-hidden">
      <div className="bg-[#e1f2e1] w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10">
        <p className="font-body font-black text-[27.65px] text-[#4e8751]">
          {number}
        </p>
      </div>
      <div className="flex flex-col gap-4 z-10 relative">
        <h4 className="font-heading font-bold text-[24px] leading-8 text-[#42351f]">
          {title}
        </h4>
        <p className="font-body font-medium text-[18px] leading-[1.6] text-[#4b3c31]">
          {description}
        </p>
      </div>
      <div className="absolute top-0 right-0 w-[168px] h-[168px] opacity-[0.04] p-6 z-0 pointer-events-none">
        {icon}
      </div>
    </div>
  );
}

function BusinessCaseCard({
  title,
  description,
  icon,
  iconBg,
  isPink = false,
  benefits,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  isPink?: boolean;
  benefits?: { main: string; sub: string }[];
}) {
  return (
    <div
      className={`flex-1 rounded-[24px] border p-9 flex flex-col gap-9 relative ${
        isPink
          ? "bg-[#f3ddd6] border-[#f0c7ba]"
          : "bg-white border-[#d8cec0]"
      }`}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${iconBg} p-4`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-heading font-bold text-[24px] leading-8 text-[#42351f]">
          {title}
        </h4>
        {benefits ? (
          <div className="flex flex-col gap-3 w-full">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-5 items-start">
                <ArrowRight />
                <div className="flex flex-col gap-[3px]">
                  <p className="font-body font-medium text-[19.2px] leading-snug text-[#4b3c31]">
                    {benefit.main}
                  </p>
                  {benefit.sub && (
                    <p className="font-body font-normal text-[13.33px] text-[#4b3c31]">
                      {benefit.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex gap-3 items-center mt-3">
              <ArrowRight />
              <p className="font-body font-bold text-[19.2px] leading-snug text-[#c26346]">
                280% ROI over 3 years
              </p>
            </div>
          </div>
        ) : (
          <p className="font-body font-medium text-[18px] leading-[1.6] text-[#4b3c31]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex-1 bg-[#d4ebd4] rounded-[11px] p-4 flex gap-3 items-baseline">
      <p className="font-heading font-bold text-[47.78px] text-[#336436] leading-none tracking-[0.6px]">
        {value}
      </p>
      <p className="font-body font-semibold text-[18px] text-[#457c47] leading-none">
        {label}
      </p>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-6 items-start w-full max-w-[680px]">
      <div className="flex gap-2 items-center h-5">
        <div className="bg-[#71c0b2] h-1 w-12 opacity-80 rounded-full" />
        <p className="font-bold text-foreground text-[14px] uppercase tracking-[1.4px]">
          {label}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-heading font-medium text-[48px] leading-[1.2] text-foreground tracking-[0.6px] font-[Lora]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body font-normal text-[19.2px] leading-[1.2] tracking-[0.24px] text-[#4b3c31]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function Step({
  icon,
  text,
  bgColor,
  subText,
  subBorderColor,
  subTextColor,
}: {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  subText?: string;
  subBorderColor?: string;
  subTextColor?: string;
}) {
  return (
    <div className="flex gap-4 items-center w-full">
      <div
        className={`shrink-0 p-2 rounded-[5px] flex items-center justify-center ${bgColor}`}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-body font-normal text-[19.2px] leading-[1.2] tracking-[0.24px] text-foreground">
          {text}
        </p>
        {subText && (
          <div
            className="mt-2 flex items-center pl-4 border-l-[3px]"
            style={{ borderColor: subBorderColor }}
          >
            <p
              className="font-body font-bold text-[12px] leading-[1.3] tracking-[1.2px] uppercase"
              style={{ color: subTextColor }}
            >
              {subText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StepConnector({ color }: { color: string }) {
  return (
    <div className="pl-[2px] pt-[0px] pr-[0px] pb-[0px]">
      <DashedLine color={color} />
    </div>
  );
}

function FailingCard({
  title,
  description,
  isDark = false,
}: {
  title: string;
  description: string;
  isDark?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[24px] border p-[25px] flex flex-col gap-2 h-full ${
        isDark
          ? "bg-[#42351f] border-[#42351f]"
          : "bg-white border-[#d8cec0]"
      }`}
    >
      <h4
        className={`font-heading font-bold text-[19.2px] leading-[1.21] tracking-[0.24px] ${
          isDark ? "text-[#e7886b]" : "text-foreground"
        }`}
      >
        {title}
      </h4>
      <p
        className={`font-body font-normal text-[16px] leading-[1.21] tracking-[0.2px] ${
          isDark ? "text-[#f5eee5]" : "text-[#4b3c31]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

// --- Testimonial Components ---

type TestimonialData = {
  org: string;
  name: string;
  role: string;
  subRole?: string;
  image?: string;
  quote: string;
};

const testimonials: TestimonialData[] = [
  {
    org: "Hartford HealthCare",
    name: "Erica Moura",
    role: "Director of Human Centered Care, Hartford HealthCare Corp.",
    image: imgImage60,
    quote:
      '"These nutritious and restaurant grade meals will be able to be delivered anywhere in CT. Everyone knows the benefit of a good meal. It\'s a way to show how much Hartford HealthCare cares about their recovery."',
  },
  {
    org: "UCONN Health",
    name: "Dr. Molly Maring",
    role: "Clinical Advisor",
    subRole:
      "Associate Professor, Department of Allied Health Sciences",
    image: imgImage61,
    quote:
      '"It has been a pleasure to work with Vanessa Sena and her team at My Local Chefs on a research project. She has a clear passion for promoting healthy eating and reducing diet-related health disparities, and a strong vision for how to collaborate with health systems, community organizations, and researchers to effect change in patients\' lives."',
  },
  {
    org: "Hartford HealthCare",
    name: "Greg Jones",
    role: "Vice President, Community Health and Engagement, Hartford HealthCare Corp.",
    image: imgImage62,
    quote:
      '"Improving health outcomes, starts with improving access to quality foods and nutrition. My Local Chefs, in providing access to produce, quality foods, and meals high in nutrition combined with delivery of the same helps address those important points to help better address health inequities that adversely impact the most underserved among us."',
  },
  {
    org: "UCONN Health",
    name: "Dr. Andrea Shields",
    role: "Clinical Advisor",
    subRole: "Associate Professor of Obstetrics and Gynecology",
    image: imgImage63,
    quote:
      '"Partnering with my local chefs on providing nutritious meals to our pregnant moms to improve pregnancy and neonatal outcomes has been truly invigorating. Together, we are nourishing our future and our community\'s heart."',
  },
  {
    org: "Patient",
    name: "Karin",
    role: "Vice President, Community Health and Engagement, Hartford HealthCare Corp.",
    quote:
      '"I am trying to lose weight (85 lbs to go…) & try to manage my diabetes (I\'m not doing good with that, yet). There is NOTHING on this menu that doesn’t look great, especially compared to what I have been eating. I can’t cook so I just reheat things or make the very basics in the microwave I have. None of those things are diabetic friendly though. Since I got sick I have had a very hard time doing many things, I have bad arthritis throughout my body, chronic fatigue syndrome, almost daily migraines, diabetes, carpal tunnel in both wrists, depression, anxiety & panic disorder, & PTSD. There’s more, but you get the picture. I’ve had 2 major surgeries this summer & better in some ways, thankfully. I’m on Social Security Disability & that doesn’t pay all my bills."',
  },
  {
    org: "Patient",
    name: "Effrin",
    role: "Director of Human Centered Care, Hartford HealthCare Corp.",
    quote:
      '"I am very grateful for the service we provide. It has been a blessing to be a part of the program. The food was healthy and tasted great. Even had enough to save for extra meals. Improved nutritional availability that he has access to. and meals made it easier. Gives me a feeling of being at a restaurant and eating out. Highlight of the week."',
  },
];

function TestimonialCard({ data }: { data: TestimonialData }) {
  return (
    <div className="bg-white rounded-[24px] p-9 flex flex-col gap-9 h-full mx-2 shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)] min-w-min">
      <div className="flex gap-4 items-start w-full">
        <div className="flex flex-col gap-[5px] grow">
          <p className="font-body font-bold text-[#4b3c31] text-[13.33px] tracking-[1.4px] uppercase">
            {data.org}
          </p>
          <p className="font-heading font-bold text-[#100501] text-[23.04px] leading-[32px]">
            {data.name}
          </p>
          <p className="font-body font-bold text-[#4b3c31] text-[13.33px] tracking-[1.4px] uppercase">
            {data.role}
          </p>
          {data.subRole && (
            <p className="font-body font-bold text-[#958579] text-[13.33px] tracking-[1.4px] uppercase">
              {data.subRole}
            </p>
          )}
        </div>
        {data.image && (
          <div className="shrink-0 size-[54px] rounded-full relative overflow-hidden border border-[rgba(16,5,1,0.1)]">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <p className="font-body font-normal text-[#100501] text-[19.2px] leading-[1.21] tracking-[0.24px] whitespace-pre-wrap">
        {data.quote}
      </p>
    </div>
  );
}

function TestimonialsSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1280px] py-[54px] px-6 lg:px-0 flex flex-col gap-[54px]">
      <div className="flex justify-between items-end w-full">
        <SectionHeader
          label="Testimonials"
          title="What People Are Saying"
        />
        <div className="flex gap-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-[54px] h-[54px] rounded-full bg-white border border-[#d8cec0] flex items-center justify-center text-[#4b3c31] hover:bg-[#f5eee5] transition-colors"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-[54px] h-[54px] rounded-full bg-white border border-[#d8cec0] flex items-center justify-center text-[#4b3c31] hover:bg-[#f5eee5] transition-colors"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div className="-mx-2">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full pb-4">
              <TestimonialCard data={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export function SilentCrisisSection() {
  return (
    <div className="w-full flex flex-col items-center">
      <style>{slickStyles}</style>
      <div className="w-full max-w-[1280px] py-[54px] px-6 lg:px-0 flex flex-col gap-[54px]">
        {/* Header Text Section */}
        <div className="flex flex-col gap-6 items-start w-full max-w-[680px]">
          {/* Top Label */}
          <div className="flex gap-2 items-center mb-2">
            <div className="bg-[#71c0b2] h-1 w-12 opacity-80 rounded-full" />
            <p className="font-bold text-foreground text-sm uppercase tracking-[1.4px]">
              The Silent Crisis
            </p>
          </div>

          <h2 className="font-heading font-semibold text-[40px] md:text-[48px] leading-[1.2] text-foreground tracking-[0.6px]">
            <span className="font-medium font-[Lora]">
              Hospitals lose{" "}
            </span>
            <span className="font-black text-[#d47052] font-[Lora]">
              $25B annually
            </span>
            <span className="font-medium font-[Lora]">
              {" "}
              on preventable readmissions.
            </span>
          </h2>

          <div className="flex items-center gap-4 w-full">
            <ArrowDownIcon />
            <p className="font-bold text-foreground text-sm uppercase tracking-[1.4px]">
              Scroll to explore
            </p>
          </div>

          <div className="mt-4">
            <p className="font-heading font-medium text-[32px] md:text-[40px] leading-[1.2] text-foreground tracking-[0.5px] mb-4 font-[Lora]">
              The Reality
            </p>
            <p className="font-body text-[19.2px] leading-[1.5] tracking-[0.24px] text-[#4b3c31]">
              When a doctor tells a patient "you need to eat
              better," there's no infrastructure to make that
              happen. Patients leave with a pamphlet and maybe
              see a dietitian twice a year.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row gap-[54px] w-full items-stretch">
          {/* Left Card: The Standard */}
          <div className="flex-1 bg-white rounded-[24px] shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)] p-9">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-body font-bold text-[12px] tracking-[1.2px] uppercase text-[#4e8751]">
                  The Standard
                </p>
                <p className="font-body font-bold text-[36px] text-foreground leading-tight font-[Lora]">
                  Medications
                </p>
              </div>

              <div className="flex flex-col">
                <Step
                  icon={<CheckIcon />}
                  text="Doctor prescribes treatment"
                  bgColor="bg-[#d4ebd4]"
                />
                <StepConnector color="#BADDBB" />

                <Step
                  icon={<CheckIcon />}
                  text="Pharmacy fills prescription"
                  bgColor="bg-[#d4ebd4]"
                />
                <StepConnector color="#BADDBB" />

                <Step
                  icon={<MedicationIcon />}
                  text="Insurance pays seamlessly"
                  bgColor="bg-[#d4ebd4]"
                />
                <StepConnector color="#BADDBB" />

                <Step
                  icon={<AddReactionIcon />}
                  text="Patient receives ongoing treatment"
                  bgColor="bg-[#d4ebd4]"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-body font-semibold text-[19.2px] tracking-[0.24px] text-[#4e8751]">
                  "It just works."
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: The GAP */}
          <div className="flex-1 bg-white rounded-[24px] shadow-[0px_2px_2px_0px_rgba(16,5,1,0.04),0px_3px_5px_0px_rgba(16,5,1,0.06),0px_5px_7px_0px_rgba(16,5,1,0.08),0px_7px_11px_0px_rgba(16,5,1,0.08)] p-9">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-body font-bold text-[12px] tracking-[1.2px] uppercase text-[#9f4b32]">
                  The GAP
                </p>
                <p className="font-body font-bold text-[36px] text-foreground leading-tight font-[Lora]">
                  Nutrition
                </p>
              </div>

              <div className="flex flex-col">
                <Step
                  icon={<CheckIcon />}
                  text='Doctor advises "eat better"'
                  bgColor="bg-[#d4ebd4]"
                />
                <StepConnector color="#E9AC5B" />

                <Step
                  icon={<SentimentStressedIcon />}
                  text="Patient is sent home with no nutrition support"
                  bgColor="bg-[#f2dec4]"
                  subText="Disconnect"
                  subBorderColor="#e9ac5b"
                  subTextColor="#a16d2a"
                />
                <StepConnector color="#E9AC5B" />

                <Step
                  icon={<DestructionIcon />}
                  text="No follow-through"
                  bgColor="bg-[#f2dec4]"
                />
                <StepConnector color="#E9AC5B" />

                <Step
                  icon={<SickIcon />}
                  text="Result: Readmission"
                  bgColor="bg-[#f2dec4]"
                  subText="System Failure"
                  subBorderColor="#d47052"
                  subTextColor="#9f4b32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why It's Failing Section */}
        <div className="w-full flex flex-col gap-[24px]">
          <h3 className="font-heading font-medium text-[40px] leading-[1.21] tracking-[0.5px] text-foreground font-[Lora]">
            Why It's Failing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <FailingCard
              title="No Prescriptions"
              description="Hospitals can't prescribe ongoing nutrition support like they prescribe medications."
            />
            <FailingCard
              title="Siloed Providers"
              description="Medically-tailored food providers deliver but have no clinical oversight or integration."
            />
            <FailingCard
              title="Disconnected Dietitians"
              description="Dietitians counsel patients but have no way to ensure follow-through."
            />
            <FailingCard
              title="Behavioral Gaps"
              description="Therapists address mental barriers but aren't connected to nutrition care."
            />
            <FailingCard
              title="Limited Platforms"
              description="Care coordination platforms track patients but don't include food delivery."
            />
            <FailingCard
              title="The Core Problem"
              description="No cohesive infrastructure connecting delivery + clinical + behavioral + workflows."
              isDark
            />
          </div>
        </div>
      </div>

      {/* The Solution Section */}
      <div className="w-full max-w-[1280px] py-[54px] px-6 lg:px-0 flex flex-col gap-[54px]">
        <SectionHeader
          label="The Solution"
          title="The Three Layers"
          subtitle="A comprehensive approach to ensure adherence and outcomes."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <SolutionCard
            number="01"
            title="Medically-Tailored Food"
            description="Condition-specific meals and produce delivered directly to the home. Culturally relevant and designed for healing."
            icon={<FoodIcon />}
          />
          <SolutionCard
            number="02"
            title="Integrated Clinical Care"
            description="RDNs, behavioral health navigators, and care coordinators working together with hospital teams."
            icon={<HeartIcon />}
          />
          <SolutionCard
            number="03"
            title="Data Integration &amp; Automation"
            description="Nutrition Care platform + AI engagement and outcome tracking, coordinating care, and proving ROI in real-time. Direct integration with your existing EHR using industry standard protocols"
            icon={<PulseIcon />}
          />
        </div>
      </div>

      {/* The Business Case Section */}
      <div className="w-full max-w-[1280px] py-[54px] px-6 lg:px-0 flex flex-col gap-[54px]">
        <SectionHeader
          label="The Business Case"
          title={
            <span>
              Why This Is a{" "}
              <span className="font-bold text-[#c26346]">
                No-Brainer
              </span>
            </span>
          }
          subtitle="A comprehensive approach to ensure adherence and outcomes."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          <BusinessCaseCard
            title="For Patients"
            description="Healing instead of endless readmissions. HbA1c drops, hospitalizations prevented, and quality of life restored."
            icon={<MovingBedsIcon />}
            iconBg="bg-[#d9f1ec]"
          />
          <BusinessCaseCard
            title="For Hospitals"
            description=""
            icon={<LocalHospitalIcon />}
            iconBg="bg-[#efbcac]"
            isPink
            benefits={[
              {
                main: "No added workload",
                sub: "integrates with EHRs",
              },
              { main: "Saves money", sub: "avoided penalties" },
              { main: "Makes money", sub: "shared savings" },
            ]}
          />
          <BusinessCaseCard
            title="For Communities"
            description="Jobs, and local wealth-building, through farms, kitchens and logistics."
            icon={<DiversityIcon />}
            iconBg="bg-[#d9f1ec]"
          />
        </div>
      </div>

      {/* The Proof Section */}
      <div className="w-full max-w-[1280px] py-[54px] px-6 lg:px-0 flex flex-col gap-[54px]">
        <SectionHeader
          label="Verified Sources"
          title="The Proof"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[54px] w-full items-center">
          <StatCard value="95%" label="Adherence Rate" />
          <StatCard
            value="30%"
            label="Fewer Hospitalizations"
          />
          <StatCard value="$3.2k" label="Savings Per Patient" />
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}