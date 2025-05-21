import React from 'react'
import './Home.scss'
import './components/itemCard/itemCard'
const Home = () => {
  return (
    <div class='wrapper'>
        {/* left side */}
        <div id='left-side'>
            <p class='cloth-size'>Size:</p>
            <div class='cloth-size-tag'>
                <input class='custom-checkbox' type="checkbox" value={'S'}/>S
                <input class='custom-checkbox' type="checkbox" value={'XS'}/>XS
                <input class='custom-checkbox' type="checkbox" value={'M'}/>M
                <input class='custom-checkbox' type="checkbox" value={'L'}/>
                <input class='custom-checkbox' type="checkbox" value={'XL'}/>
                <input class='custom-checkbox' type="checkbox" value={'XXL'}/>
                <input class='custom-checkbox' type="checkbox" value={'ML'}/>
            </div>


        </div>
        {/* right side */}
        <div id='right-side'>
            <div class='top-header'>
                <ItemCard />

            </div>

        </div>

    </div>
  )
}

export default Home