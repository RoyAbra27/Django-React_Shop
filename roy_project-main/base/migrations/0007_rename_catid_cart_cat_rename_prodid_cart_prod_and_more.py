# Generated by Django 4.0.6 on 2022-08-06 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_order'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cart',
            old_name='catId',
            new_name='cat',
        ),
        migrations.RenameField(
            model_name='cart',
            old_name='prodId',
            new_name='prod',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='catId',
            new_name='cat',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='prodId',
            new_name='prod',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='desc',
            new_name='description',
        ),
    ]