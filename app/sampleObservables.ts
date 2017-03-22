import { Observable } from 'rxjs';

document.getElementById("btnPromise").addEventListener("click", buttonClicked);
document.getElementById("btnObservable").addEventListener("click", buttonObservableClicked);

let count = 0;

var source = Observable.interval(1000);

var subscription1 = source.subscribe(
  function (x) { console.log('Observer 1: onNext: ' + x); },
  function (e) { console.log('Observer 1: onError: ' + e.message); },
  function () { console.log('Observer 1: onCompleted'); });

var subscription2 = source.subscribe(
  function (x) { console.log('Observer 2: onNext: ' + x); },
  function (e) { console.log('Observer 2: onError: ' + e.message); },
  function () { console.log('Observer 2: onCompleted'); });

setTimeout(function () {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 5000);

function displayData(data, from) {
    let jsonObj = JSON.parse(data);

    jsonObj.users.forEach(m => {
        var div = document.createElement("div")
        div.innerHTML = from + " " + m.name;
        document.body.appendChild(div);
    })
}

function buttonClicked() {
    let tempPromise = Observable.defer(() => {
        return new Promise(
            function (resolve, reject) {
                let xhr = new XMLHttpRequest();

                xhr.addEventListener("load", () => {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject("Error in Promise");
                    }

                })

                xhr.open("GET", "users.json");
                xhr.send()
            }
        )
    });

    tempPromise.subscribe(
        function (value) {
            displayData(value, "Promise");
        }
    )

    // tempPromise.catch(
    //     function (error) {
    //         console.log(error);
    //     }
    // )
}

let tempObservable = Observable.fromEvent(document, "mousemove")
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .filter(value => value.x < 100)

var url = "users.json";

function buttonObservableClicked() {
    let tempObservable = Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                observer.next(xhr.responseText);
                observer.complete("Complete");
            } else {
                observer.error("Error in Observable");
            }

        })

        xhr.open("GET", url);
        xhr.send()
    }).retryWhen(
        function(errors) {
            url = "users.json"
            return errors.delay(100);
        }
    )

    tempObservable.subscribe(
        (abc: any) => {
            displayData(abc, "Observable");
        },
        e => {
            console.log(e);
        },
        () => {
            console.log("completed");
        }
    )


}