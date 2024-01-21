// import { useState } from 'react'
// import { BlogCard } from '../../ui'
// import axios from 'axios/'
// import { BlogApi } from '../../../utils/ApiFeatures'
// import { Link } from 'react-router-dom'

const BlogSection = () => {
    // const [blogData, setBlogData] = useState([])

    // useEffect(() => {
    //     const fetchBlogData = async() => {
    //      const res = await axios.get(BlogApi)   
    //         console.log(res.data)
    //         setBlogData(res.data.results)
    //     }
    //     fetchBlogData()
    // }, [])
  return (
    <div className='container'>
        <h2 className='text-center font-[700] text-5xl font-[Jost]'>Blog</h2>
        <p className='text-center'>Our Latest News</p>
        <div className='py-24'>
            <p className='text-center'>Top Stories</p>
            <div className='overflow-x-auto shadow p-12 rounded-lg'>
                <div className='w-full flex flex-row shadow-lg rounded-lg p-2'>
                    <div className='w-1/2'>
                        <p>NEWS</p>
                    </div>
                    <div className='w-1/2 flex flex-row justify-start items-center'>
                        <div className='min-w-28'>
                           <p>DATE <br /> (GMT)</p> 
                        </div>
                        <div className='min-w-28'>
                           <p>COUNTRY</p> 
                        </div>
                        <div className='min-w-28'>
                            <p>LANGUAGE</p>
                        </div>
                        <div className='min-w-28'>
                            <p>PUBLISHER</p>
                        </div>
                        <div className='min-w-28'>
                           <p>CATEGORY</p> 
                        </div>
                    </div>
                </div>
                <div className=' overflow-y-auto max-h-[600px]'>
                    {/* {blogData.map((item, index)=> (
                        <Link to={item}>
                        <BlogCard key={index}/>    
                        </Link>
                        
                    ))} */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSection;