import { TestBed } from '@angular/core/testing';

import { Experimental790Service } from './experimental790.service';

describe('Experimental790Service', () => {
  let service: Experimental790Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental790Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
