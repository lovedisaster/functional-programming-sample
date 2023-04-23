import { Collection } from '../types';
import { getMappedData } from './getMappedData';

type Prop = {
    data: Collection
}

const Foldable = ( {data } : Prop ) => {
    const mapData = getMappedData(data);
    return (
        <div>
            <h2>Foldable use case</h2>
            {
                mapData.fold<JSX.Element>(
                () => <>Nothing is found</>,
                (d) => <ul>
                    {
                        d.savedProperties.map(p => <li key={p.id + p.address}>{p.address}</li>)
                    }
                </ul>
                )
            }
        </div>
    );
};

export default Foldable;