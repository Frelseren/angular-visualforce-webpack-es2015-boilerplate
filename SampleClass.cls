public with sharing class SampleController {
  public List<Heroes> heroes {get; set;}
  public String heroesJSON {get; set;}
  
  public SampleController() {
    heroes = new List<Heroes>();
    Heroes hero = new Heroes();
    hero.id = 11;
    hero.name = 'Mr. IQ';
    heroes.add(hero);
    heroesJSON = JSON.serialize(heroes);
  }
  
  public class Heroes {
    public Integer id {get; set;}
    public String name {get; set;}
  }
}