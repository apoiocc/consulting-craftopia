
interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="relative min-h-[40vh] flex items-center overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob-1 animate-float" />
        <div className="blob-2 animate-float" />
        <div className="blob-3 animate-float" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-primary mb-4">{title}</h1>
          <p className="text-xl text-primary/80">{description}</p>
        </div>
      </div>
    </div>
  );
};
