console.log("Hello!")

let puzzle = []

let edit = true
let prep = false

/*
*/
document.addEventListener('DOMContentLoaded', () => {
    const e_btn = document.getElementById("edit")
    e_btn.addEventListener('click', (e) => {
        edit = !edit
        if (edit) {
            e.target.innerHTML = 'Editing'
            nodes = document.querySelectorAll(".pzlbtn")
            nodes.forEach(element => {
                if (element.classList.contains('hide')) {
                    element.classList.remove('hide')
                }
            });
        } else {
            e.target.innerHTML = 'Edit'
            const nodes = document.querySelectorAll(".pzlbtn")
            nodes.forEach(element => {
                if (!element.classList.contains('active')) {
                    element.classList.add('hide')
                }
            });
        }

    });
    const p_btn = document.getElementById("prep")
    p_btn.addEventListener('click', (e) => {
        prep = !prep
        const nodes = document.querySelectorAll(".active")
        if (prep) {
            e.target.innerHTML = 'Prepping'
            nodes.forEach(element => {
                element.classList.add('red')
            })
        } else {
            e.target.innerHTML = 'Prep'
            nodes.forEach(element => {
                element.classList.remove('red')
                element.classList.remove('blue')
                element.classList.remove('green')
            })
        }

    });
    create_puzzle();

});




/*
*/
function create_puzzle() {
    let id = 0
    for (id; id < 25; id++) {
        nghbrs = calc_nghbrs(id)
        const pzl_el = { id: id, nghbr_ids: nghbrs };

        puzzle.push(pzl_el);
        create_button(id);


    }
}

/*
*/
function create_button(id) {
    const pzl_btn = document.createElement('button');
    pzl_btn.textContent = `${id}`;
    pzl_btn.classList.add('pzlbtn')
    pzl_btn.id = id
    pzl_btn.addEventListener('click', (e) => {
        val = e.target.id
        el = puzzle.find((element) => element.id == val)
        // console.log(`${el.id}`)
        // console.log(`${el.nghbr_ids}`)
        if (edit && !prep) {
            if (!e.target.classList.contains('active')) {
                e.target.classList.add('active')
            } else {
                e.target.classList.remove('active')
            }

            el.active = true
        }
        if (prep && !edit) {
            change(el.id)
            el.nghbr_ids.forEach(id => {
                console.log(id)
                change(id)
            })
        }
    });
    const pzl = document.getElementById('pzl');
    pzl.appendChild(pzl_btn);
}

/*
*/
function change(id) {
    const el = document.getElementById(id)
    if (el.classList.contains('inactive')) {

    }
    const c_list = el.classList
    if (el.classList.contains('hide')) {
        return
    } else if (c_list.contains('blue')) {
        console.log('blue')
        el.classList.remove('blue')
        el.classList.add('red')
    } else if (c_list.contains('red')) {
        console.log('red')
        el.classList.remove('red')
        el.classList.add('green')
    } else if (c_list.contains('green')) {
        console.log('green')
        el.classList.remove('green')
        el.classList.add('blue')
    }

}



/*
*/
function calc_nghbrs(id) {
    n_list = []
    u_n = id - 5
    d_n = id + 5
    l_n = id - 1
    r_n = id + 1
    if (check_vert_nghbr(u_n) == true) {
        n_list.push(u_n)
    }
    if (check_vert_nghbr(d_n) == true) {
        n_list.push(d_n)
    }
    if (check_hor_nghbr(id, l_n) == true) {
        n_list.push(l_n)
    }
    if (check_hor_nghbr(id, r_n) == true) {
        n_list.push(r_n)
    }
    if (id == 12) {
        console.log(n_list.toString())
    }
    return n_list
}

/*
*/
function check_vert_nghbr(n_id) {
    if (n_id >= 0 && n_id <= 24) {
        return true
    }
    return false
}

/*
*/
function check_hor_nghbr(id, n_id) {
    if ((n_id % 5 != 0 || id - n_id == 1) && (n_id % 5 != 4 || n_id - id == 1) && n_id <= 24 && n_id >= 0) {
        return true
    }
    return false
}