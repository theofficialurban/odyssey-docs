const GradColors: Record<string, [string, string]> = {
  IbizaSunset: ["#ee0979", "#ff6a00"],
  SublimeVivid: ["#FC466B", "#3F5EFB"],
};
export function getPreset(name: string): [string, string] | boolean {
  return GradColors[name] ?? false;
}
export default GradColors;
