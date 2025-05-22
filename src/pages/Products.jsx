import React from "react";
import ProductCard from "../components/ProductCard";
import Teeth from '../assets/teeth.png';

const Products = () => {
    return (
        <div className="row g-4">
            <div className="col-md-3 py-3">
                <ProductCard
                    image={Teeth}
                    tag="Self Care"
                    title="Care of your Teeth"
                    description="Lorem ipsum dolor sit amet consectetur."
                    author="Anita Jackson"
                />
            </div>
        </div>

    );
}

export default Products;