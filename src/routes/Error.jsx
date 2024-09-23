import error from '../assets/ErrorImage.jpeg'
import { ErrorPageContainer } from '../css/ErrorStyle'

const Error = () =>{
    return(
        <>
            <ErrorPageContainer>
                <img src={error} alt="404 - ERROR" />
                <h1>PAGE NOT FOUND</h1>
            </ErrorPageContainer>
        </>
    )
}
export default Error