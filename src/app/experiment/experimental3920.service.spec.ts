import { TestBed } from '@angular/core/testing';

import { Experimental3920Service } from './experimental3920.service';

describe('Experimental3920Service', () => {
  let service: Experimental3920Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3920Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
