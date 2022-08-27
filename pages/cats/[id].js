import Header from "../../component/Nav";
import CatInfo from "../../component/CatInfo"

export async function getServerSideProps(context){
    const res = await fetch(`http://localhost:3000/api/Cats/${context.query.id}`);
    const cats = await res.json();

  return {props: {cats}}
}

const Details = ({cats}) => {
    return ( 
        <>
            <Header/>
            <CatInfo props={cats}/>
        </>
     );
}
 
export default Details;