import { TestBed } from '@angular/core/testing';

import { Experimental946Service } from './experimental946.service';

describe('Experimental946Service', () => {
  let service: Experimental946Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental946Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
