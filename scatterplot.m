0;

function [] = scatterplot(file, xcol, ycol)
    [D, delim, headers] = importdata(file);
    disp(delim);
    scatter(D(:,xcol), D(:,ycol))
    %print(outfile, 'TODO')
end
