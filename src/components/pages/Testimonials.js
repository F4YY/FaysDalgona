import React from 'react';
import '../styles/Testimonials.css';
import { MenuAndRating, MenuNameRating, MenuPicName, Menupic, Profpic, StarRating, TestiProfpicName, Testicard, Testifeeds, Testipage } from '../styled/styled_testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const scrollRef = React.useRef(null);
  const [testi, setTesti] = React.useState([]);

React.useEffect(() => {
  fetch('https://fays-dalgona.onrender.com/Testimonials')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTesti(data);
    })
  }, []);

const renderStarRating = (rating) => {
  const starIcons = [];
  for (let i = 0; i < rating; i++) {
    starIcons.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        size='xl'
        color='#FFC107'
      />
    );
  }
  return starIcons;
};

return (
  <Testipage>
    <h1
      id="Testimonials-section"
      ref={scrollRef}
    >
      Testimonials
    </h1>
    <Testifeeds>
      {testi.slice(0, 5).map((feedback, index) => (
        <Testicard key={index}>
          <TestiProfpicName>
            <Profpic loading='lazy' src={require(`../images/${feedback.prof_pic}`)} alt={feedback.name} />
            <p>{feedback.name}</p>
          </TestiProfpicName>
          <MenuAndRating>
            <MenuPicName>
              <Menupic loading='lazy' src={require(`../images/${feedback.menu_pic}`)} alt={feedback.menu_name} />
              <MenuNameRating>
                <p>{feedback.menu_name}</p>
                <StarRating>
                  {renderStarRating(parseInt(feedback.star_rating))}
                </StarRating>
              </MenuNameRating>
            </MenuPicName>
            <q>{feedback.review}</q>
          </MenuAndRating>
        </Testicard>
      ))}
    </Testifeeds>
  </Testipage>
);
}
export default Testimonials;