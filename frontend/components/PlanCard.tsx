import { Check } from "lucide-react";

export interface PlanCardProps {
  name: string;
  price: string;
  features: string[];
  cta: string;
  onSelect?: () => void;
}

export const PlanCard = ({ name, price, features, cta, onSelect }: PlanCardProps) => (
  <div className="card flex flex-col justify-between gap-4">
    <div>
      <div className="text-lg font-semibold text-white">{name}</div>
      <div className="text-3xl font-bold text-primary-300">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {features.map(feature => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className="btn-primary" onClick={onSelect}>{cta}</button>
  </div>
);
