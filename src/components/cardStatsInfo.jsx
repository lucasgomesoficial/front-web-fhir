import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function CardStatsInfo({ title, msg, description, iconCard: Icon }) {
  return (
    <Card className="w-full h-44">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-2xl">{title}</CardTitle>
        <Icon />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="text-4xl font-bold">{msg}</div>
        {description && (
          <p className="text-xl text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
