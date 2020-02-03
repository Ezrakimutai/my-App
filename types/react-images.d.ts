import React from 'react'
import CarouselProps from 'react-images'

declare module 'react-images' {
    export class Modal extends React.Component<any> {}
    export class ModalGateway extends React.Component<any> {}
    export class Carousel extends React.Component<CarouselProps> {}
}
