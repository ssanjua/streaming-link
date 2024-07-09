
import HeroForm from './forms/HeroForm'


export default async function Hero() {

  
  return (
    <section className="pt-32">
      <div className="max-w-sm mb-6">
        <h1 className="text-5xl font-bold ">
          Slogan de que esto  <br />
          es lo mejor
        </h1>
        <h2 className="text-gray text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit quaerat nostrum tenetur, eveniet ratione harum blanditiis reiciendis nisi nobis quisquam. Sequi voluptates.
        </h2>
      </div>
      <HeroForm user="ssanjua" />
      
    </section>
  )
}
