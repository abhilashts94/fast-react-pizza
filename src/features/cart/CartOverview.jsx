import { Link } from 'react-router-dom'

function CartOverview() {
  return (
    <div className='bg-stone-800 p-4 text-stone-200 uppercase sm:px-6 text-sm md:text-base flex items-center justify-between'>
      <p className='sm:space-x-6 text-stone-300 font-semibold space-x-4 '>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview