import CarouselItems from './CarouselItems';

const CarouselContainer = ({ products }) => {

    return (
        <div>
            <CarouselItems
                products={products}
            />
        </div>
    )
}

export default CarouselContainer