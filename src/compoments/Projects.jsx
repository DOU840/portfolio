// On définit les données de tes projets dans un tableau.
// Plus tard, tu pourras en ajouter d'autres facilement ici.
const mesProjets = [
  {
    titre: "App de Gestion de Tâches",
    description: "Application full-stack (React, Node.js, MongoDB) avec authentification JWT. Permet de créer, modifier et supprimer des tâches.",
    lien: "https://issouf-doumbia.netlify.app", 
    technos: ["React", "Node.js", "MongoDB", "Tailwind"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Le titre de la section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Mes Projets
        </h2>

        {/* La grille qui va contenir tes cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* On boucle sur notre tableau de projets */}
          {mesProjets.map((projet, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              
              {/* Un bloc de couleur pour faire office d'image pour l'instant */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Visuel du projet</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{projet.titre}</h3>
                <p className="text-gray-400 mb-4">{projet.description}</p>
                
                {/* Les badges des technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projet.technos.map((techno, i) => (
                    <span key={i} className="bg-gray-700 text-blue-300 text-sm px-3 py-1 rounded-full">
                      {techno}
                    </span>
                  ))}
                </div>

                {/* Le bouton vers le site */}
                <a 
                  href={projet.lien} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Voir le projet
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}