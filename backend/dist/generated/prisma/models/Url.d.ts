import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UrlModel = runtime.Types.Result.DefaultSelection<Prisma.$UrlPayload>;
export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null;
    _min: UrlMinAggregateOutputType | null;
    _max: UrlMaxAggregateOutputType | null;
};
export type UrlMinAggregateOutputType = {
    id: string | null;
    longUrl: string | null;
    shortCode: string | null;
    createdAt: Date | null;
};
export type UrlMaxAggregateOutputType = {
    id: string | null;
    longUrl: string | null;
    shortCode: string | null;
    createdAt: Date | null;
};
export type UrlCountAggregateOutputType = {
    id: number;
    longUrl: number;
    shortCode: number;
    createdAt: number;
    _all: number;
};
export type UrlMinAggregateInputType = {
    id?: true;
    longUrl?: true;
    shortCode?: true;
    createdAt?: true;
};
export type UrlMaxAggregateInputType = {
    id?: true;
    longUrl?: true;
    shortCode?: true;
    createdAt?: true;
};
export type UrlCountAggregateInputType = {
    id?: true;
    longUrl?: true;
    shortCode?: true;
    createdAt?: true;
    _all?: true;
};
export type UrlAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UrlWhereInput;
    orderBy?: Prisma.UrlOrderByWithRelationInput | Prisma.UrlOrderByWithRelationInput[];
    cursor?: Prisma.UrlWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UrlCountAggregateInputType;
    _min?: UrlMinAggregateInputType;
    _max?: UrlMaxAggregateInputType;
};
export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
    [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUrl[P]> : Prisma.GetScalarType<T[P], AggregateUrl[P]>;
};
export type UrlGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UrlWhereInput;
    orderBy?: Prisma.UrlOrderByWithAggregationInput | Prisma.UrlOrderByWithAggregationInput[];
    by: Prisma.UrlScalarFieldEnum[] | Prisma.UrlScalarFieldEnum;
    having?: Prisma.UrlScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UrlCountAggregateInputType | true;
    _min?: UrlMinAggregateInputType;
    _max?: UrlMaxAggregateInputType;
};
export type UrlGroupByOutputType = {
    id: string;
    longUrl: string;
    shortCode: string;
    createdAt: Date;
    _count: UrlCountAggregateOutputType | null;
    _min: UrlMinAggregateOutputType | null;
    _max: UrlMaxAggregateOutputType | null;
};
export type GetUrlGroupByPayload<T extends UrlGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UrlGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UrlGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UrlGroupByOutputType[P]>;
}>>;
export type UrlWhereInput = {
    AND?: Prisma.UrlWhereInput | Prisma.UrlWhereInput[];
    OR?: Prisma.UrlWhereInput[];
    NOT?: Prisma.UrlWhereInput | Prisma.UrlWhereInput[];
    id?: Prisma.StringFilter<"Url"> | string;
    longUrl?: Prisma.StringFilter<"Url"> | string;
    shortCode?: Prisma.StringFilter<"Url"> | string;
    createdAt?: Prisma.DateTimeFilter<"Url"> | Date | string;
};
export type UrlOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    longUrl?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    shortCode?: string;
    AND?: Prisma.UrlWhereInput | Prisma.UrlWhereInput[];
    OR?: Prisma.UrlWhereInput[];
    NOT?: Prisma.UrlWhereInput | Prisma.UrlWhereInput[];
    longUrl?: Prisma.StringFilter<"Url"> | string;
    createdAt?: Prisma.DateTimeFilter<"Url"> | Date | string;
}, "id" | "shortCode">;
export type UrlOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    longUrl?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UrlCountOrderByAggregateInput;
    _max?: Prisma.UrlMaxOrderByAggregateInput;
    _min?: Prisma.UrlMinOrderByAggregateInput;
};
export type UrlScalarWhereWithAggregatesInput = {
    AND?: Prisma.UrlScalarWhereWithAggregatesInput | Prisma.UrlScalarWhereWithAggregatesInput[];
    OR?: Prisma.UrlScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UrlScalarWhereWithAggregatesInput | Prisma.UrlScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Url"> | string;
    longUrl?: Prisma.StringWithAggregatesFilter<"Url"> | string;
    shortCode?: Prisma.StringWithAggregatesFilter<"Url"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Url"> | Date | string;
};
export type UrlCreateInput = {
    id?: string;
    longUrl: string;
    shortCode: string;
    createdAt?: Date | string;
};
export type UrlUncheckedCreateInput = {
    id?: string;
    longUrl: string;
    shortCode: string;
    createdAt?: Date | string;
};
export type UrlUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    longUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UrlUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    longUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UrlCreateManyInput = {
    id?: string;
    longUrl: string;
    shortCode: string;
    createdAt?: Date | string;
};
export type UrlUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    longUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UrlUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    longUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    shortCode?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UrlCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    longUrl?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UrlMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    longUrl?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UrlMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    longUrl?: Prisma.SortOrder;
    shortCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UrlSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    longUrl?: boolean;
    shortCode?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["url"]>;
