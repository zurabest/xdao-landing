'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import './Counter.css'

function Number({ mv, number, height }: { mv: any; number: number; height: number }) {
    let y = useTransform(mv, (latest: number) => {
        let placeValue = latest % 10
        let offset = (10 + number - placeValue) % 10
        let memo = offset * height
        if (offset > 5) {
            memo -= 10 * height
        }
        return memo
    })
    return (
        <motion.span className="counter-number" style={{ y }}>
            {number}
        </motion.span>
    )
}

function normalizeNearInteger(num: number) {
    const nearest = Math.round(num)
    const tolerance = 1e-9 * Math.max(1, Math.abs(num))
    return Math.abs(num - nearest) < tolerance ? nearest : num
}

function getValueRoundedToPlace(value: number, place: number) {
    const scaled = value / place
    return Math.floor(normalizeNearInteger(scaled))
}

function Digit({
    place,
    value,
    height,
    digitStyle,
    active,
}: {
    place: number | '.'
    value: number
    height: number
    digitStyle?: React.CSSProperties
    active: boolean
}) {
    const isDecimal = place === '.'
    const valueRoundedToPlace = isDecimal ? 0 : getValueRoundedToPlace(value, place as number)
    const animatedValue = useSpring(0, { stiffness: 60, damping: 18 })

    useEffect(() => {
        if (!isDecimal && active) {
            animatedValue.set(valueRoundedToPlace)
        }
    }, [animatedValue, valueRoundedToPlace, isDecimal, active])

    if (isDecimal) {
        return (
            <span className="counter-digit" style={{ height, ...digitStyle, width: 'fit-content' }}>
                .
            </span>
        )
    }

    return (
        <span className="counter-digit" style={{ height, ...digitStyle }}>
            {Array.from({ length: 10 }, (_, i) => (
                <Number key={i} mv={animatedValue} number={i} height={height} />
            ))}
        </span>
    )
}

interface CounterProps {
    value: number
    fontSize?: number
    padding?: number
    places?: (number | '.')[]
    gap?: number
    borderRadius?: number
    horizontalPadding?: number
    textColor?: string
    fontWeight?: number | string
    containerStyle?: React.CSSProperties
    counterStyle?: React.CSSProperties
    digitStyle?: React.CSSProperties
    gradientHeight?: number
    gradientFrom?: string
    gradientTo?: string
    topGradientStyle?: React.CSSProperties
    bottomGradientStyle?: React.CSSProperties
    active?: boolean
}

export default function Counter({
    value,
    fontSize = 100,
    padding = 0,
    places,
    gap = 8,
    borderRadius = 4,
    horizontalPadding = 8,
    textColor = 'inherit',
    fontWeight = 'inherit',
    containerStyle,
    counterStyle,
    digitStyle,
    gradientHeight = 16,
    gradientFrom = 'transparent',
    gradientTo = 'transparent',
    topGradientStyle,
    bottomGradientStyle,
    active = true,
}: CounterProps) {
    const resolvedPlaces = places ?? value.toString().split('').map((ch, i, a) => {
        if (ch === '.') return '.' as const
        return (
            10 **
            (a.indexOf('.') === -1
                ? a.length - i - 1
                : i < a.indexOf('.')
                    ? a.indexOf('.') - i - 1
                    : -(i - a.indexOf('.')))
        )
    })

    // Before animation starts show only a single "0"
    const displayPlaces = active ? resolvedPlaces : [1 as number]

    const height = fontSize + padding
    const defaultCounterStyle: React.CSSProperties = {
        fontSize,
        gap,
        borderRadius,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        color: textColor,
        fontWeight,
    }
    const defaultTopGradientStyle = {
        height: gradientHeight,
        background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
    }
    const defaultBottomGradientStyle = {
        height: gradientHeight,
        background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
    }

    return (
        <span className="counter-container" style={containerStyle}>
            <span className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
                {displayPlaces.map((place, i) => (
                    <Digit
                        key={i}
                        place={place}
                        value={value}
                        height={height}
                        digitStyle={digitStyle}
                        active={active}
                    />
                ))}
            </span>
            <span className="gradient-container">
                <span
                    className="top-gradient"
                    style={topGradientStyle ?? defaultTopGradientStyle}
                />
                <span
                    className="bottom-gradient"
                    style={bottomGradientStyle ?? defaultBottomGradientStyle}
                />
            </span>
        </span>
    )
}
