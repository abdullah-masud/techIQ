import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h1 className='my-3'>FAQ</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h6>What is Context API ?</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Context API is used to share data globally for a tree for React components. This is a different approach to prop drilling. In prop drilling, we pass the data from one part the component to another by going through other component that do not need the data. But we don't have to do that in Context API. We may construct a context in the parent element and accept the data from whatever component we like.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h6>Difference between Inline, Blocks and Inline-Blocks</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        <strong>Inline</strong> element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height.<br />
                        <strong>block</strong>  element will start on a new line and occupy the full width available. And you can set width and height values.<br />
                        <strong>Inline-block</strong> element formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>What is Semantic Tag ?</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page
                        Elements such as <code>header</code>, <code>footer</code> and <code>main</code> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;