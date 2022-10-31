export default function ISR({ time }) {
  return (
    <div>
      <h1>ISR Page</h1>
      <p>{time}</p>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 10,
  };
}
