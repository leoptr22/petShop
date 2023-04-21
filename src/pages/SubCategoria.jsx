import { useParams } from "react-router-dom";
import ListPosts from "../componentes/listPost";

const subCategoria = () => {

    const {subcategoria} = useParams ()

    return (
        <ListPosts url={`/posts?subcategoria=${subcategoria}` } />
    )
}

export default subCategoria;