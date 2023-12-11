import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function BlogList({children,next,handleMoreBlog,handleLessBlog,blogs}){
    return(
        <Container>
            <div className="bloglist-wrapper">
                <div className="blog-list">
                    {children}
                </div>
                <div className="load-more">
                    {next < blogs.length && (
                        <Button
                            className="mt-4"
                            onClick={handleMoreBlog}
                        >
                            Load more
                        </Button>
                    )}
                    {/* {next > blogs.length && (
                        <Button
                            className="mt-4"
                            onClick={handleLessBlog}
                        >
                            Load less
                        </Button>
                    )} */}
                </div>
            </div>
        </Container>
    )
}