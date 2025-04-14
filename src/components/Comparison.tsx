import { Zap, Server } from "lucide-react";
interface Competitor {
  name: string;
  cpu: string;
  memory: string;
  storage: string;
  network: string;
  pricePerGb: string;
  performanceScore: number;
}
const competitors: Competitor[] = [{
  name: "Lightning Host",
  cpu: "Ryzen 9 5950X",
  memory: "DDR4 RAM",
  storage: "NVMe",
  network: "1Gbps",
  pricePerGb: "$1",
  performanceScore: 100
}, {
  name: "Apex Hosting",
  cpu: "AMD Ryzen 7 5800X",
  memory: "DDR4 RAM",
  storage: "SSD",
  network: "1Gbps",
  pricePerGb: "$5",
  performanceScore: 65
}, {
  name: "Bisect Hosting",
  cpu: "Intel Xeon E5-2643",
  memory: "DDR4 RAM",
  storage: "SSD",
  network: "1Gbps",
  pricePerGb: "$5",
  performanceScore: 45
}, {
  name: "Shockbyte",
  cpu: "Intel Xeon E-2236",
  memory: "DDR4 RAM",
  storage: "SSD",
  network: "1Gbps",
  pricePerGb: "$3",
  performanceScore: 30
}];
const CompetitorRow = ({
  competitor
}: {
  competitor: Competitor;
}) => {
  const isLightningHost = competitor.name === "Lightning Host";
  return <div className={`flex items-center gap-4 p-4 rounded-lg transition-all ${isLightningHost ? 'bg-lightning-500/10 border border-lightning-500/20' : 'hover:bg-white/5'}`}>
      <div className="w-48">
        <h3 className={`font-semibold ${isLightningHost ? 'text-lightning-400' : 'text-white'}`}>
          {competitor.name}
        </h3>
        <p className="text-white/50 text-sm">Game Hosting</p>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Server className="h-4 w-4 text-white/50" />
          <span className="text-white">{competitor.cpu}</span>
        </div>
        <div className="text-white/50 text-sm mt-1">
          {competitor.memory}, {competitor.storage}, {competitor.network}
        </div>
      </div>
      
      <div className="text-right w-32">
        <div className={`text-lg font-bold ${isLightningHost ? 'text-lightning-400' : 'text-white'}`}>
          {competitor.pricePerGb}/GB
        </div>
        <div className="text-white/50 text-sm">per GB</div>
      </div>
      
      <div className="w-48">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${isLightningHost ? 'bg-lightning-500' : 'bg-white/30'}`} style={{
          width: `${competitor.performanceScore}%`
        }} />
        </div>
        <div className="text-right text-sm text-white/50 mt-1">{competitor.performanceScore}%</div>
      </div>
    </div>;
};
const Comparison = () => {
  return <div className="bg-midnight py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="h-6 w-6 text-lightning-400" />
          <h2 className="text-2xl font-bold text-white">Performance Comparison</h2>
        </div>
        
        <div className="space-y-2">
          {competitors.map((competitor, index) => <CompetitorRow key={index} competitor={competitor} />)}
        </div>
        
        <p className="text-white/50 text-sm mt-6">* Please contact us if the info is inaccurate.</p>
      </div>
    </div>;
};
export default Comparison;