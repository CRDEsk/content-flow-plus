import { Skeleton } from '@/components/ui/skeleton';

export const BlogCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 overflow-hidden">
      <Skeleton className="w-full h-48 bg-zinc-800/50" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-4 w-24 bg-zinc-800/50" />
        <Skeleton className="h-6 w-full bg-zinc-800/50" />
        <Skeleton className="h-6 w-3/4 bg-zinc-800/50" />
        <Skeleton className="h-4 w-full bg-zinc-800/50" />
        <Skeleton className="h-4 w-5/6 bg-zinc-800/50" />
        <div className="flex items-center gap-4 pt-2">
          <Skeleton className="h-4 w-20 bg-zinc-800/50" />
          <Skeleton className="h-4 w-16 bg-zinc-800/50" />
        </div>
      </div>
    </div>
  );
};

export const BlogPostSkeleton = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Skeleton className="h-4 w-32 bg-zinc-800/50" />
          <Skeleton className="h-12 w-full bg-zinc-800/50" />
          <Skeleton className="h-6 w-48 bg-zinc-800/50" />
          <Skeleton className="h-64 w-full bg-zinc-800/50" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full bg-zinc-800/50" />
            <Skeleton className="h-4 w-full bg-zinc-800/50" />
            <Skeleton className="h-4 w-5/6 bg-zinc-800/50" />
            <Skeleton className="h-4 w-full bg-zinc-800/50" />
            <Skeleton className="h-4 w-4/5 bg-zinc-800/50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
};

