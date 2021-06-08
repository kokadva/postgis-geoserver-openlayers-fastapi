from sqlalchemy.orm import sessionmaker

from models import Points, Polygons
from _sqlalchemy import engine


def coordinates_to_geoemtry(object_type, coordinates):
    result = ''
    if object_type == 'Point':
        result = '{_type}({cord1} {cord2})'.format(_type=object_type, cord1=coordinates[0], cord2=coordinates[1])
    if object_type == 'Polygon':
        result += object_type + '(('
        result += ', '.join(list(map(lambda x: '' + str(x[0]) + ' ' + str(x[1]), coordinates[0])))
        result += '))'
    return result


def save_feature(feature_type, coordinates, category):
    geometry = coordinates_to_geoemtry(feature_type, coordinates)
    print(geometry)
    Session = sessionmaker(bind=engine)
    if feature_type == 'Point':
        result = Points(geom=geometry, category=category)
    else:
        result = Polygons(geom=geometry)
    session = Session()
    session.add(result)
    session.commit()
