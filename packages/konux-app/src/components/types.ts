export interface Point {
  x: string;
  y: number;
}

export interface TimeSeriesType {
  data: Array<Point>;
}

export interface ChartOptions extends TimeSeriesType {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface DateTimeProps {
  dateTime?: Date;
}

export interface DateTimePropsWithEvents extends DateTimeProps {
  onChange(dt: Date): void;
}
