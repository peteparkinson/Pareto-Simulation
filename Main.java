import java.util.ArrayList;
import java.util.Arrays;

public class Main {
	
	public static void main(String[] args){

		//number of players
		int num = 100;
		int dollars = 100;
		int iterations = 100000000;
		int roundsPlayed = 0;
		int player1;
		int player2;
		
		int[] players = new int[num];
		ArrayList<Integer> available = new ArrayList<Integer>();
		
		Arrays.fill(players, dollars);
		
		for(int i = 0; i < num; i++){
			available.add(i);
		}
		
		for(int i = 0; i < iterations; i++){
			player1 = available.get((int) (Math.random() * available.size()));
			player2 = available.get((int) (Math.random() * available.size()));
			if(player1 == 0 || player2 == 0) {
				continue;
			}
			if(flipCoin()){
				players[player1]++;
				players[player2]--;
			} else {
				players[player1]--;
				players[player2]++;
			}
			for(int j = 0; j < available.size(); j++) {
				if(players[j] < 1) {
					available.remove(j);
				}
			}
			roundsPlayed++;
		}
		for(int x : players){
			System.out.println(x);
		}
		System.out.println("\n" + roundsPlayed);
	}
	
	public static boolean flipCoin() {
		return Math.random() > .5;
	}

}
