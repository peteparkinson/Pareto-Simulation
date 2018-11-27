# Pareto-Simulation

i'm sending this over to javascript so i can animate players to dollars on a grid<br><br>
this simulation demonstrates a pareto distribution emerging from a game devised using coinflips.<br>
a large group of individuals are each given the same chosen dollar amount.<br>
the group is divided into random pairs.<br>
each pair fips a coin and the winner receives a dollar from the loser.<br>
repeat using a new random pairings<br>
if a player reaches 0, they can no longer play.<br>
the money will not evenly distribute despite the coinfilp being ~50/50.<br>
the money will instead fall into a pareto distribution.<br><br>
at conception, the program will divide the group of players into as many pairs as possible,<br>
and then have all pairs flip.<br>
leaving out 1 random player if the number of players is odd.<br>
this is in contrast to randomly selecting a single pair and performing a single flip.<br>
however, both outcomes do appear to yield the same distribution.<br>
