

export function Hero(){

    const imgs = {
        Jenny: "https://res.cloudinary.com/avigail/image/upload/v1705961424/finder/fxlqkbgboxcspwtpdp4g.png",
        Jordan: "https://res.cloudinary.com/avigail/image/upload/v1705961408/finder/ez0gpip0c8pbev389tqd.png",
        Scarlett: "https://res.cloudinary.com/avigail/image/upload/v1705961374/finder/wvirpdyv7djsc1ai56rp.png",
        Christina: "https://res.cloudinary.com/avigail/image/upload/v1705961350/finder/kgdg1tlpzl6etitvw5td.png",
        Collnstark: 'https://res.cloudinary.com/avigail/image/upload/v1705961333/finder/izp1tdm8yqxflgtcgi73.png'
    }
    
    return <section className="hero full">
        <img src={imgs.Jenny}/>
    </section>
}