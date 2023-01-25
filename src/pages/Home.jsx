import { logements } from '../datas/logements.json'
import Card from '../components/Card/index'

function Logements() {
    return (
        <div>
            <h1>Page d'accueil</h1>
            {logements.map((logement, index) => (
                <Card
                    key={`${logement.name}-${index}`}
                    label={logement.jobTitle}
                    picture={logement.picture}
                    title={logement.name}
                />
            ))}
        </div>
    )
}

export default Logements