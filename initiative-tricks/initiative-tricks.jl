using DataStructures

# Creatures are going to be the vlaues in our queue.
q = Queue{String}()
l = Dict{String,Int}()

function main()
    println("Welcome to Initiative Tricks! This program is used to change the initatives of creatures in initiative mid-combat for Dungeons and Dragons 5e.")

    collection()

    run_combat()
end

function collection()
    go_on = true
    while go_on
        print("Creature name: ")
        # TODO: Collect name here
        print("Creature initiative: ")
        # TODO: Collect initiative number here
        # TODO: Add string and number pair to dictionary 
        print("Continue? (y/n): ")
        # TODO: collect input

    end
end

function run_combat()
    # TODO
end

function alter_init()
    # TODO
end