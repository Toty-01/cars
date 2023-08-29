import { Hero } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text container">
          <h1 className="text-4xl font-extrabold">Catalogue de véhicules</h1>
          <p>Rechercher parmis notre parc de voitures et SUV</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
