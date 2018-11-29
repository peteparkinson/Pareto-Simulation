# Pareto-Simulation

this simulation demonstrates a pareto distribution emerging from a game devised using coinflips.<br>
of a group of players, each is given the same chosen dollar amount.<br>
the group is divided into random pairs.<br>
each pair flips a coin and the winner receives a dollar from the loser.<br>
repeat using new random pairings<br>
if a player reaches 0, they can no longer play.<br>
the money will not distribute normally despite the coinfilp being ~50/50.<br>
the money will instead fall into a pareto distribution.<br><br>
players are stored in an array and are removed from the array upon reaching 0.<br>
the array is iterated, assuring each player flips at least once per round.<br>
a second opponent is chosen randomly.<br>
