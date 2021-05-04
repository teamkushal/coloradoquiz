import { TestBed } from '@angular/core/testing';

import { Experimental594Service } from './experimental594.service';

describe('Experimental594Service', () => {
  let service: Experimental594Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental594Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
