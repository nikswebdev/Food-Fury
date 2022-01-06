import classes from './ReviewBox.module.css';
import HeaderMedium from '../UI/HeaderMedium';
import Stars from './Stars/Stars';
import Feedback from './Feedback';
import ScrollContainer from '../UI/ScrollContainer';

const DUMMY_USERS = [{
  id: Math.random(),
  name: 'Jose',
  date: '12/21/21',
  comment: 'Great service and food',
  stars:5,
},
{
  id: Math.random(),
  name: 'Rick p',
  date: '12/28/21',
  comment: 'Burgers are awesome',
  stars: 4,
},
{
  id: Math.random(),
  name: 'Anne',
  date: '1/14/22',
  comment: 'Food was OK',
  stars: 3,
},
{
  id: Math.random(),
  name: 'Damien Dozier',
  date: '1/15/22',
  comment: 'Yeeeeah!!!!!!',
  stars: 5,
},
{
  id: Math.random(),
  name: 'Jessica P',
  date: '1/25/22',
  comment: 'Server was hilarious! 5/5!',
  stars: 5,
},
{
  id: Math.random(),
  name: 'Karen',
  date: '1/31/22',
  comment: 'If I could vote a zero, I WOULD!!',
  stars: 1,
},
{
  id: Math.random(),
  name: 'Greg',
  date: '2/5/22',
  comment: 'My wife was happy so I guess I am:)',
  stars: 4,
},
]

const ReviewBox = () => {

  const displayFeedBack = ()=>{
    return(
      DUMMY_USERS.map(user =>{
        return <Feedback stars = {user.stars} date = {user.date}
        name = {user.name} comment = {user.comment}/>
      })
    );
  }

  return (
    <div className={classes['review-box']}>
      <HeaderMedium>What people are saying</HeaderMedium>
      <Stars />
      <ScrollContainer noPadding = {true}>
        {displayFeedBack()}
      </ScrollContainer>
    </div>
  );
};

export default ReviewBox;
