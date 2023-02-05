import '../../styles/Rating.css'
 
function Rating({score}) {
    const stars = [];
    const colorStar = (r) => {<div key={r} className="rating rating__color"><i className="fa-solid fa-star" ></i></div>};
    const greyStar = (r) => {<div key={r + rate} className="rating rating__grey"><i className="fa-solid fa-star" ></i></div>};
    const rate = parseInt({score});
    let totalStar = 5 - rate;
    
    //ajout d'étoiles de couleurs en fonction du rate
    for(let s = 0; s < rate; s++){
        stars.push(colorStar(s))
    }

    // si le rate est inférieur à la note maximale (5) on ajoute des étoiles grises
    for(let gs = 0; gs < totalStar; gs++){
    stars.push(greyStar(gs))
  }

    return (
        <div className="rateBox">
            {stars}
        </div>
    )
}

export default Rating