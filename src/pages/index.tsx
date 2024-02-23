import { GetStaticProps } from "next"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home"
import { stripe } from "@/lib/stripe"

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { formatPrice } from "@/utils/formatter"

type TProduct = {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: TProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products: TProduct[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? formatPrice(price.unit_amount / 100) : '0'
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}