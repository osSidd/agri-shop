import { Button, Heading, Input } from "@chakra-ui/react";
import useNewsLetter from "../../hooks/newsletters/useNewsletter";

export default function NewsLetters(){

    const {subscriberRef, addSubscriber} = useNewsLetter()

    return (
        <form onSubmit={addSubscriber}>
            <Heading as='h2' fontSize='xl'>Subscribe to my newsletters</Heading>
            <Input
                type="email"
                ref={subscriberRef}
                placeholder="enter your email address"
                mt={4}
            />
            <Button mt={3} type="submit" colorScheme="blue">Subscribe</Button>
        </form>
    )
}