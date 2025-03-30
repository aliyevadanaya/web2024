from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.URLField(default='https://via.placeholder.com/150')
    likes = models.IntegerField(default=0)
    rating = models.FloatField(default=0.0)
    link = models.URLField(default='https://example.com')

    def __str__(self):
        return self.name
