import { TestBed } from '@angular/core/testing';

import { Experimental713Service } from './experimental713.service';

describe('Experimental713Service', () => {
  let service: Experimental713Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental713Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
