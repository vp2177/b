ScatterPlot <- function(file, xcol, ycol) {
    dat <- read.csv(file) # header= 
    #print()
    plot(dat[,x], dat[,y], pch=3) # 4: x, 3: + 
}
