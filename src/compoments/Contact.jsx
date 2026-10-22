export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Travaillons ensemble
        </h2>

        {/* Phrase d'accroche */}
        <p className="text-gray-400 mb-10 text-lg">
          Une idée de projet ? Une opportunité ? N'hésite pas à me contacter.
        </p>

        {/* Les 3 liens (à toi de compléter avec les bons href) */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          
          {/* Email */}
          <a 
            href="mailto:doumbiaissouf@gmail.com" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            📧 Mon Email
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/doumbia-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg border border-gray-700 transition-colors"
          >
            💼 LinkedIn
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/DOU840" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg border border-gray-700 transition-colors"
          >
            💻 GitHub
          </a>

        </div>
      </div>
    </section>
  )
}