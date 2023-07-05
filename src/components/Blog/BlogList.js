import { Container } from "react-bootstrap";

export default function BlogList({children}){
    return(
        <Container>
            <div className="blog-list">
                {children}
            </div>
        </Container>
    )
}