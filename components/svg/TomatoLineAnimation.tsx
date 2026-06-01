import type { SVGProps } from "react";

export function TomatoLineAnimation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 900 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full max-w-3xl text-primary"
      {...props}
    >
      {/* خط زمین */}
      <line
        x1={40}
        y1={220}
        x2={860}
        y2={220}
        className="stroke-border"
        strokeWidth={2}
        strokeLinecap="round"
      />

      {/* نوار نقاله ورودی / شستشو */}
      <g className="stroke-border fill-secondary">
        <rect
          x={60}
          y={150}
          width={150}
          height={30}
          rx={6}
          className="fill-secondary stroke-border"
          strokeWidth={1.5}
        />
        <rect
          x={70}
          y={110}
          width={60}
          height={40}
          rx={6}
          className="fill-secondary stroke-border"
          strokeWidth={1.5}
        />
        {/* دوش آب */}
        <line
          x1={100}
          y1={90}
          x2={100}
          y2={110}
          className="stroke-border"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <line
          x1={92}
          y1={110}
          x2={92}
          y2={122}
          className="stroke-border/70"
          strokeWidth={1.2}
        />
        <line
          x1={100}
          y1={110}
          x2={100}
          y2={124}
          className="stroke-border/70"
          strokeWidth={1.2}
        />
        <line
          x1={108}
          y1={110}
          x2={108}
          y2={122}
          className="stroke-border/70"
          strokeWidth={1.2}
        />
        <text
          x={135}
          y={145}
          className="fill-foreground text-[9px] font-semibold"
          textAnchor="middle"
        >
          WASHING
        </text>
      </g>

      {/* کراشر */}
      <g className="stroke-border fill-secondary">
        <rect
          x={250}
          y={130}
          width={120}
          height={70}
          rx={10}
          className="fill-secondary stroke-border"
          strokeWidth={1.8}
        />
        <rect
          x={258}
          y={138}
          width={104}
          height={36}
          rx={7}
          className="fill-background stroke-border"
          strokeWidth={1.4}
        />
        {/* تیغه‌های خردکن */}
        <line
          x1={270}
          y1={156}
          x2={350}
          y2={156}
          className="stroke-border"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={280}
          y1={150}
          x2={280}
          y2={162}
          className="stroke-border"
          strokeWidth={1.4}
        />
        <line
          x1={295}
          y1={150}
          x2={295}
          y2={162}
          className="stroke-border"
          strokeWidth={1.4}
        />
        <line
          x1={310}
          y1={150}
          x2={310}
          y2={162}
          className="stroke-border"
          strokeWidth={1.4}
        />
        <line
          x1={325}
          y1={150}
          x2={325}
          y2={162}
          className="stroke-border"
          strokeWidth={1.4}
        />
        <text
          x={310}
          y={210}
          className="fill-foreground text-[9px] font-semibold"
          textAnchor="middle"
        >
          CRUSHER
        </text>
      </g>

      {/* تغلیظ کننده (اواپراتور) */}
      <g className="stroke-border fill-secondary">
        <rect
          x={410}
          y={110}
          width={80}
          height={110}
          rx={12}
          className="fill-secondary stroke-border"
          strokeWidth={1.8}
        />
        <rect
          x={420}
          y={120}
          width={60}
          height={50}
          rx={10}
          className="fill-background stroke-border"
          strokeWidth={1.4}
        />
        {/* لوله خروج بخار */}
        <path
          d="M 450 110 C 470 90 510 90 530 110"
          className="fill-none stroke-border"
          strokeWidth={2}
        />
        <rect
          x={530}
          y={110}
          width={18}
          height={40}
          rx={4}
          className="fill-secondary stroke-border"
          strokeWidth={1.4}
        />
        <text
          x={450}
          y={210}
          className="fill-foreground text-[9px] font-semibold"
          textAnchor="middle"
        >
          EVAPORATOR
        </text>
      </g>

      {/* پرکن و دربند */}
      <g className="stroke-border fill-secondary">
        <rect
          x={580}
          y={120}
          width={80}
          height={100}
          rx={10}
          className="fill-secondary stroke-border"
          strokeWidth={1.6}
        />
        {/* نازل‌ها */}
        <line
          x1={620}
          y1={125}
          x2={620}
          y2={150}
          className="stroke-border"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={605}
          y1={125}
          x2={605}
          y2={145}
          className="stroke-border/70"
          strokeWidth={1.4}
        />
        <line
          x1={635}
          y1={125}
          x2={635}
          y2={145}
          className="stroke-border/70"
          strokeWidth={1.4}
        />
        {/* ردیف بطری‌ها */}
        <rect
          x={590}
          y={170}
          width={60}
          height={10}
          rx={3}
          className="fill-background stroke-border"
          strokeWidth={1.2}
        />
        <circle cx={598} cy={175} r={3} className="fill-primary" />
        <circle cx={612} cy={175} r={3} className="fill-primary" />
        <circle cx={626} cy={175} r={3} className="fill-primary" />
        <circle cx={640} cy={175} r={3} className="fill-primary" />
        <text
          x={620}
          y={210}
          className="fill-foreground text-[9px] font-semibold"
          textAnchor="middle"
        >
          FILL &amp; CLOSING
        </text>
      </g>

      {/* بخش بسته‌بندی و کامیون */}
      <g className="stroke-border fill-secondary">
        {/* پالت بسته‌ها */}
        <rect
          x={710}
          y={170}
          width={70}
          height={18}
          rx={4}
          className="fill-secondary stroke-border"
          strokeWidth={1.4}
        />
        <rect
          x={716}
          y={162}
          width={18}
          height={12}
          rx={2}
          className="fill-background stroke-border"
          strokeWidth={1.1}
        />
        <rect
          x={738}
          y={162}
          width={18}
          height={12}
          rx={2}
          className="fill-background stroke-border"
          strokeWidth={1.1}
        />
        {/* کامیون */}
        <rect
          x={745}
          y={130}
          width={110}
          height={40}
          rx={6}
          className="fill-secondary stroke-border"
          strokeWidth={1.6}
        />
        <rect
          x={755}
          y={135}
          width={50}
          height={25}
          rx={4}
          className="fill-background stroke-border"
          strokeWidth={1.2}
        />
        <circle cx={765} cy={172} r={7} className="fill-background stroke-border" strokeWidth={1.6}/>
        <circle cx={815} cy={172} r={7} className="fill-background stroke-border" strokeWidth={1.6}/>
        <text
          x={800}
          y={210}
          className="fill-foreground text-[9px] font-semibold"
          textAnchor="middle"
        >
          LOADING &amp; SHIPPING
        </text>
      </g>

      {/* فلش‌های جریان خط تولید */}
      <g className="fill-primary/80">
        <polygon points="210,165 230,165 230,160 245,170 230,180 230,175 210,175" />
        <polygon points="370,165 390,165 390,160 405,170 390,180 390,175 370,175" />
        <polygon points="530,165 550,165 550,160 565,170 550,180 550,175 530,175" />
        <polygon points="670,165 690,165 690,160 705,170 690,180 690,175 670,175" />
      </g>

      {/* گوجه متحرک روی خط */}
      <g>
        <circle r={11} className="fill-primary">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="7s"
            repeatCount="indefinite"
            keyTimes="0;0.2;0.4;0.6;0.8;1"
            values="80 165; 190 165; 330 165; 485 165; 640 165; 80 165"
          />
        </circle>
        {/* برگ کوچک روی گوجه */}
        <path
          d="M -4 -11 C -1 -14 1 -14 4 -11 C 1 -8 -1 -8 -4 -11 Z"
          className="fill-background/80"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="7s"
            repeatCount="indefinite"
            keyTimes="0;0.2;0.4;0.6;0.8;1"
            values="80 165; 190 165; 330 165; 485 165; 640 165; 80 165"
          />
        </path>
      </g>
    </svg>
  );
}
