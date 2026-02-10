'use client'

import { useEffect, useState } from 'react'
/**
 * 📱 Hook สำหรับตรวจสอบ screen size
 * 
 * @returns {object} - { xs, sm, md, lg, xl, xxl, isMobile, isTablet, isDesktop }
 * 
 * @example
 * ```tsx
 * const { isMobile, isDesktop } = useResponsive()
 * 
 * return isMobile ? <MobileView /> : <DesktopView />
 * ```
 */
export const useResponsive = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const width = windowSize.width
    const isMobile = width < 768
    const isTablet = width >= 768 && width < 992
    const isDesktop = width >= 992

    let currentBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md'
    if (width >= 1600) currentBreakpoint = 'xxl'
    else if (width >= 1200) currentBreakpoint = 'xl'
    else if (width >= 992) currentBreakpoint = 'lg'
    else if (width >= 768) currentBreakpoint = 'md'
    else if (width >= 576) currentBreakpoint = 'sm'
    else currentBreakpoint = 'xs'

    return {
        isMobile,
        isTablet,
        isDesktop,
        width,
        height: windowSize.height,
        currentBreakpoint,
    }
}
/**
 * 📏 Ant Design Breakpoints
 * 
 * xs: < 576px (Mobile)
 * sm: ≥ 576px (Mobile Landscape)
 * md: ≥ 768px (Tablet)
 * lg: ≥ 992px (Desktop)
 * xl: ≥ 1200px (Large Desktop)
 * xxl: ≥ 1600px (Extra Large)
 */
export const BREAKPOINTS = {
    xs: 576,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
} as const

/**
 * 📐 Responsive Col Span Helper
 * 
 * @example
 * ```tsx
 * <Col {...getResponsiveCol({ mobile: 24, tablet: 12, desktop: 8 })}>
 *   Content
 * </Col>
 * ```
 */
export const getResponsiveCol = (config: {
    mobile?: number
    tablet?: number
    desktop?: number
}) => ({
    xs: config.mobile || 24,
    md: config.tablet || 12,
    lg: config.desktop || 8,
})

/**
 * 📱 Responsive Grid Helper
 * 
 * @example
 * ```tsx
 * <Row gutter={getResponsiveGutter()}>
 *   <Col {...getResponsiveCol({ mobile: 24, tablet: 12, desktop: 8 })}>
 *     Card
 *   </Col>
 * </Row>
 * ```
 */
export const getResponsiveGutter = (): [number, number] => {
    return [16, 16]
}
