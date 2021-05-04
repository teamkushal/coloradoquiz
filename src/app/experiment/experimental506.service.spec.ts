import { TestBed } from '@angular/core/testing';

import { Experimental506Service } from './experimental506.service';

describe('Experimental506Service', () => {
  let service: Experimental506Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental506Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
