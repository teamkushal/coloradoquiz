import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent809Component } from './test-component809.component';

describe('TestComponent809Component', () => {
  let component: TestComponent809Component;
  let fixture: ComponentFixture<TestComponent809Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent809Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
