import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent921Component } from './test-component921.component';

describe('TestComponent921Component', () => {
  let component: TestComponent921Component;
  let fixture: ComponentFixture<TestComponent921Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent921Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
