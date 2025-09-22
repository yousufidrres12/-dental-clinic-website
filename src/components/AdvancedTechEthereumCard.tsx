import React from "react";
import "./AdvancedTechEthereumCard.css";
import { Zap } from "lucide-react";

interface AdvancedTechEthereumCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}

const AdvancedTechEthereumCard: React.FC<AdvancedTechEthereumCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="eth-card">
      <div className="eth-card-img">
        {icon || <Zap size={48} />}
      </div>
      <div className="eth-card-head">{title}</div>
      <div className="eth-card-hidden">
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default AdvancedTechEthereumCard;
