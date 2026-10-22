
export default function Hero() {
  return (
    // Ce conteneur gère le fond sombre et centre le texte
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      
      {/* Ton nom, en très grand et en gras */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Nom : Issouf
      </h1>

      {/* Ton titre, avec une couleur légèrement atténuée */}
      <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
        Développeur Web Full-Stack
      </h2>

      {/* Une phrase d'accroche (placeholder pour l'instant) */}
      <p className="text-center text-gray-500 max-w-xl">
        Je conçois des applications web modernes, performantes et centrées sur l'utilisateur.
      </p>

      <a 
  href="#projects" 
  className="mt-8 bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-lg transition-colors"
>
  Voir mes projets
</a>

    </section>
  )
}