# Generated by Django 4.0.6 on 2022-08-21 15:23

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0013_alter_order_amount_alter_order_total_price'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Categoriy',
            new_name='Category',
        ),
    ]
