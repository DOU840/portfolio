export default function Footer() {
  // On récupère l'année actuelle automatiquement
  const anneeActuelle = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 py-6 text-center border-t border-gray-800">
      <p className="text-gray-500 text-sm">
        © {anneeActuelle} - Conçu et développé par <span className="text-white font-medium">Issouf</span>
      </p>
    </footer>
  )
}