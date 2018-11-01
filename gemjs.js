async function showme(){
    let data = await fetch("gemdetail.json").then(r => r.text()).then(t => JSON.parse(t))

    let gemList = document.getElementsByClassName("gem-list")[0]

    data.forEach(gem => {
        let gemBox = document.createElement("div")
        gemBox.setAttribute("class","gem-box")

        let gemImage = document.createElement("div")
        gemImage.setAttribute("class","gem-image")
        
        let gemImg = document.createElement("img")
        gemImg.setAttribute("src",gem.img)

        gemImage.appendChild(gemImg)
        gemBox.appendChild(gemImage)

        let gemText = document.createElement("div")
        gemText.setAttribute("class","gem-text")

        let gemHead = document.createElement("h1")
        gemHead.setAttribute("class","gem-name")

        let gemName = document.createTextNode(gem.name)

        gemHead.appendChild(gemName)

        let gemMean = document.createTextNode(gem.mean)
        let gemDetail = document.createTextNode(gem.detail)

        gemText.appendChild(gemHead)
        gemText.appendChild(gemMean)
        gemText.appendChild(document.createElement("br"))
        gemText.appendChild(gemDetail)
        
        gemBox.appendChild(gemText)



        gemList.appendChild(gemBox)

    });
}
showme()