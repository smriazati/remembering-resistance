<template>
  <div class="demo container">
    <StorymapImage
      :mapImage="mapImage"
      :mapMarkers="mapMarkers"
      :mapSettings="mapSettings"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapSettings: {
        mapScale: 0.8,
      },
      mapImage: {
        url: "/testImages/mapImage.jpg",
        width: 3000,
        height: 2397,
      },
      mapMarkers: [
        {
          name: "1",
          id: 1,
          xPos: 0.42,
          yPos: 0.75,
          media: {
            headline: "Home of Reverend J McMannen",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in mollis nulla. Phasellus porttitor tortor ac nibh semper, et vulputate elit luctus.",
            images: [""],
          },
        },
        {
          name: "2",
          id: 2,
          xPos: 0.33,
          yPos: 0.61,
          media: {
            headline: "Home of Blacknall",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in mollis nulla. Phasellus porttitor tortor ac nibh semper, et vulputate elit luctus.",
          },
        },
        {
          name: "3",
          id: 3,
          xPos: 0.71,
          yPos: 0.72,
          media: {
            headline: "Home of Angier, Log house with frame addition",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in mollis nulla. Phasellus porttitor tortor ac nibh semper, et vulputate elit luctus.",
          },
        },
      ],
    };
  },
};
</script>

<style>
.demo.container {
  min-height: 720px;
}
</style>