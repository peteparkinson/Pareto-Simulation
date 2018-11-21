import java.util.ArrayList;
import java.util.Arrays;

public class Main {
	
	public static void main(String[] args){

		//number of players
		int num = 100;
		int dollars = 100;
		int iterations = 1000000;
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
			if(flipCoin()){
				players[player1]++;
				players[player2]--;
			} else {
				players[player1]--;
				players[player2]++;
			}
			available.add(player1);
			if(players[player1] == 0){
				available.remove(available.indexOf(player1));
			}
			if(players[player2] == 0){
				available.remove(available.indexOf(player2));
			}
		}
		/*
		for(int x : players){
			System.out.println(x);
		}
		*/
	}
	
	public static boolean flipCoin() {
		return Math.random() > .5;
	}

}
