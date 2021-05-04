import { TestBed } from '@angular/core/testing';

import { Experimental3093Service } from './experimental3093.service';

describe('Experimental3093Service', () => {
  let service: Experimental3093Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3093Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
