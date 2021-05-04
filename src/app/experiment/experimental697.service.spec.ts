import { TestBed } from '@angular/core/testing';

import { Experimental697Service } from './experimental697.service';

describe('Experimental697Service', () => {
  let service: Experimental697Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental697Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
