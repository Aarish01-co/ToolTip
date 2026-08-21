import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const positionsUsageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="Tooltip on Top" position="top">
  <Button variant="primary">Top Tooltip</Button>
</Tooltip>

<Tooltip content="Tooltip on Bottom" position="bottom">
  <Button variant="secondary">Bottom Tooltip</Button>
</Tooltip>

<Tooltip content="Tooltip on Left" position="left">
  <Button variant="outline">Left Tooltip</Button>
</Tooltip>

<Tooltip content="Tooltip on Right" position="right">
  <Button variant="dark">Right Tooltip</Button>
</Tooltip>`;

  const variantsUsageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="Dark Variant" variant="dark">
  <Button variant="dark">Dark Variant</Button>
</Tooltip>

<Tooltip content="Light Variant" variant="light">
  <Button variant="ghost">Light Variant</Button>
</Tooltip>

<Tooltip content="Primary Variant" variant="primary">
  <Button variant="primary">Primary Variant</Button>
</Tooltip>

<Tooltip content="Destructive Variant" variant="destructive">
  <Button variant="destructive">Destructive Variant</Button>
</Tooltip>`;

  const delayUsageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="Instant Tooltip (0ms)" delay={0}>
  <Button variant="outline">Instant (0ms)</Button>
</Tooltip>

<Tooltip content="Delayed Tooltip (500ms)" delay={500}>
  <Button variant="primary">Delayed (500ms)</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode",
      default: "-",
      description: "The text or component content displayed inside the tooltip popover.",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Determines where the tooltip appears relative to the target element.",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "destructive"',
      default: '"dark"',
      description: "The visual style theme of the tooltip popover.",
    },
    {
      prop: "delay",
      type: "number",
      default: "0",
      description: "Time delay in milliseconds before the tooltip becomes visible.",
    },
    {
      prop: "arrow",
      type: "boolean",
      default: "true",
      description: "Whether to render a pointer arrow pointing to the trigger element.",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The target element that triggers the tooltip on hover or focus.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tooltip
        </h1>
        <p className="text-lg text-gray-600 dark:text-slate-300">
          A popup helper that displays contextual information when hovering or focusing an element.
        </p>
      </header>

      {/* Positions Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Positions
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Tooltips can be positioned on the top, bottom, left, or right of the element.
        </p>
        <ComponentDemo code={positionsUsageCode}>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <Tooltip content="Tooltip on Top" position="top">
              <Button variant="primary" size="sm">
                Top Tooltip
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Bottom" position="bottom">
              <Button variant="secondary" size="sm">
                Bottom Tooltip
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Left" position="left">
              <Button variant="outline" size="sm">
                Left Tooltip
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Right" position="right">
              <Button variant="dark" size="sm">
                Right Tooltip
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Variants Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Variants
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Choose from different color themes to fit your UI context.
        </p>
        <ComponentDemo code={variantsUsageCode}>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <Tooltip content="Dark Theme Tooltip" variant="dark">
              <Button variant="dark" size="sm">
                Dark Variant
              </Button>
            </Tooltip>

            <Tooltip content="Light Theme Tooltip" variant="light">
              <Button variant="ghost" size="sm">
                Light Variant
              </Button>
            </Tooltip>

            <Tooltip content="Primary Theme Tooltip" variant="primary">
              <Button variant="primary" size="sm">
                Primary Variant
              </Button>
            </Tooltip>

            <Tooltip content="Destructive Theme Tooltip" variant="destructive">
              <Button variant="destructive" size="sm">
                Destructive Variant
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* Delay Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Display Delay
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Add a custom delay before the tooltip appears to avoid accidental popups.
        </p>
        <ComponentDemo code={delayUsageCode}>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <Tooltip content="Appears instantly!" delay={0}>
              <Button variant="outline" size="sm">
                Instant (0ms)
              </Button>
            </Tooltip>

            <Tooltip content="Appears after 500ms delay!" delay={500}>
              <Button variant="primary" size="sm">
                Delayed (500ms)
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
