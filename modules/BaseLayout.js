export const BaseLayout = (props) => {
  const { children } = props

  return (
    // if <> is changed to <div> the bug is gone
    <>
      <div className="h-[400px] bg-gray-100 mb-4"></div>
      {children}
    </>
  )
}
