<?php

/*
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Aisel\NavigationBundle\Controller\Admin;

use Aisel\ResourceBundle\Controller\Admin\AbstractNodeController;

/**
 * ApiController
 *
 * @author Ivan Proskoryakov <volgodark@gmail.com>
 */
class ApiController extends AbstractNodeController
{

    protected $nodeManager = "aisel.navigation.node.manager";

}
