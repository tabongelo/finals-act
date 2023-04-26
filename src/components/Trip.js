import TripData from "./TripData";
import "./TripStyle.css"
import Map1 from "../assets/Luzon.jpg"
import Map2 from "../assets/Visayas.jpg"
import Map3 from "../assets/Mindanao.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1> Recent Trips </h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Map1}
                heading = "Trip in Luzon"
                text = "Luzon is the largest and most populous island in the Philippines. Located in the northern portion of the Philippines archipelago, it is the economic and political center of the nation, being home to the country's capital city, Manila, as well as Quezon City, the country's most populous city. With a population of 64 million as of 2021, it contains 52.5% of the country's total population and is the fourth most populous island in the world. It is the 15th largest island in the world by land area."
                />

                <TripData
                image={Map2}
                heading = "Trip in Visayas"
                text = "The Visayas, or the Visayan Islands, are one of the three principal geographical divisions of the Philippines, along with Luzon and Mindanao. Located in the central part of the archipelago, it consists of several islands, primarily surrounding the Visayan Sea, although the Visayas are also considered the northeast extremity of the entire Sulu Sea. Its inhabitants are predominantly the Visayan peoples."
                />

                <TripData
                image={Map3}
                heading = "Trip in Mindanao"
                text = "Mindanao is the second-largest island in the Philippines, after Luzon, and seventh-most populous island in the world. Located in the southern region of the archipelago, the island is part of an island group of the same name that also includes its adjacent islands, notably the Sulu Archipelago. According to the 2020 census, Mindanao has a population of 26,252,442 people, while the entire island group has an estimated population of 27,021,036 according to the 2021 census."
                />
            </div>
        </div>
    )
}

export default Trip;