package com.peregrine.admin.resource;

import org.apache.sling.api.resource.PersistenceException;
import org.apache.sling.api.resource.Resource;

import javax.jcr.RepositoryException;

/**
 * Created by schaefa on 6/22/17.
 */
public interface ResourceRelocation {

    /**
     * Moves the given Resource to a new Parent. If the to parent
     * is the same as the from resource parent then the call is
     * ignored and the from resource is returned
     *
     * @param from Resource to be moved
     * @param toParent Resource to which the from is added to
     * @param updateReferences If true all references to the from resource are changed as well
     * @return Resource of the moved resource
     */
    public Resource moveToNewParent(Resource from, Resource toParent, boolean updateReferences) throws PersistenceException;

    /**
     * Reorders the source child inside the parent to be placed before
     * or after the given target
     *
     * @param parent Parent Resource in which the resource is reordered
     * @param sourceChildName Name of the child resource to be reordered
     * @param targetChildName Name of the resource of which the source resource is added before or after
     * @param before If true the source resource will be placed ahead of the target otherwise after than one
     */
    public void reorder(Resource parent, String sourceChildName, String targetChildName, boolean before) throws RepositoryException;

    /**
     * Renames a resource to a new name. This will cause
     * the resource to be placed out of order
     *
     * @param from Resource to be renamed
     * @param newName New name of the resource
     * @return The renamed resource
     */
    public Resource rename(Resource from, String newName, boolean updateReferences) throws RepositoryException;
}
