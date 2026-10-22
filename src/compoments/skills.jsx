
// la liste de mes competance
const mesCompetences = [
  { nom: "React", niveau: "Frontend" },
  { nom: "JavaScript", niveau: "Langage" },
  { nom: "Tailwind CSS", niveau: "Style" },
  { nom: "Express", niveau: "Backend" },
  { nom: "JWT", niveau: "Authentification" },
  { nom: "Git", niveau: "Versioning" },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Mes Compétences
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {mesCompetences.map((competence, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-all"
          >
            <h3 className="text-white font-bold text-lg">{competence.nom}</h3>
            <p className="text-gray-400 text-sm mt-1">{competence.niveau}</p>
          </div>
        ))}
      </div>
    </section>
  )
}