import React from "react";
import { Link } from "react-router-dom";
import "./MemoryMainPage.css";
import pic1 from './tilePictures/IMG_1095.png';
import pic2 from './tilePictures/IMG_1096.png';
import pic3 from './tilePictures/IMG_1097.png';
import pic4 from './tilePictures/IMG_1098.png';
import pic5 from './tilePictures/IMG_1099.png';
import pic6 from './tilePictures/IMG_1100.png';
import pic7 from './tilePictures/IMG_1101.png';
import pic8 from './tilePictures/IMG_1102.png';

const ActivistInfo = ({ image, name, description }) => (
  <div className="activist-info">
    <div className="activist-image">
      <img src={image} alt={name} />
    </div>
    <div className="activist-description">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const MemoryMainPage = () => {
  return (
    <div className="Memory Game Instructions">
      <h1>Conscious Connections</h1>
      <p>Conscious Connections is a memory card matching game where the objective is to match the cards with the same face of a person who has made a meaningful impact on the fight for social justice.</p>
      <div className="level-buttons">
        <Link to="/memoryGame/easy">
          <button>Easy</button>
        </Link>
        <Link to="/memoryGame/medium">
          <button>Medium</button>
        </Link>
        <Link to="/memoryGame/hard">
          <button>Hard</button>
        </Link>
      </div>
      <div className="back-buttons">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <h1>Women Activists</h1>
      <ActivistInfo
        image={pic1}
        name="Nancy Pelosi"
        description="Nancy Pelosi is a prominent American politician who has made significant contributions to social justice throughout her career. She is best known for her role as the first female Speaker of the House of Representatives, a position she has held multiple times. Pelosi's commitment to social justice is evident in her advocacy for healthcare reform, environmental protection, LGBTQ+ rights, and affordable education. Additionally, Pelosi has consistently championed legislation to address income inequality, support marginalized communities, and protect the rights of immigrants."
      />
      <ActivistInfo
        image={pic2}
        name="Chimamanda Ngozi Adichie"
        description="Chimamanda Ngozi Adichie is a highly acclaimed Nigerian writer and author known for her novels, essays, and speeches that explore themes of feminism, identity, and post-colonialism. Adichie's work has received international recognition and has had a profound impact on discussions related to gender and race. Chimamanda Ngozi Adichie's work has made a significant impact on contemporary literature, and she is recognized for her ability to address complex societal issues with clarity and insight. Her contributions to the feminist movement, as well as her novels and essays, continue to resonate with readers around the world."
      />
      <ActivistInfo
        image={pic3}
        name="Angela Davis"
        description="Angela Davis is an American political activist, scholar, and author known for her significant contributions to the civil rights and Black liberation movements, as well as her work in advocating for social and economic justice."
      />
      <ActivistInfo
        image={pic4}
        name="Amanda Gorman"
        description="Amanda Gorman is an American poet and activist who gained widespread recognition and acclaim for her poetry, particularly for her performance at the inauguration of President Joe Biden on January 20, 2021. Amanda Gorman's eloquent and powerful poetry has resonated with people of all ages and backgrounds, and she has become a symbol of hope, change, and the power of words to inspire and uplift in challenging times. Her work continues to be celebrated for its positive impact on society and its capacity to address pressing issues."
      />
      <ActivistInfo
        image={pic5}
        name="Malala Yousafzai"
        description="Malala Yousafzai is a Pakistani education activist who gained international recognition for her advocacy of girls' education in Pakistan. Malala has become an internationally recognized symbol of the struggle for girls' education and women's rights. She co-authored the memoir 'I Am Malala' and, in 2014, became the youngest-ever recipient of the Nobel Peace Prize at the age of 17."
      />
      <ActivistInfo
        image={pic6}
        name="Gloria Steinem"
        description="Gloria Steinem is an American feminist, journalist, and social and political activist who has been a prominent figure in the women's rights and social justice movements. Gloria Steinem's contributions to the feminist movement and her dedication to women's rights have left a lasting impact on society, and she remains a prominent and influential figure in the ongoing fight for gender equality and social justice."
      />
      <ActivistInfo
        image={pic7}
        name="Halima Aden"
        description="Halima Aden's career has helped change the fashion industry's perception of beauty and representation, emphasizing the importance of inclusivity and celebrating diverse backgrounds and cultures."
      />
      <ActivistInfo
        image={pic8}
        name="Ruth Bader Ginsburg"
        description="Ruth Bader Ginsburg, often referred to as 'RBG,' was an Associate Justice of the United States Supreme Court. Ruth Bader Ginsburg's legacy as a legal scholar and advocate for gender equality, civil rights, and social justice continues to influence the United States and beyond. Her dedication to these causes and her jurisprudence on the Supreme Court left an indelible mark on American law and society."
      />
    </div>
  );
};

export default MemoryMainPage;
