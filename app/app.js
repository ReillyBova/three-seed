/**
 * App.js
 *
 * The main entry point, appends PIXI to the DOM
 * and starts a render and animation loop
 *
 */

import './index.html';
import {config} from '../package.json';
import Renderer from './Renderer/Renderer';
import {Scene, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh} from 'three';

const renderer = new Renderer(config.stageWidth, config.stageHeight);

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
const geometry = new BoxGeometry( 200, 200, 200 );
const material = new MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
const mesh = new Mesh( geometry, material );

scene.add(mesh);
camera.position.z = 1000;

renderer.camera = camera;
renderer.scene = scene;

renderer.start();

document.body.appendChild( renderer.domElement );
