import Blogbanner from "../Banner/Blogbanner";
import Relatedblog from "./Relatedblog";
import Catagorymenu from "../Cetagory/Catagorymenu";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import Commentform from "../Comment/Commentform";
import Comment from "../Comment/Comment";

export default function Blog(){
    return(
        <div>
            <Blogbanner/>
            <div className="blog-details">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan. Suspendisse sed tortor eget justo aliquam euismod. Morbi ut massa et neque iaculis lacinia a eu est. Etiam nec enim id mi maximus consequat sed ut tortor. Nullam velit ipsum, ornare id leo a, cursus mollis nunc. Etiam dignissim nulla vel ante mollis, lobortis aliquam lectus egestas. Vivamus sit amet libero sit amet lorem dignissim varius. Nam id dictum sem. Maecenas eget nulla bibendum, accumsan arcu ac, vehicula risus. Nulla laoreet elit in lectus cursus, at tristique diam fringilla. Donec blandit, lacus sed mollis molestie, lorem lacus feugiat tortor, nec tincidunt libero dolor sit amet nulla. Sed id mi sit amet nibh bibendum aliquet. Sed scelerisque aliquam nulla, ultrices egestas elit vestibulum et. Praesent efficitur viverra ipsum a molestie. Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id luctus eget, fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc vitae justo dapibus dignissim. Vivamus sagittis dignissim massa, auctor aliquam nibh aliquam ut. Nunc accumsan ex ligula, in malesuada sapien consectetur in. Praesent non lectus sed dolor imperdiet mollis a sit amet sem. Vivamus eu commodo ligula. Phasellus in lacus eu urna ullamcorper lacinia. Duis tincidunt fringilla aliquet. Vivamus id luctus tellus. Vestibulum maximus ipsum lacus, tempus suscipit augue fermentum ut. Suspendisse posuere mi lacus, vitae fringilla leo gravida eu. Donec a nisi vel ligula fringilla tempus id vitae nibh. Sed sollicitudin ante ultrices purus auctor auctor. Etiam turpis sem, mattis sit amet purus id, dapibus euismod libero. Donec bibendum urna quis orci molestie sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id purus vel sapien pretium varius eu id risus. Vivamus sit amet nibh sit amet eros porta iaculis. Ut interdum diam nec imperdiet elementum. Proin condimentum faucibus placerat. Donec massa justo, porttitor tincidunt eros a, vehicula malesuada tortor. Praesent nec sem ut justo efficitur tempus.
                Donec bibendum urna quis orci molestie sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id purus vel sapien pretium varius eu id risus. Vivamus sit amet nibh sit amet eros porta iaculis. Ut interdum diam nec imperdiet elementum. Proin condimentum faucibus placerat. Donec massa justo, porttitor tincidunt eros a, vehicula malesuada tortor. Praesent nec sem ut justo efficitur tempus. Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id luctus eget, fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc vitae justo dapibus dignissim. Vivamus sagittis dignissim massa, auctor aliquam nibh aliquam ut. Nunc accumsan ex ligula, in malesuada sapien consectetur in. Praesent non lectus sed dolor imperdiet mollis a sit amet sem. Vivamus eu commodo ligula. Phasellus in lacus eu urna ullamcorper lacinia. Duis tincidunt fringilla aliquet. Vivamus id luctus tellus. Vestibulum maximus ipsum lacus, tempus suscipit augue fermentum ut. Suspendisse posuere mi lacus, vitae fringilla leo gravida eu.
                Donec bibendum urna quis orci molestie sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id purus vel sapien pretium varius eu id risus. Vivamus sit amet nibh sit amet eros porta iaculis. Ut interdum diam nec imperdiet elementum. Proin condimentum faucibus placerat. Donec massa justo, porttitor tincidunt eros a, vehicula malesuada tortor. Praesent nec sem ut justo efficitur tempus.</p>
            </div>
            <div className="blog-details-footer">
                <Catagorymenu/>
                <Socialmediaicon/>
            </div>
            <Comment/>
            <Commentform/>
            <Relatedblog/>
        </div>
    )
}