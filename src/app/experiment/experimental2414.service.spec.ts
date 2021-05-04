import { TestBed } from '@angular/core/testing';

import { Experimental2414Service } from './experimental2414.service';

describe('Experimental2414Service', () => {
  let service: Experimental2414Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2414Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
