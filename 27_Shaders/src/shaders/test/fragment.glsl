// precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

// varying float vRandom;
varying float vElevation;
varying vec2 vUv;

void main() {
    // gl_FragColor = vec4(vRandom, vRandom * 0.5, 1.0, 1.0);
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation * 2.0 + 0.9;
    gl_FragColor = textureColor;
}