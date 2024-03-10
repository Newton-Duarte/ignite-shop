import { GetStaticProps } from 'next'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  ArrowLeftContainer,
  ArrowRightContainer,
  HomeContainer,
  Product,
} from '../styles/pages/home'
import { stripe } from '@/lib/stripe'

import 'keen-slider/keen-slider.min.css'
import { formatPrice } from '@/utils/formatter'
import { CartButton } from '@/components/CartButton'
import { useShoppingCart } from 'use-shopping-cart'

type TProduct = {
  id: string
  name: string
  imageUrl: string
  priceRaw: number
  price: string
  defaultPriceId: string
}

interface HomeProps {
  products: TProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  const { addItem } = useShoppingCart()

  const handleAddProductOnCart = (product: TProduct) => {
    addItem({
      id: product.id,
      name: product.name,
      price_id: product.defaultPriceId,
      priceId: product.defaultPriceId,
      price: product.priceRaw,
      image: product.imageUrl,
      sku: product.id,
      currency: 'BRL',
    })
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <ArrowLeftContainer onClick={() => slider.current?.prev()}>
          <CaretLeft size={48} />
        </ArrowLeftContainer>
        <ArrowRightContainer onClick={() => slider.current?.next()}>
          <CaretRight size={48} />
        </ArrowRightContainer>
        {products.map((product) => (
          <Link
            passHref
            href={`product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton
                  size="lg"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.stopPropagation()
                    event.preventDefault()
                    handleAddProductOnCart(product)
                  }}
                />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: TProduct[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceRaw: price.unit_amount || 0,
      price: price.unit_amount ? formatPrice(price.unit_amount / 100) : '0',
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
