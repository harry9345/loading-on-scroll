let pictures = [
  {
    id: 0,
    path: "https://picsum.photos/400/500",
    like: true,
    comment: ["nice one!"],
    discription: "",
  },
  {
    id: 1,
    path: "https://picsum.photos/300/300?grayscale&blur=2?random",
    like: false,
    comment: ["Oh wow", "i need 1 too", "whhhat?"],
    discription: "",
  },
  {
    id: 2,
    path: "https://picsum.photos/300/300?grayscale?random",
    like: false,
    comment: ["Great when was that?"],
    discription: "",
  },
  {
    id: 3,
    path: "https://picsum.photos/300/300?blur",
    like: true,
    comment: ["Oh i miss you guys"],
    discription: "",
  },
  {
    id: 4,
    path: "https://picsum.photos/300/300?blur?random",
    like: true,
    comment: ["Let hang out some times"],
    discription: "",
  },
  {
    id: 5,
    path: "https://picsum.photos/300/300?blur?random",
    like: false,
    comment: ["No comment"],
    discription: "",
  },
  {
    id: 6,
    path: "https://picsum.photos/300/300?grayscale",
    like: true,
    comment: ["Yayyyyyyyy"],
    discription: "",
  },
  {
    id: 7,
    path: "https://picsum.photos/300/300?blur",
    like: false,
    comment: ["hahahhahaahaah LoL"],
    discription: "",
  },
  {
    id: 8,
    path: "https://picsum.photos/300/300?grayscale?random",
    like: true,
    comment: ["Are you seriuse!!!"],
    discription: "",
  },
  {
    id: 9,
    path: "https://picsum.photos/300/300?grayscale&blur=2",
    like: false,
    comment: ["Take my money"],
    discription: "",
  },
  {
    id: 10,
    path: "https://picsum.photos/300/300?grayscale",
    like: false,
    comment: ["Thats my man"],
    discription: "",
  },
  {
    id: 11,
    path: "https://picsum.photos/300/300?blur?random",
    like: true,
    comment: ["noooooooooo"],
    discription: "",
  },
  {
    id: 12,
    path: "https://picsum.photos/300/300?random",
    like: false,
    comment: ["ok im in"],
    discription: "",
  },
  {
    id: 13,
    path: "https://picsum.photos/300/300",
    like: true,
    comment: [],
    discription: "",
  },
];

let $ = document;
let content = $.getElementById("content");
let ulPicture = $.createElement("ul");
content.appendChild(ulPicture);
ulPicture.className = "list-group list-group-flush";

loadPage();

function loadPage() {
  let i;
  for (i = 0; i < pictures.length; i++) {
    ulPicture.insertAdjacentHTML(
      "beforeEnd",
      ` 
        <li class="list-group-item" id="${pictures[i].id}">
            <div class="picture">
                <img src="${pictures[i].path}" class="rounded mx-auto img-thumbnail d-block mb-3" alt="${pictures[i].discription}">
                <div class="comment">
                    <input type="text" type="text" placeholder="Your Comment"/>
                   <div class="showComment"> ${pictures[i].comment}</div>
                </div>
                <i class="far fa-heart" id="${pictures[i].id}" onclick="changeLike(this.id)"></i>
            </div> 
        </li>

      `
    );
  }
}

let iTag = $.getElementsByTagName("i");
function changeLike(id) {
  let i;
  let j;
  for (i = 0; i < pictures.length; i++) {
    if (pictures[i].id == id) {
      pictures[i].like = !pictures[i].like;
      for (j = 0; j < iTag.length; j++) {
        if (iTag[j].id == id && pictures[i].like === true) {
          iTag[
            j
          ].outerHTML = `<i class="fas fa-heart" id="${pictures[i].id}" onclick="changeLike(this.id)"></i>`;
        } else if (iTag[j].id == id && pictures[i].like === false) {
          iTag[
            j
          ].outerHTML = `<i class="far fa-heart" id="${pictures[i].id}" onclick="changeLike(this.id)"></i>`;
        }
      }
    }
  }
}

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    runSppiner();
    console.log("fadf");
    olderPost();
    loadPage();
  }
};

function runSppiner() {
  let spinner = $.getElementById("spinner");
  spinner.className = "spinner-border text-primary";
  spinner.role = "status";
  let spinerSpan = $.createElement("span");
  spinerSpan.className = "visually-hidden";
  spinner.appendChild(spinerSpan);
}

function olderPost() {
  ulPicture.insertAdjacentHTML(
    "beforeend",
    `<p>Loading your older post : </p>`
  );
}
