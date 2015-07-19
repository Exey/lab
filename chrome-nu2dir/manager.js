// List of nude pic types directories in default Chrome download folder
 var folders = [
	"_NSFW",
	"_NU/ref_env_bathwc",
	"_NU/ref_env_bedwindow",
	"_NU/ref_env_carsroads",
	"_NU/ref_env_interior",
	"_NU/ref_env_kitchenlaundry",
	"_NU/ref_env_nudeinpublicstrip",
	"_NU/ref_env_outdoor",
	"_NU/ref_env_outdoor_beachwaterpools",
	"_NU/ref_env_wallsbillboards",
	"_NU/ref_idea_angle",
	"_NU/ref_idea_crop",
	"_NU/ref_idea_exp_bodyart",
	"_NU/ref_idea_exp_effectsmotion",
	"_NU/ref_idea_exp_substance",
	"_NU/ref_idea_focus_ass",
	"_NU/ref_idea_focus_boobs",
	"_NU/ref_idea_focus_panties",
	"_NU/ref_idea_portraitbeauty",
	"_NU/ref_idea_poses_laysit",
	"_NU/ref_idea_poses_stand",
	"_NU/ref_idea_things",
	"_NU/ref_idea_things_animalsfood",
	"_NU/ref_mdl_2",
	"_NU/ref_mdl_boy",
	"_NU/ref_mdl_cloth_dressundress",
	"_NU/ref_mdl_cloth_lingerie",
	"_NU/ref_mdl_cloth_stockingbody",
	"_NU/ref_mdl_cloth_swimsuitlatex",
	"_NU/ref_mdl_curvymuscular",
	"_NU/ref_mdl_disabilitymidgets",
	"_NU/ref_mdl_frontsampling",
	"_NU/ref_mdl_girl_african",
	"_NU/ref_mdl_girl_asian",
	"_NU/ref_mdl_girl_blonde",
	"_NU/ref_mdl_girl_brunnetebrown",
	"_NU/ref_mdl_girl_red",
	"_NU/ref_mdl_pregnantbald",
	"_NU/ref_mdl_selfie",
	"_NU/ref_mdl_uniform_cosplayfantasy",
	"_NU/ref_mdl_uniform_profession",
	"_NU/ref_mdl_uniform_sporthistory",
 ]
 var idx = 0
 var funcs = []
 
 // Register the contextual menu
for (i = 0; i < folders.length; i++) {
	funcs[i] = createDownloadFunction(i)
    chrome.contextMenus.create({"title": folders[i], 
								"contexts":["image"], 
								"onclick": funcs[i]}
								)
}
// Download handlers factory
function createDownloadFunction(i) {
	return function(info, tab) { 
		var curr = i
		idx = curr
		downloadResource(info, tab)
	};
}

// A generic onclick callback function.
function downloadResource(info, tab) {
  var url = info['srcUrl']
  console.log("url: " + url)
  var filename = url.substring(url.lastIndexOf('/')+1)
  chrome.downloads.download({ url: url, filename: filename, saveAs: false })
}
 
 // Download complete handler
 chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
	console.log("DOWNLOADED "+folders[idx])
	suggest({filename: folders[idx]+"/" + downloadItem.filename})
})