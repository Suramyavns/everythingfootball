import React from 'react'

const NavBar = ({currentContent,setCardContent}) => {
    const navs = [
        {
            'title':'Standings',
            'slug':'standings',
            'endpoint':'get_standings'
        },
        {
            'title':'Teams',
            'slug':'teams',
            'endpoint':'get_teams'
        },
        {
            'title':'Top Scorers',
            'slug':'topscorers',
            'endpoint':'get_topscorers'
        },
    ]
    const navStyle = 'px-4 '
  return (
    <div className='flex w-full justify-around ws-light'>
      {
        navs.map((nav)=>{
            return(
                <>
                <button key={nav.slug} onClick={()=>{setCardContent(nav)}} className={navStyle.concat(nav.slug===currentContent.slug?'text-blue-500':'')}>{nav.title}</button>
                {nav.slug===navs[navs.length-1].slug?<></>:<p className='border' />}
                </>
            )
        })
      }
    </div>
  )
}

export default NavBar
