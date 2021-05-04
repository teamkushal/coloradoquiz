import { TestBed } from '@angular/core/testing';

import { Experimental2697Service } from './experimental2697.service';

describe('Experimental2697Service', () => {
  let service: Experimental2697Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2697Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
