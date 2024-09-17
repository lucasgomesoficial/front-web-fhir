export function CardStatsInfo({ title, label, value }) {
  return (
    <div className="flex py-8 px-8">
      <div className="w-80 h-96 border rounded-lg border-solid border-inherit shadow-lg">
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-normal">{title}</h3>
        </div>
      </div>
    </div>
  );
}
