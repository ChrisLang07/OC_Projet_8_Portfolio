import ArrowUp from '../components/ArrowUp';
import '../assets/scss/components/NoPage.scss';

export default function NoPage() {
    return (
        <div className="nopage">
             <h1 className='number'>404</h1>
             <span className='oups'>Oups! Nothing here...</span>
             <ArrowUp />
        </div>
    )
};