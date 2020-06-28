package agents;

import java.util.HashMap;
import java.util.Map;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

import jade.core.Agent;
import jade.core.behaviours.CyclicBehaviour;
import jade.core.behaviours.ParallelBehaviour;
import jade.lang.acl.ACLMessage;
import jade.lang.acl.MessageTemplate;

public class DBAgent extends Agent{
	@Override
	protected void setup() {
		ParallelBehaviour parallelBehaviour = new ParallelBehaviour();
		addBehaviour(parallelBehaviour);
		parallelBehaviour.addSubBehaviour(new CyclicBehaviour() {
			
			@Override
			public void action() {
				MessageTemplate msgTemplate_nature = MessageTemplate.MatchOntology("nature");
				MessageTemplate msgTemplate_economy= MessageTemplate.MatchOntology("economy");
				MessageTemplate msgTemplate_politics = MessageTemplate.MatchOntology("politics");
				MessageTemplate msgTemplate_Mhealth= MessageTemplate.MatchOntology("mentalhealth");
				ACLMessage nature_message = receive(msgTemplate_nature);
				ACLMessage economy_message = receive(msgTemplate_economy);
				ACLMessage politics_message = receive(msgTemplate_politics);
				ACLMessage Mhealth_message = receive(msgTemplate_Mhealth);
				
				if(nature_message != null) {
					Map<String, Integer> data = new HashMap<>();
					String result = nature_message.getContent();
					result =result.replaceAll("\\s","");  
					result=result.replaceAll("\\{", "");
					result= result.replaceAll("\\}", "");
					result=result.replaceAll("\"", "");
					
					String [] table = result.split(":|,");
					
					for (int i = 0; i < table.length; i++) {
						System.out.println(table[i]);
						
					}
					for (int j = 0; j < table.length; j+=2) {
						data.put(table[j], Integer.valueOf(table[j+1]));
					}
					
					MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
					DB database = mongoClient.getDB("scrapingDB");
					DBCollection collection = database.getCollection("nature");
					DBObject nature = new BasicDBObject(data);
                            
					
					collection.insert(nature);
				}
				else if(economy_message != null) {
					Map<String, Integer> data = new HashMap<>();
					String result = economy_message.getContent();
					result =result.replaceAll("\\s","");  
					result=result.replaceAll("\\{", "");
					result= result.replaceAll("\\}", "");
					result=result.replaceAll("\"", "");
					
					String [] table = result.split(":|,");
					
					for (int i = 0; i < table.length; i++) {
						System.out.println(table[i]);
						
					}
					for (int j = 0; j < table.length; j+=2) {
						data.put(table[j], Integer.valueOf(table[j+1]));
					}
					
					MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
					DB database = mongoClient.getDB("scrapingDB");
					DBCollection collection = database.getCollection("economy");
					DBObject economy = new BasicDBObject(data);
					
					collection.insert(economy);
				}
				else if (politics_message != null) {
					Map<String, Integer> data = new HashMap<>();
					String result = politics_message.getContent();
					result =result.replaceAll("\\s","");  
					result=result.replaceAll("\\{", "");
					result= result.replaceAll("\\}", "");
					result=result.replaceAll("\"", "");
					
					String [] table = result.split(":|,");
					
					for (int i = 0; i < table.length; i++) {
						System.out.println(table[i]);
						
					}
					for (int j = 0; j < table.length; j+=2) {
						data.put(table[j], Integer.valueOf(table[j+1]));
					}
					
					MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
					DB database = mongoClient.getDB("scrapingDB");
					DBCollection collection = database.getCollection("politics");
					DBObject politic = new BasicDBObject(data);
					
					collection.insert(politic);
				}
				else if (Mhealth_message != null) {
					Map<String, Integer> data = new HashMap<>();
					String result = Mhealth_message.getContent();
					result =result.replaceAll("\\s","");  
					result=result.replaceAll("\\{", "");
					result= result.replaceAll("\\}", "");
					result=result.replaceAll("\"", "");
					
					String [] table = result.split(":|,");
					
					for (int i = 0; i < table.length; i++) {
						System.out.println(table[i]);
						
					}
					for (int j = 0; j < table.length; j+=2) {
						data.put(table[j], Integer.valueOf(table[j+1]));
					}
					
					MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
					DB database = mongoClient.getDB("scrapingDB");
					DBCollection collection = database.getCollection("mentalhealth");
					DBObject health = new BasicDBObject(data);
					collection.insert(health);
				}
				else {
					block();
				}
			}
		});
	}

}
