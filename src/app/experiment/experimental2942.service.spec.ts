import { TestBed } from '@angular/core/testing';

import { Experimental2942Service } from './experimental2942.service';

describe('Experimental2942Service', () => {
  let service: Experimental2942Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2942Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
