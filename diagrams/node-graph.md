# Story graph (`data/nodes.ts`)

Full visualization of every node in `data/nodes.ts` and every edge between them. Regenerate/update this by hand whenever nodes are added, removed, or rewired - it's meant to be a living reference for spotting soft-locks and dead loops before they ship, not a build artifact.

## Legend

- **Solid thick arrow (`==>`), labeled** - a repeatable option (`eliminatesOnClick: false`). Can be clicked forever.
- **Dotted arrow (`-.->`), labeled** - a one-shot option (`eliminatesOnClick: true`). Once clicked, it's gone for the rest of the session.
- **Thin plain arrow (`-->`), unlabeled** - clicking the node's title/notice (`notice.nextNode`). Always available, no player choice involved.
- **Dashed node border** - a self-looping node (`notice.nextNode` equals its own key). Per the `selfLoopingNodesRetainAnEscape` check in `getNodes()`, every dashed node must keep at least one thick (`==>`) outgoing edge, or the player can get soft-locked once every option is eliminated.
- **Green** - the start (node 0). **Red** - death (999). **Orange** - game over / restart (9999).

When adding new nodes: watch for two nodes that only ever point back at each other with no third way out (a repeatable 2-cycle) - that produces the "same prompt forever" bug that was fixed for nodes 7/13 and 17/18. A node is safe as long as it always has a path toward 999, even if that path is long.

```mermaid
flowchart TD
    classDef start fill:#2e7d32,stroke:#1b5e20,color:#fff
    classDef death fill:#b71c1c,stroke:#7f0000,color:#fff
    classDef gameover fill:#e65100,stroke:#bf360c,color:#fff
    classDef selfloop stroke-dasharray: 4 3,stroke-width:2px

    N0["0: You awake to find yourself..."]
    N1["1: ...in a dark room!"]
    N3["3: What will you do?"]
    N4["4: ...it's a dark room?"]
    N5["5: You sleep for a solid 8 hours."]
    N6["6: Still a dark room..."]
    N7["7: How do you know where north is?"]
    N8["8: You cry."]
    N10["10: Smile!"]
    N11["11: It's... still a dark room."]
    N12["12: You don't have a flashlight."]
    N13["13: No you're not."]
    N14["14: You don't have a smartphone. I have it now."]
    N15["15: Intuition aye?"]
    N16["16: Oh really? Well then where to Captain?"]
    N17["17: Eventually you reach a wall"]
    N18["18: You sick f***s! Gross!"]
    N19["19: The wall feels soft; almost furry?"]
    N20["20: ..."]
    N21["21: You put on a red bandana and then..."]
    N22["22: You look ridiculous for a moment and then..."]
    N23["23: Smile?"]
    N24["24: You just punched the air... why'd you do that?"]
    N25["25: Hahaha! Pathetic. Guess what?"]
    N26["26: No, I really am an alien."]
    N27["27: Sure you are. And I'm the King of Space."]
    N28["28: Fine. I'll prove it."]
    N29["29: You attempt to phone home..."]
    N30["30: You do it again anyway."]
    N999["999: You die! You DIE! YOU DIE!!!"]
    N9999["9999: Game Over! Try again?"]

    %% continue edges: clicking the title, always available
    N0 --> N1
    N1 --> N3
    N5 --> N0
    N11 --> N6
    N12 --> N6
    N13 --> N26
    N14 --> N10
    N15 --> N999
    N17 --> N16
    N18 --> N30
    N22 --> N999
    N25 --> N999
    N26 --> N27
    N27 --> N28
    N28 --> N29
    N29 --> N999
    N30 --> N999
    N999 --> N9999
    N9999 --> N0

    %% option edges
    N3 ==>|"Try turn on light"| N4
    N3 -.->|"Go back to sleep"| N5
    N3 ==>|"Scream loudly"| N6
    N3 ==>|"Go North"| N7

    N4 -.->|"Oh yeah..."| N3
    N4 -.->|"Umm.. go back to sleep?"| N5
    N4 ==>|"Extend your arms and walk forward"| N17
    N4 ==>|"Lie down and try not to cry"| N8

    N6 -.->|"Try scream some more."| N11
    N6 -.->|"Take out your flashlight"| N12
    N6 ==>|"Crawl... north?"| N7
    N6 -.->|"Cry."| N8

    N7 ==>|"I am an alien."| N13
    N7 -.->|"My smartphone has a compass"| N14
    N7 -.->|"Intuition!"| N15
    N7 -.->|"Because I am the captain now!"| N16

    N8 -.->|"Cry."| N8
    N8 -.->|"Cry!"| N8
    N8 -.->|"Cry?"| N8
    N8 ==>|"Don't cry."| N10

    N10 ==>|"What?"| N23
    N10 ==>|"Someone there?"| N20
    N10 ==>|"Run forwards!"| N17
    N10 ==>|"Flail your arms around!"| N999

    N16 -.->|"Mars?"| N999
    N16 -.->|"To a dark room!"| N0
    N16 ==>|"How about... north?"| N7

    N17 -.->|"Caress the wall"| N19
    N17 -.->|"Step back and leap into wall"| N999
    N17 ==>|"Follow wall North!"| N7
    N17 ==>|"Lick it?"| N18

    N19 -.->|"Lick it?"| N18
    N19 -.->|"Stroke the furry wall!"| N18
    N19 ==>|"Lean against wall"| N10

    N20 -.->|"Go full Chuck Norris!"| N21
    N20 ==>|"Stare blankly into the abyss"| N999

    N21 -.->|"Backflip"| N999
    N21 -.->|"Flail your arms around!"| N999
    N21 ==>|"Wax on, Wax off"| N999
    N21 -.->|"Pose like Bruce Lee"| N22

    N23 -.->|"No."| N23
    N23 ==>|"Crack a small smile"| N999
    N23 -.->|"No thank you."| N23
    N23 ==>|"Punch the air in front of you."| N24

    N24 -.->|"Deeply rooted anger issues!"| N23
    N24 ==>|"Because; I. Am. SPARTA!"| N25

    class N0 start
    class N999 death
    class N9999 gameover
    class N3,N4,N6,N7,N8,N10,N16,N19,N20,N21,N23,N24 selfloop
```
