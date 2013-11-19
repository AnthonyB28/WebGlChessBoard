			var container, stats;

			var camera, scene, renderer;
			var bicycle, frame;
			var test;
			
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;


			init();
			//animate();


			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 170;
				camera.position.y = 100;
				

				// scene

				scene = new THREE.Scene();

				var ambient = new THREE.AmbientLight( 0x00000f );
				scene.add( ambient );
				var areaLight1 = new THREE.AreaLight( 0xffffff, 100 );
				areaLight1.position.set( 0.0001, 10.0001, 0.5001 );
				//areaLight1.rotation.set( -0.74719, 0.0001, 0.0001 );
				areaLight1.width = 100;
				areaLight1.height = 100;

				scene.add( areaLight1 );
				
				var light = new THREE.PointLight( 0xffffff, .5, 10000 );
				light.position.set( 90, 140, 90 );
				scene.add( light );
				
				var light2 = new THREE.PointLight( 0xffffff, .5, 10000 );
				light2.position.set( -90, 140, -90 );
				scene.add( light2 );
				
				var light3 = new THREE.PointLight( 0xffffff, .5, 10000 );
				light3.position.set( -90, 140, 90 );
				scene.add( light3 );
				var directionalLight = new THREE.DirectionalLight( 0x8b8b8b );
				directionalLight.position.set( 0, 10, 0 ).normalize();
				//scene.add( directionalLight );
				
				var spotLight = new THREE.SpotLight( 0xeeeeee );
				spotLight.position.set( 0, 5000, -500 );
				//scene.add(spotLight);
				
				
				// model
                //bicycle = new THREE.Object3D();

				/*var loader = new THREE.OBJMTLLoader();
				loader.load( 'Models/Board/board.obj', 'Models/Board/board.mtl', function ( object ) {
					object.position.x = -20;
    				object.scale.x = 10;
    				object.scale.y = 10;
    				object.scale.z = 10;
					object.material = null;
					object.receiveShadow = true;
					
					scene.add(object);
                } );
				
				loader.load( 'Models/Pawn/pawn.obj', 'Models/Pawn/pawn.mtl', function ( object ) {
					object.position.x = -68;
					object.position.y = 4.5;
					object.position.z = -40;
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshPhongMaterial( {color: 0x000000, ambient: 0xffffff, shininess: 10, specular: 0xffffff} );
						}
					} );
					object.castShadow = true;
    				object.scale.x = 5;
    				object.scale.y = 5;
    				object.scale.z = 5;
					//test = object;
					scene.add(object);
                } );
				
				loader.load( 'Models/Pawn/pawn.obj', 'Models/Pawn/pawn.mtl', function ( object ) {
					object.position.x = -68;
					object.position.y = 4.5;
					object.position.z = 60;
					
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = new THREE.MeshPhongMaterial( {color: 0xffffff, ambient: 0x000000, shininess: 5, specular: 0x000000} );
						}
					} );
					object.castShadow = true;
    				object.scale.x = 5;
    				object.scale.y = 5;
    				object.scale.z = 5;
					
					scene.add(object);
                } );
				
				loader.load( 'Models/Pawn/pawn.obj', 'Models/Pawn/pawn.mtl', function ( object ) {
					object.position.x = 72;
					object.position.y = 4.5;
					object.position.z = -40;
					test = object;
    				object.scale.x = 5;
    				object.scale.y = 5;
    				object.scale.z = 5;
					
					scene.add(object);
                } );

				loader.load( 'Models/Pawn/pawn.obj', 'Models/Pawn/pawn.mtl', function ( object ) {
					object.position.x = 72;
					object.position.y = 4.5;
					object.position.z = 60;
					object.castShadow = true;
    				object.scale.x = 5;
    				object.scale.y = 5;
    				object.scale.z = 5;
					
					scene.add(object);
                } );*/
                /*
                    TODO Add more bicycle parts and connect them up to the scene
                    Note: Be sure to apply whatever transformations are appropriate
                */

				//scene.add( bicycle );

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'keyup', onKeyUp, false );
				document.addEventListener( 'keydown', onKeyDown, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );
				var board = new ChessBoard(scene, camera, renderer);

			}

            function cloneObj ( obj ) {
                var i, cpy = new THREE.Object3D();
                for (var i in obj.children) {
                    cpy.add(
                        new THREE.Mesh(obj.children[i].geometry)
                    );
                }
                return cpy;
            }

            function cloneObjMtl ( objmtl ) {
                var i, cpy = new THREE.Object3D();
                for (var i in objmtl.children) {
                    cpy.add(
                        new THREE.Mesh(objmtl.children[i].geometry,
                        objmtl.children[i].material)
                    );
                }
                return cpy;
            }

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onKeyUp( event ) {
                /*
                    Implement keyboard controls for pedaling (i.e., spinning the wheels)
                */
			}

			function onKeyDown( event ) {
                /*
                    Implement keyboard controls for steering (i.e. turning the handlebars)
                */
			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) / 2;
				mouseY = ( event.clientY - windowHalfY ) / 2;

			}

			//

			function animate() {
				requestAnimationFrame( animate );
                /*
                    TODO Perform updates for animation purposes
                */
				render();

			}

			function render() {

				//camera.position.x += ( mouseX - camera.position.x ) * .05;
				//camera.position.y += ( - mouseY - camera.position.y ) * .05;
				//test.position.z += .5;
				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}
