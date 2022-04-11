import { useEffect, useRef, useState } from 'react';
import cn from 'classnames'
import { useOnViewPort } from '../../hooks/intersectionHook';


const LoadableImg = ({ src, alt, onClick = () => {} }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const imageRef = useRef(null)
    const containerRef = useRef(null)

    const isIntersecting = useOnViewPort(containerRef)

    useEffect(() => {
        if(!isIntersecting || isLoaded) {
					return;
				}

        if(imageRef.current) {
            imageRef.current.onload = () => setIsLoaded(true)
        }
    },[isLoaded, isIntersecting])

    return (
        <div ref={containerRef} className={cn('l_container', {
            'l_container_loaded': isLoaded
        })}>
            {
                (isIntersecting || isLoaded) && (
                    <img onClick={onClick} ref={imageRef} className={cn('l_image', {
                        'l_image_loaded': isLoaded
                    })} src={src} alt={alt}/>
                )
            }
        </div>
    )
}

export default LoadableImg;
