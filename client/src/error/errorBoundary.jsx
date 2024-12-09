import { Component } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })

        console.log(error, errorInfo)
    }

    render(){
        return this.state.error ? <FallbackComponent state={this.state}/> : this.props.children
    }
}

function FallbackComponent({state}){
    return (
        <Box color='white' w='2xl' m='auto'>
            <Heading>Something went wrong</Heading>
            <details>
                {state.error && state.error.toString()}
                <br />
                <br />
                {state.errorInfo && state.errorInfo.componentStack}
            </details>
        </Box>
    )
}

export default ErrorBoundary