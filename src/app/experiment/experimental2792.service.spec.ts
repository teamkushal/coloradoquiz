import { TestBed } from '@angular/core/testing';

import { Experimental2792Service } from './experimental2792.service';

describe('Experimental2792Service', () => {
  let service: Experimental2792Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2792Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
