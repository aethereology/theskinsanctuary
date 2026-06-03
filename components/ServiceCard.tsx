import BookingButton from "./BookingButton";

interface ServiceCardProps {
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
  ctaLabel?: string;
  bookingUrl?: string;
}

export default function ServiceCard({
  name,
  price,
  description,
  featured = false,
  ctaLabel,
  bookingUrl,
}: ServiceCardProps) {
  if (featured) {
    return (
      <div className="flex h-full flex-col bg-surface rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="font-serif text-xl text-cocoa mb-3">{name}</h3>
        <p className="text-clay font-medium text-base mb-4">{price}</p>
        {description && (
          <p className="text-text-secondary text-sm mb-6 leading-relaxed">{description}</p>
        )}
        {ctaLabel && (
          <div className="mt-auto">
            <BookingButton label={ctaLabel} href={bookingUrl} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center py-3 border-b border-hairline/40">
      <div>
        <h4 className="text-text font-medium text-sm">{name}</h4>
      </div>
      <p className="text-clay font-medium text-sm">{price}</p>
    </div>
  );
}
