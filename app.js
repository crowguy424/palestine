const text = ["A group of more than 40 technologists have banded together and created the ‘Tech for Palestine’ initiative to show their support to Palestine and boycott tech products linked to Israel. ‘Tech for Palestine’ offers badges and banners that other tech workers can display in their repositories or websites, in order to publicise their support for Palestine, as Israel continues to bombard the Gaza Strip, leaving thousands of Palestinian civilians dead. ‘Tech for Palestine’ has also promoted a list of anti-Palestinian VC funds for boycotts, as well as alternatives to Israeli technology products and companies. Some companies on the boycott list include Fireblocks, Monday, Wiz, and eToro.",
"“Our short-term goal is to normalize and enable tech folks to speak up for the people of Palestine. Our main goal is to shift the Overton Window, and make it easier to speak up for Palestinian humanity and freedom, while making it harder to say the sort of genocidal statements about Palestine that are common among tech investors and leaders,” said the organisation in a recent GitHub post.",
"The project is run by tech founder Paul Biggar, who previously wrote about how tech creators and those funding them had expressed openly pro-Israel stances or even opposed a humanitarian ceasefire.",


"‘Tech for Palestine’ participants are invited to work on projects in order to call for a permanent ceasefire, educate others about Palestine, and show how technology is being used to enable the genocide in Gaza, as per the organisation’s GitHub page.",


"Since Hamas’ October 7 rampage, high-profile individuals in the tech sector have made clear their support for Israel in spite of the mounting civilian death toll.",


"For example, OpenAI’s Research Platform head Tal Broda on X (formerly Twitter) shared photos of explosions in Gaza, urging Israel to intensify its bombing. He later deleted the posts and issued an apology on December 17.",


"“HP-branded corporations play key roles in Israel’s oppression of Palestinians. They are complicit in Israel’s occupation, settler-colonialism and apartheid regime. They provide computer hardware to the Israeli army and maintain data centers through their servers for the Israeli police,” said a statement on the BDS site.",


"Boycotts of tech companies are not new, with the Palestinian-led Boycott, Divestment and Sanctions (BDS) calling on supporters worldwide for years to boycott HP.",


];
function shuffle(array) {
    //console.log(array);
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
const items = document.querySelector("#items")
const dataContainer = document.querySelector("#data");
const generate = () => {
    console.log(items.value);
    if(isNaN(items.value) || items.value < 0 || items.value > 9 ){
        const randomIndex = Math.floor(Math.random() * text.length);
        dataContainer.innerHTML =`<p> ${text[randomIndex]} </p>`;
    }else{
        const localText = shuffle(text);
        const data = localText.slice(0, items.value);
        const paras = data.map(
            (d) => {
                return `<p>${d}</p>`
            }
        )
        dataContainer.innerHTML = paras.join("");
        //array to string

    }

}