const convertDate = (d: any) => {
 const date = new Date(d)
 return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default convertDate