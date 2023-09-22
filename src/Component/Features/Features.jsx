import { RiCheckboxCircleFill } from 'react-icons/ri';

const Features = ({features}) => {
    return (
        <div className="py-1 flex items-center gap-2">
            <RiCheckboxCircleFill className='text-green-700'></RiCheckboxCircleFill>
            {features}
        </div>
    );
};

export default Features;