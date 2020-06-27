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
				MessageTemplate msgTemplate_Reservation = MessageTemplate.MatchOntology("analysesentiment");
				ACLMessage message = receive(msgTemplate_Reservation);
				Map<String, Integer> data = new HashMap<>();
				if(message != null) {
					String result = message.getContent();
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
					DB database = mongoClient.getDB("test");
					DBCollection collection = database.getCollection("scraping");
					DBObject person = new BasicDBObject(data);
                            
					
					collection.insert(person);
				}
				else {
					block();
				}
				
			}
		});
	}

}
