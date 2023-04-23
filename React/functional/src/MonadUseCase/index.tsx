import { getMappedData } from './getMappedData';

type Prop = {
    data: string
}

const Monad = ({data} : Prop ) => {
    const convertedData = getMappedData(data);

    return (
        <div>
            <h2>Monad use case</h2> 
            {
                convertedData.fold<JSX.Element>(
                () => <>Invalid address</>,
                (data) => <ul>
                    <li>Address: {data.address}</li>
                    <li>Suburb: {data.suburb}</li>
                    <li>State: {data.state}</li>
                    <li>Postcode: {data.postcode}</li>
                </ul>
                )
            }
        </div>
    );
};

export default Monad;


