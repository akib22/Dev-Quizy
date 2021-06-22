import Nav from '../components/Nav';
import Button from '../components/Button';
import Footer from '../components/Footer';
import questionImg from '../assets/home.png';

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <main className="px-3 py-4 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full text-center md:text-left">
          <h1 className="text-3xl mb-1 md:text-5xl md:mb-3 tracking-wider">Test Your Skills</h1>
          <h1 className="text-3xl mb-1 md:text-5xl md:mb-3 tracking-wider">By Taking</h1>
          <h1 className="text-3xl mb-1 md:text-5xl md:mb-3 tracking-wider">Quizzes</h1>
          <Button content="Take a Quiz" />
        </div>
        <div className="w-full">
          <img src={questionImg} alt="Question" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
