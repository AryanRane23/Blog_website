// Import FontAwesomeIcon component
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<FontAwesomeIcon icon="fa-thin fa-comment" />

const Logo = () => {
  return (
    <div>
         <FontAwesomeIcon icon={faComment} size="2x" className=" absolute top-3.5 "  />
    </div>
  )
}

export default Logo
