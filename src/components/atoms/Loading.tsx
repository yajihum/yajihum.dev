export default function Loading() {
  return (
    <div className="flex justify-center" aria-label="読み込み中">
      <div className="h-12 w-12 animate-spin rounded-2xl bg-red-300" />
    </div>
  );
}
