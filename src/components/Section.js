export default function Section({ className, children, style }) {
  return (
    <section className={className} style={style}>
      { children }
    </section>
  );
}
