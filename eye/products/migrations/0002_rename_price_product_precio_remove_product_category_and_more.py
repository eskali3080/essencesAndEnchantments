# Generated by Django 5.0.7 on 2024-07-29 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='price',
            new_name='precio',
        ),
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
        migrations.RemoveField(
            model_name='product',
            name='name',
        ),
        migrations.AddField(
            model_name='product',
            name='categoria',
            field=models.CharField(choices=[('colonias', 'Colonias'), ('cremas', 'Cremas'), ('otros', 'Otros')], default='default', max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='imagen',
            field=models.ImageField(default='default', upload_to='productos/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='nombre',
            field=models.CharField(default='default', max_length=255),
            preserve_default=False,
        ),
    ]
