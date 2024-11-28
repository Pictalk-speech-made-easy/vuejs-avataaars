<template>
  <svg
    :viewBox="'0 0 250 250'"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :style="cssVars"
  >
    <desc>Created with getavataaars.com</desc>
    <defs>
      <!-- Include all necessary definitions -->
      <circle id="path-1" cx="120" cy="120" r="120"></circle>
      <path
        d="M12,160 C12,226.27417 65.72583,280 132,280
           C198.27417,280 252,226.27417 252,160
           L264,160 L264,0 L0,0 L0,160 L12,160 Z"
        id="path-2"
      ></path>
      <path
        d="M124,144.610951 L124,163 L128,163
           L128,163 C167.764502,163 200,195.235498 200,235
           L200,244 L0,244 L0,235
           C0,195.235498 32.235498,163 72,163
           L72,163 L76,163 L76,144.610951
           C58.7626345,136.422372 46.3722246,119.687011
           44.3051388,99.8812385
           C38.4803105,99.0577866 34,94.0521096 34,88
           L34,74
           C34,68.0540074 38.3245733,63.1180731 44,62.1659169
           L44,56 L44,56
           C44,25.072054 69.072054,0 100,0
           L100,0 L100,0
           C130.927946,0 156,25.072054 156,56
           L156,62.1659169
           C161.675427,63.1180731 166,68.0540074 166,74
           L166,88
           C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385
           C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
        id="path-silhouette"
      ></path>
      <!-- Other definitions as needed -->
    </defs>
    <g
      id="Avataaar"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <!-- Align the SVG content correctly -->
      <g transform="translate(0, 0)">
        <!-- Circle Background -->
        <template v-if="isCircle">
          <g id="Circle" stroke-width="1" fill-rule="evenodd">
            <mask id="mask-1" fill="white">
              <use xlink:href="#path-1"></use>
            </mask>
            <use
              id="Circle-Background"
              :fill="circleColor"
              xlink:href="#path-1"
            ></use>
          </g>
        </template>

        <!-- Main Avatar Group -->
        <g :mask="isCircle ? 'url(#mask-1)' : ''">
          <!-- Silhouette Mask -->
          <mask id="mask-2" fill="white" >
            <use xlink:href="#path-2"></use>
          </mask>
          <g
            id="Avatar"
            :mask="'url(#mask-2)'"
            fill-rule="evenodd"
            class="-translate-x-3 -translate-y-2"
          >
            <!-- Skin -->
            <g style="transform: translate(2rem, 2.10rem);" v-html="faceSvg"></g>

            <!-- Facial Hair -->
            <g v-html="facialHairSvg"></g>

            <!-- Clothes -->
            <g v-html="clothingSvg"></g>

            <!-- Graphics (if any) -->
            <!-- If your clothes include graphics, make sure they are rendered here -->

            <!-- Head -->
            <g v-html="topSvg"></g>

            <!-- Accessories -->
            <g v-html="accessoriesSvg"></g>

            <!-- Eyes -->
            <g style="fill: black" v-html="eyesSvg"></g>

            <!-- Eyebrows -->
            <g v-html="eyebrowsSvg"></g>

            <!-- Mouth -->
            <g v-html="mouthSvg"></g>

            <!-- Nose -->
            <g id="Nose" transform="translate(76.000000, 82.000000)">
              <g
                id="Nose/Default"
                transform="translate(28.000000, 40.000000)"
                opacity="0.16"
              >
                <path
                  d="M16,8 C16,12.418278 21.372583,16 28,16
                     C34.627417,16 40,12.418278 40,8"
                  id="Nose"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
<script>
import { defineComponent } from 'vue';

// Import asset types
import { accessoriesTypes } from './assetsTypes/accessories';
import { clothesType } from './assetsTypes/clothes';
import {
  hatAndShirtColors,
  hairColors,
  skinColors,
} from './assetsTypes/colors';
import { eyebrowTypes } from './assetsTypes/eyebrows';
import { eyeTypes } from './assetsTypes/eyes';
import { facialHairTypes } from './assetsTypes/facial-hair';
import { GraphicShirtTypes } from './assetsTypes/graphic-shirt';
import { mouthTypes } from './assetsTypes/mouth';
import { topTypes } from './assetsTypes/top';

