import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3232Component } from './test-component3232.component';

describe('TestComponent3232Component', () => {
  let component: TestComponent3232Component;
  let fixture: ComponentFixture<TestComponent3232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
