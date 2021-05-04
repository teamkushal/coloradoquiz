import { TestBed } from '@angular/core/testing';

import { Experimental195Service } from './experimental195.service';

describe('Experimental195Service', () => {
  let service: Experimental195Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental195Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
