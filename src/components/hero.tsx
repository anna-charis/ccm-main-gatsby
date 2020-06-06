import React from "react"
import { Helmet } from "react-helmet"

import Img, { FluidObject } from "./img"
import styles from "./hero.module.scss"
import Section from "./section"

interface HeroProps {
    sectionId: string
    overlayCaption?: string
    singleImageFluid?: FluidObject
}

const Hero: React.FC<HeroProps> = ({
    sectionId,
    overlayCaption,
    singleImageFluid,
    children,
}) => (
    <div className={styles.heroContainer}>
        <Helmet>
            <link
                rel="preload"
                as="image"
                imagesrcset={singleImageFluid?.srcSet}
                imagesizes={singleImageFluid?.sizes}
            />
        </Helmet>
        <Section id={sectionId} className={styles.hero}>
            <div className={styles.carouselOverlay}>
                <h1 className={styles.overlayCaption}>{overlayCaption}</h1>
            </div>
            {singleImageFluid !== undefined && (
                <Img
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    loading="eager"
                    fadeIn={false}
                    fluid={singleImageFluid}
                    objectFit="cover"
                    objectPosition="center top"
                />
            )}
            {children}
        </Section>
    </div>
)

export default Hero
