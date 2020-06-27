package containers;

public class Testclass {

	public static void main(String[] args) {
		String result = "{\"negative\": 19,\"neutral\": 36, \"positive\": 45 }";
		result =result.replaceAll("\\s","");  
		result=result.replaceAll("\\{", "");
		result= result.replaceAll("\\}", "");
		result=result.replaceAll("\"", "");
		
		String [] tablo = result.split(":|,");
		
		for (int i = 0; i < tablo.length; i++) {
			System.out.println(tablo[i]);
			
		}

	}

}
