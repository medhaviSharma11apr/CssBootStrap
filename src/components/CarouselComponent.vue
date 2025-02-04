<template>
    <div>
        <BCarousel controls class="my-4 ">
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=1" />
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=2" />
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=3" />
        </BCarousel>


        <BCarousel fade controls indicators>
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=4" />
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=5" />
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=6" />
        </BCarousel>

        <BCarousel controls indicators ride="carousel">
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=13" />
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=14" />
            <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=15" />
        </BCarousel>
    </div>
</template>


<script>
export default {
    name: "CarouselComponent"
}
</script>