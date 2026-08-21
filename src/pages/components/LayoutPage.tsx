import { Container, Grid, Flex, Section } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const gridUsageCode = `import { Grid } from "@/components/Layout/Layout";

<Grid cols={3} gap="md">
  <div className="p-4 bg-indigo-500 text-white rounded-lg text-center font-semibold">Column 1</div>
  <div className="p-4 bg-indigo-600 text-white rounded-lg text-center font-semibold">Column 2</div>
  <div className="p-4 bg-indigo-700 text-white rounded-lg text-center font-semibold">Column 3</div>
</Grid>`;

  const flexUsageCode = `import { Flex } from "@/components/Layout/Layout";

<Flex direction="row" justify="between" align="center" gap="md" className="p-4 bg-slate-900 rounded-lg">
  <span className="text-white font-bold">Brand Logo</span>
  <Flex direction="row" gap="sm">
    <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">Home</button>
    <button className="px-3 py-1 bg-slate-700 text-white rounded text-sm">About</button>
  </Flex>
</Flex>`;

  const propsData = [
    {
      prop: "Container.maxWidth",
      type: '"sm" | "md" | "lg" | "xl" | "full"',
      default: '"xl"',
      description: "Controls the maximum width constraint of the centered layout container.",
    },
    {
      prop: "Grid.cols",
      type: "1 | 2 | 3 | 4 | 6 | 12",
      default: "3",
      description: "Number of grid columns on medium/desktop screens.",
    },
    {
      prop: "Grid.gap",
      type: '"none" | "sm" | "md" | "lg" | "xl"',
      default: '"md"',
      description: "Gap spacing size between grid items.",
    },
    {
      prop: "Flex.direction",
      type: '"row" | "col" | "rowReverse" | "colReverse"',
      default: '"row"',
      description: "Flexbox direction orientation.",
    },
    {
      prop: "Flex.justify",
      type: '"start" | "center" | "end" | "between" | "around"',
      default: '"start"',
      description: "Horizontal alignment distribution along the main axis.",
    },
    {
      prop: "Section.variant",
      type: '"default" | "muted" | "dark"',
      default: '"default"',
      description: "Background color theme for full-width page sections.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Layout
        </h1>
        <p className="text-lg text-gray-600 dark:text-slate-300">
          Primitive components (Container, Grid, Flex, Section) for structured responsive layouts.
        </p>
      </header>

      {/* Grid Layout Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Grid Layout
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Create responsive column grids with custom gap spacing.
        </p>
        <ComponentDemo code={gridUsageCode}>
          <div className="w-full">
            <Grid cols={3} gap="md">
              <div className="p-6 bg-indigo-500 text-white rounded-lg text-center font-semibold shadow-md">
                Column 1
              </div>
              <div className="p-6 bg-indigo-600 text-white rounded-lg text-center font-semibold shadow-md">
                Column 2
              </div>
              <div className="p-6 bg-indigo-700 text-white rounded-lg text-center font-semibold shadow-md">
                Column 3
              </div>
            </Grid>
          </div>
        </ComponentDemo>
      </section>

      {/* Flex Layout Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Flex Layout
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Easily align, justify, and stack items with flexbox helpers.
        </p>
        <ComponentDemo code={flexUsageCode}>
          <div className="w-full">
            <Flex
              direction="row"
              justify="between"
              align="center"
              gap="md"
              className="p-4 bg-slate-900 rounded-lg shadow-lg"
            >
              <span className="text-white font-bold text-lg">EaseUI Header</span>
              <Flex direction="row" gap="sm">
                <div className="px-3 py-1.5 bg-indigo-600 text-white rounded text-sm font-medium">
                  Docs
                </div>
                <div className="px-3 py-1.5 bg-slate-700 text-white rounded text-sm font-medium">
                  Components
                </div>
              </Flex>
            </Flex>
          </div>
        </ComponentDemo>
      </section>

      {/* Section & Container Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Section & Container
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Wrap content sections with consistent vertical padding and max-width boundaries.
        </p>
        <ComponentDemo code={`<Section variant="muted" padding="sm"><Container maxWidth="md">Content</Container></Section>`}>
          <div className="w-full">
            <Section variant="muted" padding="sm" className="rounded-xl border border-gray-200 dark:border-slate-800">
              <Container maxWidth="md" className="text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Muted Section Box</h4>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">
                  Constrained inside a medium Container with responsive padding.
                </p>
              </Container>
            </Section>
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

export default LayoutPage;
