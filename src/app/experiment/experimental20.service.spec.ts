import { TestBed } from '@angular/core/testing';

import { Experimental20Service } from './experimental20.service';

describe('Experimental20Service', () => {
  let service: Experimental20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