export default defineComponent({
  name: 'Avataaars',
  props: {
    isCircle: {
      type: Boolean,
      default: true,
    },
    circleColor: {
      type: String,
      default: '#6fb8e0',
    },
    accessoriesType: String,
    clotheType: String,
    clotheColor: String,
    eyebrowType: String,
    eyeType: String,
    facialHairType: String,
    facialHairColor: String,
    graphicType: String,
    hairColor: String,
    mouthType: String,
    skinColor: String,
    topType: String,
    topColor: String,
  },
  data() {
    return {
      accessoriesTypes,
      clothesType,
      hatAndShirtColors,
      eyebrowTypes,
      eyeTypes,
      facialHairTypes,
      hairColors,
      GraphicShirtTypes,
      mouthTypes,
      skinColors,
      topTypes,
    };
  },
  computed: {
    cssVars() {
      console.log({
        '--avataaar-hair-color':
          this.hairColor && this.hairColors[this.hairColor]
            ? this.hairColors[this.hairColor]
            : this.hairColors[this.getRandomChoice(this.hairColors)],
        '--avataaar-facial-hair-color':
          this.facialHairColor && this.hairColors[this.facialHairColor]
            ? this.hairColors[this.facialHairColor]
            : this.hairColors[this.getRandomChoice(this.hairColors)],
        '--avataaar-hat-color':
          this.topColor && this.hatAndShirtColors[this.topColor]
            ? this.hatAndShirtColors[this.topColor]
            : this.hatAndShirtColors[this.getRandomChoice(this.hatAndShirtColors)],
        '--avataaar-shirt-color':
          this.clotheColor && this.hatAndShirtColors[this.clotheColor]
            ? this.hatAndShirtColors[this.clotheColor]
            : this.hatAndShirtColors[this.getRandomChoice(this.hatAndShirtColors)],
      })
      return {
        '--avataaar-hair-color':
          this.hairColor && this.hairColors[this.hairColor]
            ? this.hairColors[this.hairColor]
            : this.hairColors[this.getRandomChoice(this.hairColors)],
        '--avataaar-facial-hair-color':
          this.facialHairColor && this.hairColors[this.facialHairColor]
            ? this.hairColors[this.facialHairColor]
            : this.hairColors[this.getRandomChoice(this.hairColors)],
        '--avataaar-hat-color':
          this.topColor && this.hatAndShirtColors[this.topColor]
            ? this.hatAndShirtColors[this.topColor]
            : this.hatAndShirtColors[this.getRandomChoice(this.hatAndShirtColors)],
        '--avataaar-shirt-color':
          this.clotheColor && this.hatAndShirtColors[this.clotheColor]
            ? this.hatAndShirtColors[this.clotheColor]
            : this.hatAndShirtColors[this.getRandomChoice(this.hatAndShirtColors)],
      };
    },
    topSvg() {
      const topType =
        this.topType || this.getRandomChoice(Object.keys(this.topTypes));
      let svgContent = this.topTypes[topType] || '';
 
      // Use CSS variables for colors
      svgContent = svgContent.replace(
        /{{hairColor}}/g,
        'var(--avataaar-hair-color)'
      );
      svgContent = svgContent.replace(
        /{{hatColor}}/g,
        'var(--avataaar-hat-color)'
      );

      return svgContent;
    },
    accessoriesSvg() {
      const accessoriesType =
        this.accessoriesType ||
        this.getRandomChoice(Object.keys(this.accessoriesTypes));
      return this.accessoriesTypes[accessoriesType] || '';
    },
    facialHairSvg() {
      const facialHairType =
        this.facialHairType ||
        this.getRandomChoice(Object.keys(this.facialHairTypes));
      let svgContent = this.facialHairTypes[facialHairType] || '';
      // Use CSS variables for colors
      svgContent = svgContent.replace(
        /{{facialHairColor}}/g,
        'var(--avataaar-facial-hair-color)'
      );

      return svgContent;
    },
    eyesSvg() {
      const eyeType =
        this.eyeType || this.getRandomChoice(Object.keys(this.eyeTypes));
        const svgContent = this.eyeTypes[eyeType] || '';
      return this.eyeTypes[eyeType] || '';
    },
    eyebrowsSvg() {
      const eyebrowType =
        this.eyebrowType ||
        this.getRandomChoice(Object.keys(this.eyebrowTypes));
      return this.eyebrowTypes[eyebrowType] || '';
    },
    mouthSvg() {
      const mouthType =
        this.mouthType || this.getRandomChoice(Object.keys(this.mouthTypes));
      return this.mouthTypes[mouthType] || '';
    },
    clothingSvg() {
      const clotheType =
        this.clotheType ||
        this.getRandomChoice(Object.keys(this.clothesType));
      let svgContent = this.clothesType[clotheType] || '';

      // Use CSS variables for colors
      svgContent = svgContent.replace(
        /{{clotheColor}}/g,
        'var(--avataaar-shirt-color)'
      );

      // Insert graphic if needed
      if (clotheType === 'GraphicShirt') {
        const graphicType =
          this.graphicType ||
          this.getRandomChoice(Object.keys(this.GraphicShirtTypes));
        const graphicSvg = this.GraphicShirtTypes[graphicType] || '';
        svgContent = svgContent.replace(/{{graphicType}}/g, graphicSvg);
      }

      return svgContent;
    },
    faceSvg() {
      const skinColorKey =
        this.skinColor || this.getRandomChoice(Object.keys(this.skinColors));
      const skinColor = this.skinColors[skinColorKey] || '#FFDBAC';

      // Include face SVG paths with the skin color
      const faceSvg = `
        <g id="Skin" fill="${skinColor}">
          <use xlink:href="#path-silhouette" />
        </g>
      `;
      return faceSvg;
    },
  },
  methods: {
    getRandomChoice(items) {
      if (Array.isArray(items)) {
        return items[Math.floor(Math.random() * items.length)];
      }
      const keys = Object.keys(items);
      return keys[Math.floor(Math.random() * keys.length)];
    },
  },
});
</script>

<style scoped>
/* Add any necessary styles */
</style>