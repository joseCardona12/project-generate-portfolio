interface IBarLoadingProps {
  width: string;
}
export default function BarLoading({ width = "10.6666" }: IBarLoadingProps) {
  console.log("width", width);
  return (
    <div className="bg-[var(--color-black-light)] h-[10px] rounded-[10px] w-[100%] mb-4">
      <div
        className={`bg-[var(--color-purple)] h-[10px] rounded-[10px] transition-all .4s ease-in`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
