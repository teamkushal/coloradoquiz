import { TestBed } from '@angular/core/testing';

import { Experimental193Service } from './experimental193.service';

describe('Experimental193Service', () => {
  let service: Experimental193Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental193Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
