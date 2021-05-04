import { TestBed } from '@angular/core/testing';

import { Experimental3621Service } from './experimental3621.service';

describe('Experimental3621Service', () => {
  let service: Experimental3621Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3621Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
