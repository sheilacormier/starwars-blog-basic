const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [
				{
					image: "https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg",
					uid: "1",
					name: "Luke Skywalker",
					url: "https://www.swapi.tech/api/people/1"
				},
				{
					image:
						"https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg",
					uid: "2",
					name: "C-3PO",
					url: "https://www.swapi.tech/api/people/2"
				},
				{
					image:
						"https://fastly.syfy.com/sites/syfy/files/wire/legacy/why-luke-skywalker-left-r2d2-behind-in-star-wars-7-the-force-awakens-797755.jpg",
					uid: "3",
					name: "R2-D2",
					url: "https://www.swapi.tech/api/people/3"
				},
				{
					image:
						"https://s.yimg.com/ny/api/res/1.2/RwtL7sxWbObRRrs8Of5yEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&enable=upscale&w=1200",
					uid: "4",
					name: "Darth Vader",
					url: "https://www.swapi.tech/api/people/4"
				},
				{
					image: "https://am22.mediaite.com/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg",
					uid: "5",
					name: "Leia Organa",
					url: "https://www.swapi.tech/api/people/5"
				},
				{
					image:
						"https://lh3.googleusercontent.com/proxy/IN9jmTFABUeza38FjJxVjHdd7Gw-oChgbKNQBd8pKjFcO1734jugWco9HaQ_GGQdyLfxYOSgxU27cKPT3Hkl3qawvUOvtEvtCZevLKr8NxG3ZuuuSkc8hVEGUTO00A",
					uid: "6",
					name: "Owen Lars",
					url: "https://www.swapi.tech/api/people/6"
				},
				{
					image: "https://i.pinimg.com/originals/29/71/e3/2971e3eaaac6d31679aa0339f0b0c11b.jpg",
					uid: "7",
					name: "Beru Whitesun lars",
					url: "https://www.swapi.tech/api/people/7"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666",
					uid: "8",
					name: "R5-D4",
					url: "https://www.swapi.tech/api/people/8"
				},
				{
					image: "https://pbs.twimg.com/media/EouvaiYVoAAmmQ0.jpg",
					uid: "9",
					name: "Biggs Darklighter",
					url: "https://www.swapi.tech/api/people/9"
				},
				{
					image:
						"https://media.vanityfair.com/photos/5d56eac902bf930008778de7/3:2/w_1998,h_1332,c_limit/obi-wan-ewan-series.jpg",
					uid: "10",
					name: "Obi-Wan Kenobi",
					url: "https://www.swapi.tech/api/people/10"
				}
			],
			planets: [
				{
					image:
						"https://starwarsthoughts.files.wordpress.com/2019/12/screen-shot-2019-12-06-at-8.27.16-pm.png",
					uid: "1",
					name: "Tatooine",
					url: "https://www.swapi.tech/api/planets/1"
				},
				{
					image: "http://reachingutopia.com/wp-content/uploads/2013/01/Big-Death-Star.jpg",
					uid: "2",
					name: "Alderaan",
					url: "https://www.swapi.tech/api/planets/2"
				},
				{
					image: "https://pm1.narvii.com/6065/4ef3bc9f584b0d9f9da1d2fcd866e7fbd5872319_hq.jpg",
					uid: "3",
					name: "Yavin IV",
					url: "https://www.swapi.tech/api/planets/3"
				},
				{
					image:
						"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Hothplanetsurface.jpg/220px-Hothplanetsurface.jpg",
					uid: "4",
					name: "Hoth",
					url: "https://www.swapi.tech/api/planets/4"
				},
				{
					image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg",
					uid: "5",
					name: "Dagobah",
					url: "https://www.swapi.tech/api/planets/5"
				},
				{
					image: "https://images-na.ssl-images-amazon.com/images/I/71ov1vSt6YL._AC_SL1000_.jpg",
					uid: "6",
					name: "Bespin",
					url: "https://www.swapi.tech/api/planets/6"
				},
				{
					image: "https://upload.wikimedia.org/wikipedia/en/d/d4/PlanetEndor.jpg",
					uid: "7",
					name: "Endor",
					url: "https://www.swapi.tech/api/planets/7"
				},
				{
					image: "https://swglegends.com/wiki/images/thumb/e/ea/NabooFromSpace.jpg/300px-NabooFromSpace.jpg",
					uid: "8",
					name: "Naboo",
					url: "https://www.swapi.tech/api/planets/8"
				},
				{
					image: "https://i.ytimg.com/vi/HCu7FhoDhtc/maxresdefault.jpg",
					uid: "9",
					name: "Coruscant",
					url: "https://www.swapi.tech/api/planets/9"
				},
				{
					image: "https://i.pinimg.com/originals/9c/82/84/9c8284f9a24d37770950af2c603ccdbd.jpg",
					uid: "10",
					name: "Kamino",
					url: "https://www.swapi.tech/api/planets/10"
				}
			],
			starships: [
				{
					image: "https://i.pinimg.com/originals/43/54/d3/4354d36812bdd8049b6e4a0f1a34e3cc.jpg",
					uid: "2",
					name: "CR90 corvette",
					url: "https://www.swapi.tech/api/starships/2"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C50%2C1600%2C800",
					uid: "3",
					name: "Star Destroyer",
					url: "https://www.swapi.tech/api/starships/3"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/Imperial-Sentinel-Class-Shuttle_a2dc7d3b.jpeg?region=0%2C0%2C1596%2C898&width=768",
					uid: "5",
					name: "Sentinel-class landing craft",
					url: "https://www.swapi.tech/api/starships/5"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=768",
					uid: "9",
					name: "Death Star",
					url: "https://www.swapi.tech/api/starships/9"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=768",
					uid: "11",
					name: "Y-wing",
					url: "https://www.swapi.tech/api/starships/11"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720&width=768",
					uid: "10",
					name: "Millennium Falcon",
					url: "https://www.swapi.tech/api/starships/10"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080&width=768",
					uid: "13",
					name: "TIE Advanced x1",
					url: "https://www.swapi.tech/api/starships/13"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845&width=768",
					uid: "15",
					name: "Executor",
					url: "https://www.swapi.tech/api/starships/15"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878&width=768",
					uid: "12",
					name: "X-wing",
					url: "https://www.swapi.tech/api/starships/12"
				},
				{
					image:
						"https://lumiere-a.akamaihd.net/v1/images/sato_s-hammer_fda9af7d.jpeg?region=0%2C0%2C1560%2C878&width=768",
					uid: "17",
					name: "Rebel transport",
					url: "https://www.swapi.tech/api/starships/17"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                    fetch(`${baseurl}/people`)
                    .then()
                    .then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
