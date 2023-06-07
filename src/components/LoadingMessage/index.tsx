import { LoadingWrapper, Spin } from './styles'

const LoadingMessage = () => {
  return (
    <LoadingWrapper>
      <div>
        <span>
          <Spin />
        </span>
      </div>
    </LoadingWrapper>
  )
}

export default LoadingMessage
