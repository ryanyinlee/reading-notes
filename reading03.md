## Revisions and the Cloud

#### Version Control

Version control lets a coder go back to previous iterations of their software by creating snapshots of past versions.

This allows them to seen changes and in the case of teams, what individuals have done. 

The purpose of this allows a quick way to fix mistakes caused by more recent updates.

#### Local Version Control

The older (oldest?) version control - One database on your local drive that has the changes you make to the files.

#### Centralized Version Control System (CVCS)

Required when a team or teams must work on a single set of files. A single server stores the the changes, accessible remotely and removes the requirement for local databases.

**Advantages**: 
- Can see what your team-mates are up to.
- Easy to delegate control over who can change what.

**Weaknesses**:
- If the single central server goes down, no one can work. If it's destroyed or attacked, no one can work and the work is lost.

#### Distributed Version Control System (DVCS)

Because a CVCS is vulnerable at a single point, this is a similar system with mirrored databases that can be modified. In the event one goes down it can be reproduced using the data from a mirrored database.

**Advantages**:
- Teams can work on more projects at once with multiple workflows.
- No central location vulnerable to attack or catapstrophic loss.

---

### So, what is Git?
---

**Snapshots**

Git is a DVCS where a coder's saves are known as a *commit* which Git will save a version of called a *snapshot*.

It will also give the coder access to a reference to the snapshot.

**Local Operations, Tracking Changes, Loss of Data**

Git uses local operations on the coder's hard disk as this allows work to be done offline, but also tracks every change to a file or directory, as well as loss of data or corruption. Snapshots are supposed to be very difficult to lose.

**States**

Git files are primarly in 3 main states.

1) Committed: Data is stored securely.
2) Modified: Data has been modified, but not stored.
3) Staged: The changed data has been marked to be stored.










