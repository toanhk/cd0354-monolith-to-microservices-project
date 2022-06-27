export const config = {
  'username': 'toanhk',
  'password': '123456789',
  'database': 'postgres',
  'host': 'cdr.cq5az50afkfl.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'default',
   'aws_media_bucket': 'test-984940075737-dev',
  //'aws_media_bucket': 'test-646588003504-dev',
  'url': process.env.URL,
  'jwt': {
    'secret': 'hello',
  },
};
