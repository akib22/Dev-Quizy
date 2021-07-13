import Card from '../components/Card';
import topics from '../seed/topics.json';

export default function Topics() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h1 className="text-blue-500 font-semibold text-5xl tracking-wide">Select a topic</h1>
        <h4 className="text-blue-500 text-2xl">Know your strength and weakness.</h4>
      </div>
      <div className="mt-10 flex items-center justify-center flex-wrap">
        {topics.map(({ name, icon }) => (
          <Card key={name} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
}
