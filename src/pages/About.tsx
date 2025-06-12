export default function About() {
  return (
    <section className="flex flex-col items-center pt-12 min-h-[60vh] px-4">
      <div className="w-full max-w-xl bg-card rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          About the Project
        </h1>
        <p className="text-muted-foreground text-center">
          This is a responsive about page styled with shadcn/ui theme tokens.
        </p>
      </div>
    </section>
  );
}
