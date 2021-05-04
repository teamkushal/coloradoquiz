import { TestBed } from '@angular/core/testing';

import { Experimental973Service } from './experimental973.service';

describe('Experimental973Service', () => {
  let service: Experimental973Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental973Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
