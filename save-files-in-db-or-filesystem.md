
# Which is Better ? Saving Files in Database or in File System

https://habiletechnologies.com/blog/better-saving-files-database-file-system/

If you are indecisive in choosing the best way to save a file uploaded to your server, Then cheers mate because you are not the only one feeling so.

As a developer, Sometimes I feel confused when asked to choose the optimal way of doing certain simple yet conflicting things, later I realized that understanding the circumstances and requirements paves the way for making the right choice.

If you are in a custom to store Files in a File System thinking that File System’s was created for the purpose to hold files or If you are not bothered with the advantages of using Database for saving files in certain scenarios then it’s time to reconsider your choice, my friend! This is because modern DBMS has focused on improving the storage of large blobs.

Let’s see some pros and cons involved in saving the files in the file system and database.

## Pros of the File system:

- Performance can be better than doing it in db. To justify this, If you store large files in db then it may slow down the performance because a simple query to retrieve the list of files or filename will also load the file data if you used Select * in your query. While Files system accessing a file is quite simple and light weight.

- Saving the files and downloading them in the file system is much simpler than database since a simple Save as function will help you out. Downloading can be done by addressing an URL with the location of the saved file.

- Migrating the data is an easy process here. You can just copy and paste the folder to your desired destination while ensuring that write permissions are provided to your destination.

- Cost effective as It is Economical in most of the cases to expand your web server rather than paying for certain Databases.
Easy to migrate it to Cloud storage like Amazon S3 or CDNs etc in the future.

## Cons of the File system:

- Loosely packed. No ACID (Atomicity, Consistency, Isolation, Durability) operations relational mapping which mean there is no guarantee. Consider a scenario if your files are deleted from the location manually or by some hacking dudes, you might not know whether the file exists or not. Painful right?

- Low Security. Since your files can be saved in a folder where you should have provided write permissions, it is prone to safety issues and invites troubles like hacking. So it is best to avoid saving in fs if you cannot afford to compromise in terms of security.

## When is it most preferred:

- If your application is liable to handle Large files of size more than 5MB and the massive number say thousands of file uploads.   
- If your application can land you on cloud nine, I mean your application will have a large number of users.

Best way to do: Though File System comes with some cost and certain cons, A good Internal Folder Structure and choosing a folder location which may be a little difficult to access by others.

## Pros of Database:

- ACID consistency which includes a rollback of an update that is complicated when the files are stored outside the database.

- Files will be in sync with the database so cannot be orphaned from it which gives you an upper hand in tracking transactions.
Backups automatically include file binaries.
More Secure than saving in a File System.

## Cons of Database:

- You may have to convert the files to blob in order to store it in db.
- Database Backups will become more hefty and heavy.
- Memory ineffective. To add more, often RDBMS’s are RAM driven. So all data has to go to RAM first. Yeah, that’s right. Had you ever thought about what happens when an RDBMS has to find and sort data? RDBMS tracks each data page even lowest amount of data read/written, and it has to track if it’s in memory or if it’s on disk if it’s indexed or sorted physically etc.

P.S: I have skipped some contradictory points to curtail the content because while Comparing two things we often end up finding the Pros and Cons of one will be the opposite of other.

## When is it most preferred:

- If your user’s file needs to be more tightly coupled, secured and confidential.   
- If your application will not demand a large number of files from a large number of users.

## Best way to do:

- Be cautious with your Select query, Avoid Unwanted Select * queries which may frequently retrieve the file data unnecessarily.

- Caching the file data can pave a way to reduce memory and database usage.

- If you are using SQL server 2008 or higher version, make use of FILESTREAM.

Filestream enables storing BLOB data in NTFS while at the same time it ensures transactional consistency between the unstructured Blob data with a structured data in db.

To explore more about File stream, Please refer this link. 

After reading this quite Big blog with a lot of patience, you may find that I didn’t state which is the better yet. So to conclude the answer is “It depends”.

I know that the answer might make you furious but honestly, the key lies in analyzing your requirements and anticipating the worst cases before hand.

Based on our product requirement, We Habilens opt for file system when we deal with massive quantity and heavy files and we go the db way in cases with arguably lighter and lesser number of files.

Adapting to Filestream feature of SQL server 2008  could be a worthy try, though. So We in Habile have initiated incorporating File stream. We encourage you to do the same if you could afford.

Because in the world of survival of fittest, it’s significant to utilize the technology to fullest. 

## Which One To Use?

https://www.2ndquadrant.com/en/postgresql/postgresql-vs-mysql/

For new projects, determine if you are going to port to closed software later on. In that case, PostgreSQL is closer to Oracle, and any code made for PostgreSQL will port to Oracle easily. MySQL has moved away from the SQL standard somewhat. PostgreSQL is more reliable because it is ACID (Atomicity, Consistency, Isolation, and Durability) compliant which means queries will maintain data integrity, and return the same output without error.

MySQL is less reliable and not ACID compliant: The way it handles foreign key references, auditing and transactions make it less reliable. MySQL is good if you are thinking you may use code from other open source projects. Since it is widely used in smaller websites, there are plenty of add-ons, plugins and modules to optimize MySQL from popular software like Wordpress, Drupal and Joomla.

## Showdown: MySQL 8 vs PostgreSQL 10

http://blog.dumper.io/showdown-mysql-8-vs-postgresql-10/
