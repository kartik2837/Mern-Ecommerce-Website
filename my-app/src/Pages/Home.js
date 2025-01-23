import React from 'react'
import CategoryList from '../Component/CategoryList'
import BannerProduct from '../Component/BannerProduct'
import HorizontalCartProduct from '../Component/HorizontalCartProduct'
import VerticalCardProduct from '../Component/VerticalCardProduct'

const Home = () => {
    return (
        <div>
            <CategoryList />
            <BannerProduct />
            <HorizontalCartProduct category={"airbuds"} heading={"Top's Aipods"} />
            <HorizontalCartProduct category={"watches"} heading={"Popular's Watches"} />
            <VerticalCardProduct category={"mobile"} heading={'Popular Mobiles'} />
            <VerticalCardProduct category={"mouse"} heading={'Popular Mouse'} />
            <VerticalCardProduct category={"television"} heading={'Popular LED'} />
            <VerticalCardProduct category={"camera"} heading={'Camera & Photoshoot'} />
            <VerticalCardProduct category={"earphones"} heading={'Popular Earphones'} />
            <VerticalCardProduct category={"speakers"} heading={'Best Speakers'} />
            <VerticalCardProduct category={"refrigerator"} heading={'Popular Refrigerator'} />
            <VerticalCardProduct category={"trimmers"} heading={'Offers Trimmers'} />
            <VerticalCardProduct category={"clothes"} heading={'Popular Clothes'} />

        </div>
    )
}

export default Home
