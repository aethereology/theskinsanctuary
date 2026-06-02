interface ReviewCardProps {
  quote: string;
  reviewer?: string;
  service?: string;
}

export default function ReviewCard({ quote, reviewer, service }: ReviewCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="font-serif text-base text-cocoa italic mb-4">"{quote}"</p>
      <div className="flex items-center justify-between text-xs text-text-secondary">
        {reviewer && <span className="font-medium">{reviewer}</span>}
        {service && (
          <span className="bg-clay/10 text-clay px-2 py-1 rounded text-xs font-medium">
            {service}
          </span>
        )}
      </div>
    </div>
  );
}
