import { getMappedData } from './getMappedData';

type Prop = {
    data: string
}


const Functor = ({data} : Prop ) => {
    const mappedData = getMappedData(data);

    return (
        <div>
            <h2>Functor use case</h2> 
            {
                mappedData.fold<JSX.Element>(
                () => <>Empty address</>,
                (data) => <ul>
                    <li>Address: {data.address}</li>
                    <li>Suburb: {data.suburb}</li>
                    <li>State: {data.state}</li>
                </ul>
                )
            }
        </div>
    );
};

export default Functor;

// Question: What if the address is not valid? 