export type UrlSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    longUrl?: boolean;
    shortCode?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["url"]>;
export type UrlSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    longUrl?: boolean;
    shortCode?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["url"]>;
export type UrlSelectScalar = {
    id?: boolean;
    longUrl?: boolean;
    shortCode?: boolean;
    createdAt?: boolean;
};
export type UrlOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "longUrl" | "shortCode" | "createdAt", ExtArgs["result"]["url"]>;
export type $UrlPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Url";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        longUrl: string;
        shortCode: string;
        createdAt: Date;
    }, ExtArgs["result"]["url"]>;
    composites: {};
};
export type UrlGetPayload<S extends boolean | null | undefined | UrlDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UrlPayload, S>;
export type UrlCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UrlCountAggregateInputType | true;
};
export interface UrlDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Url'];
        meta: {
            name: 'Url';
        };
    };
    findUnique<T extends UrlFindUniqueArgs>(args: Prisma.SelectSubset<T, UrlFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UrlFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UrlFindFirstArgs>(args?: Prisma.SelectSubset<T, UrlFindFirstArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UrlFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UrlFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UrlFindManyArgs>(args?: Prisma.SelectSubset<T, UrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UrlCreateArgs>(args: Prisma.SelectSubset<T, UrlCreateArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UrlCreateManyArgs>(args?: Prisma.SelectSubset<T, UrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UrlCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UrlDeleteArgs>(args: Prisma.SelectSubset<T, UrlDeleteArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UrlUpdateArgs>(args: Prisma.SelectSubset<T, UrlUpdateArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UrlDeleteManyArgs>(args?: Prisma.SelectSubset<T, UrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UrlUpdateManyArgs>(args: Prisma.SelectSubset<T, UrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UrlUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UrlUpsertArgs>(args: Prisma.SelectSubset<T, UrlUpsertArgs<ExtArgs>>): Prisma.Prisma__UrlClient<runtime.Types.Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UrlCountArgs>(args?: Prisma.Subset<T, UrlCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UrlCountAggregateOutputType> : number>;
    aggregate<T extends UrlAggregateArgs>(args: Prisma.Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>;
    groupBy<T extends UrlGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UrlGroupByArgs['orderBy'];
    } : {
        orderBy?: UrlGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UrlFieldRefs;
}
export interface Prisma__UrlClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UrlFieldRefs {
    readonly id: Prisma.FieldRef<"Url", 'String'>;
    readonly longUrl: Prisma.FieldRef<"Url", 'String'>;
    readonly shortCode: Prisma.FieldRef<"Url", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Url", 'DateTime'>;
}
export type UrlFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where: Prisma.UrlWhereUniqueInput;
};
export type UrlFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where: Prisma.UrlWhereUniqueInput;
};
export type UrlFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where?: Prisma.UrlWhereInput;
    orderBy?: Prisma.UrlOrderByWithRelationInput | Prisma.UrlOrderByWithRelationInput[];
    cursor?: Prisma.UrlWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UrlScalarFieldEnum | Prisma.UrlScalarFieldEnum[];
};
export type UrlFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where?: Prisma.UrlWhereInput;
    orderBy?: Prisma.UrlOrderByWithRelationInput | Prisma.UrlOrderByWithRelationInput[];
    cursor?: Prisma.UrlWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UrlScalarFieldEnum | Prisma.UrlScalarFieldEnum[];
};
export type UrlFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where?: Prisma.UrlWhereInput;
    orderBy?: Prisma.UrlOrderByWithRelationInput | Prisma.UrlOrderByWithRelationInput[];
    cursor?: Prisma.UrlWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UrlScalarFieldEnum | Prisma.UrlScalarFieldEnum[];
};
export type UrlCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UrlCreateInput, Prisma.UrlUncheckedCreateInput>;
};
export type UrlCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UrlCreateManyInput | Prisma.UrlCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UrlCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    data: Prisma.UrlCreateManyInput | Prisma.UrlCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UrlUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UrlUpdateInput, Prisma.UrlUncheckedUpdateInput>;
    where: Prisma.UrlWhereUniqueInput;
};
export type UrlUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UrlUpdateManyMutationInput, Prisma.UrlUncheckedUpdateManyInput>;
    where?: Prisma.UrlWhereInput;
    limit?: number;
};
export type UrlUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UrlUpdateManyMutationInput, Prisma.UrlUncheckedUpdateManyInput>;
    where?: Prisma.UrlWhereInput;
    limit?: number;
};
export type UrlUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where: Prisma.UrlWhereUniqueInput;
    create: Prisma.XOR<Prisma.UrlCreateInput, Prisma.UrlUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UrlUpdateInput, Prisma.UrlUncheckedUpdateInput>;
};
export type UrlDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
    where: Prisma.UrlWhereUniqueInput;
};
export type UrlDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UrlWhereInput;
    limit?: number;
};
export type UrlDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UrlSelect<ExtArgs> | null;
    omit?: Prisma.UrlOmit<ExtArgs> | null;
};
