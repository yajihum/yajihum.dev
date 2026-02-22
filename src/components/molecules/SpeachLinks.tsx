import { ArrowUpRight } from 'lucide-react';
import { SpeakerDeckEmbedding } from '../../speacker-deck';

type Props = {
  speackerDeckEmbeddings: SpeakerDeckEmbedding[];
  sliceCount?: number;
  className?: string;
};

export default function SpeachLinks({
  speackerDeckEmbeddings,
  sliceCount = 1,
  className,
}: Props) {
  if (!speackerDeckEmbeddings || speackerDeckEmbeddings.length <= 0)
    return null;

  return (
    <div className={className}>
      {speackerDeckEmbeddings.slice(0, sliceCount).map((speach) => (
        <div key={speach.title} className="grid grid-cols-1 gap-3">
          {/* Slide embed */}
          <div className="overflow-hidden rounded-xl">
            {speach.embedding}
          </div>

          {/* Title link */}
          <a
            href={speach.speakerDeckUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
          >
            {speach.title}
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </div>
      ))}
    </div>
  );
}
