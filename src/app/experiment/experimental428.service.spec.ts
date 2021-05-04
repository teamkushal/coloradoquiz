import { TestBed } from '@angular/core/testing';

import { Experimental428Service } from './experimental428.service';

describe('Experimental428Service', () => {
  let service: Experimental428Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental428Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
