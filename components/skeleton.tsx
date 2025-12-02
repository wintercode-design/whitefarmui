import type React from "react";

function Skeleton({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`animate-pulse rounded-md bg-neutral-200 ${className}`}
      {...props}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex flex-col items-center gap-6 py-20 px-4">
      {/* Badge */}
      <Skeleton className="h-6 w-32 rounded-full" />
      {/* Heading */}
      <Skeleton className="h-12 w-full max-w-xl" />
      <Skeleton className="h-12 w-full max-w-md" />
      {/* Subheading */}
      <Skeleton className="h-5 w-full max-w-lg" />
      <Skeleton className="h-5 w-full max-w-sm" />
      {/* CTA Buttons */}
      <div className="flex gap-4 mt-4">
        <Skeleton className="h-11 w-32 rounded-lg" />
        <Skeleton className="h-11 w-32 rounded-lg" />
      </div>
      {/* Hero Image */}
      <Skeleton className="h-64 w-full max-w-4xl mt-8 rounded-xl" />
    </div>
  );
}

export function FeatureCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4 max-w-6xl mx-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-200"
        >
          {/* Icon */}
          <Skeleton className="h-12 w-12 rounded-lg" />
          {/* Title */}
          <Skeleton className="h-6 w-3/4" />
          {/* Description */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-4 max-w-6xl mx-auto">
      {/* Image */}
      <Skeleton className="h-64 w-full md:w-1/2 rounded-xl" />
      {/* Text Content */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-full max-w-sm" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-10 w-28 mt-2 rounded-lg" />
      </div>
    </div>
  );
}

export function TestimonialsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 max-w-6xl mx-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-200"
        >
          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, j) => (
              <Skeleton key={j} className="h-4 w-4 rounded" />
            ))}
          </div>
          {/* Quote */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          {/* Author */}
          <div className="flex items-center gap-3 mt-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LandingPageSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <FeatureCardsSkeleton />
      <ContentSkeleton />
      <TestimonialsSkeleton />
    </div>
  );
}

export { Skeleton };
