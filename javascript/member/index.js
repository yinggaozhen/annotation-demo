
'use strict';

/**
 * @link http://usejsdoc.org/tags-member.html
 */
class ClassForMember {

    /**
     * @public
     */
    publicMethod() {
    }

    /**
     * @private
     */
    privateMethod() {

    }
}

/** @member {ClassForMember} PersonVariable */
PersonVariable.publicMethod();  // right
PersonVariable.privateMethod(); // warning