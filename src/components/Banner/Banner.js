import { useState,useEffect } from "react";
import bannerimage from "../../assets/images/mocha.webp";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import Cetagory from "../Cetagory/Cetagory";
import { Link } from "react-router-dom";

export default function Banner({banner}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 

    const blog = {
        id: 1,
        title: "Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.",
        slug: "Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.",
        cetagory: 'Nature',
        describe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan.',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan. Suspendisse sed tortor eget justo aliquam euismod. Morbi ut massa et neque iaculis lacinia a eu est. Etiam nec enim id mi maximus consequat sed ut tortor. Nullam velit ipsum, ornare id leo a, cursus mollis nunc. Etiam dignissim nulla vel ante mollis, lobortis aliquam lectus egestas. Vivamus sit amet libero sit amet lorem dignissim varius. Nam id dictum sem. Maecenas eget nulla bibendum, accumsan arcu ac, vehicula risus. Nulla laoreet elit in lectus cursus, at tristique diam fringilla. Donec blandit, lacus sed mollis molestie, lorem lacus feugiat tortor, nec tincidunt libero dolor sit amet nulla. Sed id mi sit amet nibh bibendum aliquet. Sed scelerisque aliquam nulla, ultrices egestas elit vestibulum et. Praesent efficitur viverra ipsum a molestie. Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id luctus eget, fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc vitae justo dapibus dignissim. Vivamus sagittis dignissim massa, auctor aliquam nibh aliquam ut. Nunc accumsan ex ligula, in malesuada sapien consectetur in. Praesent non lectus sed dolor imperdiet mollis a sit amet sem. Vivamus eu commodo ligula. Phasellus in lacus eu urna ullamcorper lacinia. Duis tincidunt fringilla aliquet. Vivamus id luctus tellus. Vestibulum maximus ipsum lacus, tempus suscipit augue fermentum ut. Suspendisse posuere mi lacus, vitae fringilla leo gravida eu. ',
        date: '2 May 2023',
        time: '12:00'
      };
    const cetagory               = "History"
    useEffect(() => {
        if(banner === "HomeBanner"){
            setDisplayX("display");
        }
        else if(banner === "BlogBanner"){
            setDisplayY("display");
        }
    }, [banner]);
    
    return(
        <div className="banner-wrapper">
            <div className='banner-poster'>
                <img
                    className="banner-image"
                    src={bannerimage}
                    alt="Updating Blog" 
                />
            </div>
            <div className='banner-content'>
                <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                <div className='blog-info'>
                    <Cetagory cetagory={cetagory}/>
                    <p> - 13 May 2023 12:00pm</p>
                </div>
                <div className={'mt-3 '+displayX}>
                    <Link to={`/blog/${blog.slug}`}><a>Read more</a></Link>
                </div>
                <div className={displayY}>
                    <Socialmediaicon/>
                </div>
            </div>
        </div>
    )
}