

export const ShowError = ({ errorMsg }) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
        {errorMsg}
    </div>
  )
};