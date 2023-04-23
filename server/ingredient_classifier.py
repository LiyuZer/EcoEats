import pandas as pd
import cohere
import numpy as np
food = pd.read_csv("classifier.csv")
non_vegan = list(food["Not Vegan"])
non_vegetarian = list(food["Not Vegetarian"].dropna())
non_peanut_free = list(food["Not Peanut free"].dropna())
non_tree_nuts_free = list(food["not tree nuts free"].dropna())
non_dairy_free = list(food["Not Dairy Free"].dropna())
non_egg_free = list(food["Not Egg free"].dropna())
non_gluten_free = list(food["Not Gluten"].dropna())

non_vegan = [element.lower() for element in non_vegan]
non_vegetarian = [element.lower() for element in non_vegetarian]
non_peanut_free = [element.lower() for element in non_peanut_free]
non_tree_nuts_free = [element.lower() for element in non_tree_nuts_free]
non_dairy_free = [element.lower() for element in non_dairy_free]
non_egg_free = [element.lower() for element in non_egg_free]
non_gluten_free = [element.lower() for element in non_gluten_free]

co = cohere.Client("J9UBXrAUMKy4nLPbyyefYojUp9NQYosMNBcq9XQi")

def calculate_similarity(a, b):
  a = np.array(a).flatten()
  b = np.array(b).flatten()
  return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def is_vegan(ingredients):
    ingredient_embeddings = co.embed(ingredients).embeddings
    vegan_embeddings = co.embed(non_vegan).embeddings
    for ingredient in ingredients:
        if ingredient in non_vegan:
            return False            
    for i, ing_embedding in enumerate(ingredient_embeddings):
        for j, veg_embedding in enumerate(vegan_embeddings):
            if calculate_similarity(ing_embedding, veg_embedding) > 0.7:
                return False
    if is_egg_free(ingredients) == False:
        return False
    return True

def is_vegetarian(ingredients):
    ingredients = [ingredient.lower() for ingredient in ingredients]
    for ingredient in ingredients:
        if ingredient in non_vegetarian:
            return False
    return True

def is_peanut_free(ingredients):
    ingredients = [ingredient.lower() for ingredient in ingredients]
    for ingredient in ingredients:
        if ingredient in non_peanut_free:
            return False
    return True

def is_tree_nuts_free(ingredients):
    ingredients = [ingredient.lower() for ingredient in ingredients]
    for ingredient in ingredients:
        if ingredient in non_tree_nuts_free:
            return False
    return True

def is_dairy_free(ingredients):
    ingredients = [ingredient.lower() for ingredient in ingredients]
    for ingredient in ingredients:
        if ingredient in non_dairy_free:
            return False
    return True

def is_egg_free(ingredients):
    ingredients = [ingredient.lower() for ingredient in ingredients]
    for ingredient in ingredients:
        if ingredient in non_egg_free:
            return False
    return True

def is_gluten_free(ingredients):
    ingredients = [ingredient.lower() for ingredient in ingredients]
    for ingredient in ingredients:
        if ingredient in non_gluten_free:
            return False
    return True

test = ["WHITE WHEAT FLOUR", "SUGAR", "WICLFLOUR", "CANOLA OIL", "FRUCTOSE", "PEANUTS", "DEXTROSE", "UEXTRIN", "SALT", "CALCIUM CARBONATE", "EGG", "CINNAMON","TAISODIL", "SODIUM ASCOR-BANE", "COLOIWIN", "NATUVITAMIN & PALI2 YSU Â© Protein 4"]
print("VEGAN", is_vegan(test))
print("VEGETARIAN", is_vegetarian(test))
print("PEANUT FREE", is_peanut_free(test))
print("TREENUT FREE", is_tree_nuts_free(test))
print("DAIRY FREE", is_dairy_free(test))
print("GLUTEN FREE", is_gluten_free(test))
print("EGG FREE", is_egg_free(test))