import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import Button from "../components/Button";


function ButtonPage() {
    return <div>
        <div>
            <Button success className='mb-5'> <GoBell/> Click</Button>
        </div>
        <div>
            <Button secondary > <GoCloudDownload/> Clicar</Button>
        </div>
        <div>
            <Button danger ><GoDatabase/> Clicando</Button>
        </div>
        <div>
            <Button warning > Clicado</Button>
        </div>
        <div>
            <Button primary > Clique</Button>
        </div>

    </div>;
}

export default ButtonPage;