import React, { Component } from 'react';
import './css/Drawer.css';

export interface DrawerProps {
  onChange?: (visible: boolean) => void;
  visible?: boolean;
  width?: number;
  operaNode?: string;
  direction?: string;
  isOperateShow?: boolean;
  clientView?: number;
  style?: any;
}
export interface DrawerState {}

export default class Drawer extends Component<DrawerProps, DrawerState> {
  handlePosition = (
    direction: string,
    clientView: number,
    visible: boolean,
    width: number,
    type?: string,
  ) => {
    const transform = this.handleTransform(direction);
    const { view } = this.handleClientView(
      direction,
      clientView,
      visible,
      width,
      type,
    );

    return `${transform}(${view}px)`;
  };

  handleTransform = (direction: string) => {
    if (direction == 'left' || direction == 'right') {
      return 'translateX';
    } else if (direction == 'top' || direction == 'bottom') {
      return 'translateY';
    }

    return 'transform error';
  };

  // 返回箭头方向值跟抽屉位置
  handleClientView = (
    direction: string,
    clientView: number,
    visible: boolean,
    width: number,
    type?: string,
  ) => {
    let view, iconDeg;

    if (direction == 'left' || direction == 'right') {
      clientView =
        clientView ||
        (document.documentElement.clientWidth || document.body.clientWidth);
    } else if (direction == 'top' || direction == 'bottom') {
      clientView =
        clientView ||
        (document.documentElement.clientHeight || document.body.clientHeight);
    }

    if (direction == 'left' || direction == 'top') {
      if (type == 'operate') {
        view = visible ? width : 0;
      } else {
        view = visible ? 0 : -width;
      }

      iconDeg = visible ? 0 : 180;
    } else if (direction == 'right' || direction == 'bottom') {
      if (type == 'operate') {
        view = visible ? clientView - width - 60 : clientView - 60;
      } else {
        view = visible ? clientView - width : clientView;
      }

      iconDeg = visible ? 180 : 0;
    }

    return { view, iconDeg };
  };

  handleOperateClick = () => {
    const { onChange, visible } = this.props;
    let iconDeg = visible ? 180 : 0;

    onChange && onChange(!visible);

    this.setState({ iconDeg });
  };

  render = () => {
    const {
      children,
      width = (document.body.clientWidth ||
        document.documentElement.clientWidth) * 0.7,
      operaNode,
      direction = 'left',
      visible = false,
      isOperateShow = true,
      clientView = 0,
      style,
    } = this.props;
    const { iconDeg } = this.handleClientView(
      direction,
      clientView,
      visible,
      width,
    );

    const operateDrawer = (
      <div
        className="operate-drawer"
        style={{
          transform: this.handlePosition(
            direction,
            clientView,
            visible,
            width,
            'operate',
          ),
          background: `linear-gradient(to ${
            direction == 'left' ? 'right' : 'left'
          }, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))`,
        }}
        onClick={this.handleOperateClick}
      >
        <div
          className="scale-wrapper"
          style={{ transform: `rotateZ(${iconDeg}deg)` }}
        >
          {operaNode ? operaNode : <img src="../../assets/Drawer/arrow.png" />}
        </div>
      </div>
    );

    const showDrawer = (
      <div
        className="show-drawer"
        style={Object.assign(
          {},
          { width },
          {
            transform: this.handlePosition(
              direction,
              clientView,
              visible,
              width,
            ),
          },
          style,
        )}
      >
        {children}
      </div>
    );

    return (
      <div className="Drawer">
        {showDrawer}

        {isOperateShow && operateDrawer}
      </div>
    );
  };
}
